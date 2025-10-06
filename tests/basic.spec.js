import fs from "fs";
import path from "path";

const CSV = path.resolve("extras/word-emoji-mapping.csv");
const TXT = path.resolve("data/emoji.txt");

function read(p) {
  return fs.readFileSync(p, "utf8").replace(/\r/g, "");
}

describe("EmojiSeed validation", () => {
  const csvText = read(CSV);
  const txtText = read(TXT);

  test("CSV file exists and has content", () => {
    expect(csvText.length).toBeGreaterThan(0);
  });

  test("emoji.txt matches row count", () => {
    const csvRows = csvText.trim().split("\n").length - 1;
    const txtRows = txtText.trim().split("\n").length;
    expect(txtRows).toBe(csvRows);
  });
});

