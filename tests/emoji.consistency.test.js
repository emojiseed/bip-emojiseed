// test/emoji.consistency.test.js
// Run with: node --test test/emoji.consistency.test.js
// Requires Node 18+ (for global fetch & node:test)

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const CSV_URL = 'https://raw.githubusercontent.com/emojiseed/bip-emojiseed/main/extras/word-emoji-mapping.csv';
const EMOJI_TXT_PATH = path.join(process.cwd(), 'data', 'emoji.txt');

// Helpful utils
const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
const graphemes = s => Array.from(segmenter.segment(s), x => x.segment);

// Very permissive check that each grapheme is an emoji-like pictograph.
// (Extended_Pictographic covers most emoji, including multi-codepoint ones)
const isEmojiGrapheme = g => /\p{Extended_Pictographic}/u.test(g);

// Minimal CSV parser tuned to this file’s format
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  assert(lines.length > 1, 'CSV appears empty');

  const header = lines[0].split(',').map(s => s.trim().toLowerCase());
  const idxIndex = header.indexOf('index');
  const idxWord  = header.indexOf('word');
  const idxE1    = header.indexOf('emoji1');
  const idxE2    = header.indexOf('emoji2');
  assert(idxIndex >= 0 && idxWord >= 0 && idxE1 >= 0 && idxE2 >= 0,
    'CSV must have headers: index,word,emoji1,emoji2');

  return lines.slice(1).map((line, i) => {
    const cols = line.split(',');
    assert.equal(cols.length, header.length, `CSV row ${i+2} has unexpected column count`);
    return {
      index: Number(cols[idxIndex]),
      word: cols[idxWord],
      emoji1: cols[idxE1],
      emoji2: cols[idxE2],
    };
  });
}

async function fetchCSV() {
  const res = await fetch(CSV_URL, { cache: 'no-store' });
  assert(res.ok, `Failed to fetch CSV: ${res.status} ${res.statusText}`);
  const text = await res.text();
  return parseCSV(text);
}

function readEmojiTxt() {
  assert(fs.existsSync(EMOJI_TXT_PATH), `Missing data file: ${EMOJI_TXT_PATH}`);
  const raw = fs.readFileSync(EMOJI_TXT_PATH, 'utf8');
  const lines = raw.split(/\r?\n/)
    // keep empty lines for pristine checks, but remember raw form
    .map(l => l);
  return lines;
}

test('emoji.txt is pristine and matches CSV mapping exactly', async (t) => {
  const csv = await fetchCSV();                // source of truth
  const txtLines = readEmojiTxt();             // local file (data/emoji.txt)

  // 1) No BOM, no trailing junk at file ends
  assert(!txtLines[0]?.startsWith('\uFEFF'), 'emoji.txt should not start with BOM');

  // 2) No blank lines anywhere; no whitespace padding
  const hasBlank = txtLines.some((l, i) => l.trim().length === 0 && l.length > 0 || l.length === 0);
  assert(!hasBlank, 'emoji.txt must have no blank/empty lines');

  const hasLeadingOrTrailingWS = txtLines.some((l, i) => l !== l.trim());
  assert(!hasLeadingOrTrailingWS, 'No leading/trailing whitespace allowed on any line');

  // 3) Length matches CSV (one line per mapping)
  assert.equal(txtLines.length, csv.length, `Line count mismatch: emoji.txt=${txtLines.length}, CSV=${csv.length}`);

  // 4) No duplicate lines
  const seen = new Set();
  for (let i = 0; i < txtLines.length; i++) {
    const line = txtLines[i];
    const key = line;
    assert(!seen.has(key), `Duplicate line detected at row ${i+1}: "${line}"`);
    seen.add(key);
  }

  // 5) Every line is exactly two emoji graphemes, no extra characters
  for (let i = 0; i < txtLines.length; i++) {
    const line = txtLines[i];

    // must be exactly 2 graphemes
    const gs = graphemes(line);
    assert.equal(gs.length, 2, `Row ${i+1} must contain exactly two emoji graphemes; found ${gs.length}`);

    // each grapheme should be emoji-like
    assert(isEmojiGrapheme(gs[0]) && isEmojiGrapheme(gs[1]),
      `Row ${i+1} contains non-emoji characters`);

    // no spaces, tabs, or non-printing chars
    assert(!/[ \t]/.test(line), `Row ${i+1} must not contain spaces or tabs`);
    assert.equal(line.normalize('NFC'), line, `Row ${i+1} must be NFC normalized`);
  }

  // 6) Exact match to CSV: concatenated emoji1+emoji2 equals line (by index order)
  //    Assumes CSV is ordered by "index". If not, we sort by index to align.
  const csvOrdered = [...csv].sort((a, b) => a.index - b.index);
  for (let i = 0; i < csvOrdered.length; i++) {
    const expected = `${csvOrdered[i].emoji1}${csvOrdered[i].emoji2}`;
    const actual   = txtLines[i];
    assert.equal(actual, expected, `Row ${i+1} mismatch: expected "${expected}" got "${actual}"`);
  }

  // 7) Extra sanity: ensure there are no stray characters beyond the two graphemes
  for (let i = 0; i < txtLines.length; i++) {
    const line = txtLines[i];
    const gs = graphemes(line);
    assert.equal(gs.join(''), line, `Row ${i+1} contains unexpected extra characters`);
  }
});

