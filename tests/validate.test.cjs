#!/usr/bin/env node
// Run with: node --test

const fs = require("fs");
const path = require("path");
const test = require("node:test");
const assert = require("node:assert/strict");

const ROOT   = path.join(__dirname, "..");
const DATA   = path.join(ROOT, "data");
const XDATA  = path.join(ROOT, "extras");

const ENGLISH_TXT = path.join(DATA,  "english.txt");
const EMOJI_TXT   = path.join(DATA,  "emoji.txt");
const MAPPING_CSV = path.join(XDATA, "word-emoji-mapping.csv");

// ---------- helpers ----------
function readText(file) {
  let s = fs.readFileSync(file, "utf8");
  if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1); // BOM
  return s.replace(/\r\n/g, "\n");
}
function readLines(file) {
  return readText(file).split("\n");
}
function isCommentOrEmpty(line) {
  const t = (line || "").trim();
  return !t || t.startsWith("#");
}
function splitCSVLine(line) {
  return (line || "").split(",").map((s) => s.trim());
}
function maybeHeader(parts) {
  const p0 = (parts[0] || "").toLowerCase();
  const p1 = (parts[1] || "").toLowerCase();
  return p0 === "index" || (p0 === "word" && p1 === "emoji1");
}
const seg =
  typeof Intl !== "undefined" && Intl.Segmenter
    ? new Intl.Segmenter("en", { granularity: "grapheme" })
    : null;
function graphemes(str) {
  if (!str) return [];
  if (seg) return Array.from(seg.segment(str)).map((s) => s.segment);
  // fallback
  return [...str];
}
function twoCharRuleOk(emoji) {
  const g = graphemes(emoji);
  const cps = [...emoji];
  return g.length === 1 && cps.length <= 2;
}

// Detect emoji.txt format: CSV or PAIRS
function detectEmojiFormat(lines) {
  // ignore comments/empties
  const sample = lines.find((l) => !isCommentOrEmpty(l)) || "";
  if (!sample) return "unknown";
  if (sample.includes(",")) return "csv";
  // If it has no commas and at least 1 pictographic grapheme, assume pairs
  const g = graphemes(sample);
  return g.length >= 1 ? "pairs" : "unknown";
}

// Parse emoji.txt (supports "csv" and "pairs")
function parseEmojiTxt(lines, format, englishWords) {
  const rows = [];
  let logical = 0;
  for (const line of lines) {
    if (isCommentOrEmpty(line)) continue;
    logical++;
    if (format === "csv") {
      const parts = splitCSVLine(line);
      if (parts.length < 3) {
        throw new Error(`emoji.txt malformed at logical line ${logical}: "${line}"`);
      }
      const idx = Number(parts[0]);
      if (!Number.isFinite(idx) || idx < 1 || idx > 2048) {
        throw new Error(`emoji.txt invalid index at logical line ${logical}: "${parts[0]}"`);
      }
      const word = parts[1] || "";
      const e1 = parts[2] || "";
      const e2 = parts[3] || "";
      if (!word) throw new Error(`emoji.txt missing word at index ${idx}`);
      if (!e1) throw new Error(`emoji.txt missing emoji1 at index ${idx}`);
      rows.push({ idx, word, e1, e2 });
    } else if (format === "pairs") {
      const g = graphemes(line);
      if (g.length < 1 || g.length > 2) {
        throw new Error(`emoji.txt pairs line ${logical} must be 1–2 emojis: "${line}"`);
      }
      const idx = rows.length + 1; // 1-based by order
      const word = englishWords[idx - 1] || "";
      const e1 = g[0] || "";
      const e2 = g[1] || "";
      if (!word) {
        throw new Error(`pairs mode: english word missing at index ${idx}`);
      }
      rows.push({ idx, word, e1, e2 });
    } else {
      throw new Error("Unknown emoji.txt format");
    }
  }
  return rows;
}

// ---------- tests ----------
test("files exist", () => {
  assert.ok(fs.existsSync(ENGLISH_TXT), `missing ${ENGLISH_TXT}`);
  assert.ok(fs.existsSync(EMOJI_TXT),   `missing ${EMOJI_TXT}`);
  assert.ok(fs.existsSync(MAPPING_CSV), `missing ${MAPPING_CSV}`);
});

