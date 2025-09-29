"""
Pytest-style checks for EmojiSeed mapping completeness/consistency.

Place this file at repo root as tests/test_mappings.py
Run:  pytest -q   (or)  python -m pytest -q
"""
from pathlib import Path
import json, csv, re

ROOT = Path(__file__).resolve().parent.parent

# File paths
JSON_PATH = ROOT / "word-emoji-mapping.json"
CSV_PATH = ROOT / "word-emoji-mapping.csv"
MD_PATH  = ROOT / "word-emoji-mapping.md"

def test_files_exist():
    assert JSON_PATH.exists(), f"Missing {JSON_PATH}"
    assert CSV_PATH.exists(), f"Missing {CSV_PATH}"
    assert MD_PATH.exists(),  f"Missing {MD_PATH}"

def load_json():
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    assert isinstance(data, dict)
    return {str(k): list(v) for k, v in data.items()}

def load_csv():
    rows = []
    with CSV_PATH.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for r in reader:
            rows.append((r["word"], r["emoji1"], r["emoji2"]))
    return rows

def load_md():
    lines = []
    for raw in MD_PATH.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or "→" not in line:
            continue
        word, right = [p.strip() for p in line.split("→", 1)]
        lines.append((word, right))
    return lines

def test_json_has_2048_unique_words_and_pairs():
    data = load_json()
    assert len(data) == 2048, f"JSON words != 2048 ({len(data)})"
    pairs = []
    for w, pair in data.items():
        assert isinstance(pair, list) and len(pair) == 2, f"{w} not a 2-emoji list"
        assert all(isinstance(e, str) and e for e in pair), f"{w} has empty emoji"
        pairs.append("".join(pair))
    assert len(set(pairs)) == len(pairs), "Duplicate emoji pairs detected in JSON"

def test_csv_matches_json():
    data = load_json()
    csv_rows = load_csv()
    assert len(csv_rows) == 2048, f"CSV rows != 2048 ({len(csv_rows)})"
    json_set = {(w, v[0], v[1]) for w, v in data.items()}
    csv_set  = set(csv_rows)
    assert json_set == csv_set, "CSV content differs from JSON"

def test_md_matches_json():
    data = load_json()
    md_rows = load_md()
    assert len(md_rows) == 2048, f"MD rows != 2048 ({len(md_rows)})"
    json_pairs = {w: "".join(v) for w, v in data.items()}
    md_map = dict(md_rows)
    assert set(md_map.keys()) == set(data.keys()), "MD word set differs from JSON"
    for w, pair in json_pairs.items():
        assert md_map[w] == pair, f"MD pair mismatch for {w}: {md_map[w]} != {pair}"

