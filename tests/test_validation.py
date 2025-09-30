from pathlib import Path
import json, csv

ROOT = Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / "extras/word-emoji-mapping.json"
CSV_PATH  = ROOT / "extras/word-emoji-mapping.csv"
MD_PATH   = ROOT / "extras/word-emoji-mapping.md"
WL_PATH   = ROOT / "emoji.txt"

def test_files_exist():
    assert JSON_PATH.exists()
    assert CSV_PATH.exists()
    assert MD_PATH.exists()
    assert WL_PATH.exists()

def _load_json():
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    assert isinstance(data, dict)
    return {str(k): list(v) for k, v in data.items()}

def _load_csv():
    with CSV_PATH.open(newline="", encoding="utf-8") as f:
        return [(r["word"], r["emoji1"], r["emoji2"]) for r in csv.DictReader(f)]

def _load_md():
    rows = []
    for line in MD_PATH.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if "→" in line:
            w, right = [p.strip() for p in line.split("→", 1)]
            rows.append((w, right))
    return rows

def _load_wl():
    rows = []
    for line in WL_PATH.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        rows.append(line)
    return rows

def test_json_unique_2048_pairs():
    data = _load_json()
    assert len(data) == 2048
    pairs = ["".join(v) for v in data.values()]
    assert len(set(pairs)) == 2048

def test_csv_matches_json():
    data = _load_json()
    csv_rows = _load_csv()
    assert len(csv_rows) == 2048
    assert {(w, v[0], v[1]) for w, v in data.items()} == set(csv_rows)

def test_md_matches_json():
    data = _load_json()
    md_rows = _load_md()
    assert len(md_rows) == 2048
    md_map = dict(md_rows)
    assert set(md_map) == set(data)
    for w, v in data.items():
        assert md_map[w] == "".join(v)

def test_wl_matches_json():
    data = _load_json()
    wl_rows = _load_wl()
    assert len(wl_rows) == 2048



