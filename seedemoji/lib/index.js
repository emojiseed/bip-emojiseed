// Programmatic API (optional)
const fs = require("fs");
const path = require("path");

function resolveDataRoot() {
  return path.join(__dirname, "..", "data");
}

function lineBefore({ term = "orbit", englishPath, emojiPath } = {}) {
  const root = resolveDataRoot();
  const ENGLISH = englishPath || path.join(root, "english.txt");
  const EMOJI = emojiPath || path.join(root, "emoji.txt");

  const englishLines = fs.readFileSync(ENGLISH, "utf8").split(/\r?\n/);
  const emojiLines = fs.readFileSync(EMOJI, "utf8").split(/\r?\n/);

  const idx0 = englishLines.findIndex((l) => l.includes(term));
  if (idx0 <= 0) return null; // not found or first line

  return emojiLines[idx0 - 1] ?? null;
}

module.exports = { lineBefore };