test("file size of emoji.txt is correct", () => {
  const st = fs.statSync(EMOJI_TXT);
  assert.ok(st.size > 0, "emoji.txt empty");
});

test("validate files", () => {
  const englishRaw = readLines(ENGLISH_TXT);
  const emojiRaw   = readLines(EMOJI_TXT);
  const mappingRaw = readLines(MAPPING_CSV);

  const english = englishRaw.filter((l) => !isCommentOrEmpty(l));
  const emoji   = emojiRaw.filter((l) => !isCommentOrEmpty(l));
  const mapping = mappingRaw.filter((l) => !isCommentOrEmpty(l));

  // length checks
  assert.equal(english.length, 2048, `english.txt must have 2048 words (found ${english.length})`);
  assert.equal(emoji.length,   2048, `emoji.txt must have 2048 rows (found ${emoji.length})`);

  // detect format + parse emoji.txt
  const fmt = detectEmojiFormat(emoji);
  assert.ok(fmt === "csv" || fmt === "pairs", `Cannot detect emoji.txt format (got "${fmt}")`);

  let emojiRows;
  try {
    emojiRows = parseEmojiTxt(emoji, fmt, english);
  } catch (e) {
    assert.fail(e.message);
  }

  // english by index
  const englishByIndex = Object.fromEntries(english.map((w, i) => [i + 1, w.trim()]));

  // parse mapping csv: supports "index,word,emoji1,emoji2" or "word,emoji1,emoji2"
  const mapByIndex = new Map();
  const mapByWord  = new Map();
  for (let i = 0; i < mapping.length; i++) {
    const parts = splitCSVLine(mapping[i]);
    if (maybeHeader(parts)) continue;

    let idx, word, e1, e2;
    if (parts.length >= 4 && /^\d+$/.test(parts[0])) {
      idx  = Number(parts[0]);
      word = parts[1];
      e1   = parts[2];
      e2   = parts[3] || "";
    } else if (parts.length >= 3) {
      word = parts[0];
      e1   = parts[1];
      e2   = parts[2] || "";
      idx  = english.indexOf(word) + 1;
      assert.ok(idx > 0, `mapping word not found in english.txt: "${word}"`);
    } else {
      assert.fail(`word-emoji-mapping.csv malformed near line ${i + 1}: "${mapping[i]}"`);
    }
    assert.ok(Number.isFinite(idx) && idx >= 1 && idx <= 2048, `mapping index invalid for "${word}"`);
    mapByIndex.set(idx, { idx, word, e1, e2 });
    mapByWord.set(word, { idx, word, e1, e2 });
  }

  // cross-file checks + 2-char rule
  const errors = [];

  for (const row of emojiRows) {
    const { idx, word, e1, e2 } = row;

    // english alignment
    const enWord = englishByIndex[idx];
    if (enWord !== word) {
      errors.push(`Index ${idx}: english.txt="${enWord}" vs emoji.txt="${word}"`);
    }

    // mapping alignment
    const mIdx = mapByIndex.get(idx);
    if (!mIdx) {
      errors.push(`Index ${idx}: missing in word-emoji-mapping.csv`);
    } else {
      if (mIdx.word !== word) {
        errors.push(`Index ${idx}: mapping word "${mIdx.word}" != emoji.txt word "${word}"`);
      }
      if (mIdx.e1 !== e1) {
        errors.push(`Index ${idx}: mapping emoji1 "${mIdx.e1}" != emoji.txt emoji1 "${e1}"`);
      }
      if (mIdx.e2 && e2 && mIdx.e2 !== e2) {
        errors.push(`Index ${idx}: mapping emoji2 "${mIdx.e2}" != emoji.txt emoji2 "${e2}"`);
      }
    }

    // 2-character rule
    if (!twoCharRuleOk(e1)) errors.push(`Index ${idx}: emoji1 violates 2-char rule: "${e1}"`);
    if (e2 && !twoCharRuleOk(e2)) errors.push(`Index ${idx}: emoji2 violates 2-char rule: "${e2}"`);
  }

  if (errors.length) {
    const preview = errors.slice(0, 25).join("\n  - ");
    assert.fail(`Validation failed with ${errors.length} issues:\n  - ${preview}${errors.length > 25 ? `\n  ...and ${errors.length - 25} more` : ""}`);
  }
});
