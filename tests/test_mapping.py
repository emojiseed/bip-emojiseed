
import json, csv, os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAPPING = ROOT / "mapping_2048.json"
BIP39 = ROOT / "bip39.csv"

def load_mapping():
    with open(MAPPING, "r", encoding="utf-8") as f:
        return json.load(f)

def load_bip39():
    with open(BIP39, "r", encoding="utf-8") as f:
        return [row.split(",")[0].strip() for row in f if row.strip()]

def test_size_is_2048():
    m = load_mapping()
    assert len(m) == 2048, f"Expected 2048 entries, got {len(m)}"

def test_keys_match_bip39():
    m = load_mapping()
    words = set(load_bip39())
    assert set(m.keys()) == words, "Mapping keys must equal official BIP39 english list"

def test_pairs_are_lists_of_two_strings():
    m = load_mapping()
    for w, pair in m.items():
        assert isinstance(pair, list) and len(pair) == 2, f"{w} -> invalid pair {pair}"
        assert all(isinstance(e, str) and e for e in pair), f"{w} -> empty/invalid emoji in {pair}"

def test_pairs_are_unique_order_sensitive():
    m = load_mapping()
    joined = ["".join(m[w]) for w in sorted(m.keys())]
    assert len(set(joined)) == len(joined), "Duplicate emoji pairs detected"

def test_no_whitespace_only_emojis():
    m = load_mapping()
    for w, pair in m.items():
        assert all(e.strip() for e in pair), f"{w} -> contains whitespace-only emoji"

