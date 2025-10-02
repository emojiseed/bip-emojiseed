# tests/test_mappings.py
# Validate:
#  - emoji.txt has N non-blank, unique lines
#  - each line is EXACTLY the concat of CSV cols 2+3 (two emoji, no spaces/commas)
#  - markdown table mirrors the CSV mapping
#  - counts/lengths consistent across all three files
#
# Run:  pytest -q
#
# Expected local files:
#   ./emoji.txt
#   ./extras/word-emoji-mapping.csv
#   ./extras/word-emoji-mapping.md

import csv
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "extras" / "word-emoji-mapping.csv"
MD_PATH  = ROOT / "extras" / "word-emoji-mapping.md"
TXT_PATH = ROOT / "emoji.txt"

# "Two emojis only" guardrails:
# - no ASCII letters/digits/punct
# - no whitespace
# - must equal CSV col2+col3 exactly (strongest check)
NO_WS_RE = re.compile(r"\s")
ASCII_RE = re.compile(r"[A-Za-z0-9\.,;:_\-+/\\|'\"`~!@#$%^&*(){}\[\]<>?=]")

def read_csv_map():
    """Return list of (word, e1, e2) and dicts keyed by word and by pair."""
    rows = []
    with CSV_PATH.open(newline="", encoding="utf-8") as f:
        r = csv.reader(f)
        header = next(r, None)
        for row in r:
            # Expect: word, emoji1, emoji2 (ignore extra columns if present)
            if not row:
                continue
            word = row[0].strip()
            e1 = row[1].strip() if len(row) > 1 else ""
            e2 = row[2].strip() if len(row) > 2 else ""
            rows.append((word, e1, e2))
    return rows

def read_txt_lines():
    with TXT_PATH.open(encoding="utf-8") as f:
        return [ln.rstrip("\n") for ln in f]

def read_md_map():
    """
    Parse a pipe-table like:

    word       | emoji1 | emoji2 | emoji1_name | emoji2_name
    ---------- | ------ | ------ | ----------- | -----------
    abandon    | 😀     | 🎲     | ...         | ...
    """
    pairs = []
    with MD_PATH.open(encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("---"):
                continue
            if "|" not in line:
                continue
            # Split and strip cells
            cells = [c.strip() for c in line.split("|")]
            # Heuristic: header row often contains 'word' — skip it
            if len(cells) < 3 or any(c.lower() == "word" for c in cells):
                continue
            word, e1, e2 = cells[0], cells[1], cells[2]
            # Skip separator rows like '---'
            if set(word) <= {"-", ":"}:
                continue
            # Basic sanity: keep only rows that look like data
            if word and e1 and e2:
                pairs.append((word, e1, e2))
    return pairs

def test_files_exist():
    assert CSV_PATH.exists(), f"Missing {CSV_PATH}"
    assert MD_PATH.exists(),  f"Missing {MD_PATH}"
    assert TXT_PATH.exists(), f"Missing {TXT_PATH}"

def test_consistent_counts():
    csv_rows = read_csv_map()
    md_rows  = read_md_map()
    txt_rows = read_txt_lines()

    # CSV is source of truth
    n = len(csv_rows)
    assert n > 0, "CSV has no data rows"
    assert len(txt_rows) == n, f"emoji.txt lines ({len(txt_rows)}) != CSV rows ({n})"
    assert len(md_rows) == n,  f"Markdown rows ({len(md_rows)}) != CSV rows ({n})"

def test_emoji_txt_rules_and_accuracy():
    csv_rows = read_csv_map()
    txt_rows = read_txt_lines()

    # No blank lines
    assert all(line != "" for line in txt_rows), "emoji.txt has blank lines"

    # No duplicates
    assert len(set(txt_rows)) == len(txt_rows), "emoji.txt contains duplicate lines"

    # Validate each row against CSV col2+col3
    for idx, ((word, e1, e2), line) in enumerate(zip(csv_rows, txt_rows), start=1):
        # Non-empty emojis in CSV
        assert e1 != "" and e2 != "", f"CSV row {idx} has empty emoji(s) for word '{word}'"

        # No whitespace and no ASCII in emoji.txt line
        assert not NO_WS_RE.search(line), f"emoji.txt line {idx} has whitespace"
        assert not ASCII_RE.search(line), f"emoji.txt line {idx} contains ASCII characters"

        # Must match concatenation exactly
        expected = f"{e1}{e2}"
        assert line == expected, (
            f"emoji.txt line {idx} mismatch for '{word}': "
            f"got '{line}', expected '{expected}'"
        )

def test_markdown_matches_csv():
    csv_rows = read_csv_map()
    md_rows  = read_md_map()

    # Build maps for fast lookup
    csv_by_word = {w: (e1, e2) for (w, e1, e2) in csv_rows}
    md_by_word  = {w: (e1, e2) for (w, e1, e2) in md_rows}

    missing_in_md = [w for w in csv_by_word.keys() if w not in md_by_word]
    extra_in_md   = [w for w in md_by_word.keys() if w not in csv_by_word]

    assert not missing_in_md, f"Words missing in MD: {missing_in_md[:10]}..."
    assert not extra_in_md,   f"Extra words in MD: {extra_in_md[:10]}..."

    # Compare pairs
    mismatches = []
    for w, (e1, e2) in csv_by_word.items():
        if md_by_word.get(w) != (e1, e2):
            mismatches.append((w, (e1, e2), md_by_word.get(w)))
    assert not mismatches, f"MD emoji pairs differ from CSV for: {mismatches[:10]}"

def test_two_emojis_only_by_structure():
    """
    Structural safeguard for "two emojis only":
    - CSV col2 and col3 must each be a single non-empty token (no spaces or commas)
    - emoji.txt line must be exactly those two tokens concatenated (already checked)
    """
    csv_rows = read_csv_map()
    for idx, (word, e1, e2) in enumerate(csv_rows, start=1):
        for label, token in (("emoji1", e1), ("emoji2", e2)):
            assert token != "", f"Empty {label} at row {idx} ('{word}')"
            assert "," not in token, f"Comma found in {label} at row {idx} ('{word}')"
            assert not NO_WS_RE.search(token), f"Whitespace in {label} at row {idx} ('{word}')"
            assert not ASCII_RE.search(token), f"ASCII chars in {label} at row {idx} ('{word}')"

