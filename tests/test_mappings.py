
#!/usr/bin/env python3
import json, sys, csv, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

MAPPING = ROOT / "extras/word-emoji-mapping.json"
BIP39 = ROOT / "extras/bip39.txt"

def load_mapping(path):
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    if isinstance(data, dict):
        return data
    raise ValueError("mapping_2048.json must be a JSON object {word: [emoji1, emoji2]}")

def load_bip39(path):
    with open(path, "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        words = [row[0].strip() for row in reader if row and row[0].strip()]
    return words

def is_probably_emoji(s: str) -> bool:
    # Heuristic: string contains at least one non-ASCII codepoint or VS16
    return any(ord(ch) > 0x7F for ch in s)

def main():
    ok = True
    mapping = load_mapping(MAPPING)
    bip39 = load_bip39(BIP39)
    bip39_set = set(bip39)

    # 1) Size & keys check
    if len(mapping) != 2048:
        print(f"[FAIL] mapping size != 2048 (got {len(mapping)})")
        ok = False
    else:
        print("[OK] mapping contains 2048 entries")

    map_keys = set(mapping.keys())
    missing = sorted(bip39_set - map_keys)
    extra = sorted(map_keys - bip39_set)
    if missing:
        print(f"[FAIL] {len(missing)} BIP39 words missing from mapping")
        for w in missing[:20]:
            print("   -", w)
        ok = False
    else:
        print("[OK] all BIP39 words present")

    if extra:
        print(f"[FAIL] {len(extra)} non-standard words found in mapping")
        for w in extra[:20]:
            print("   +", w)
        ok = False
    else:
        print("[OK] no extra/unofficial words found")

    # 2) Pair structure + emoji sanity
    bad_shape = []
    bad_emoji = []
    for w, pair in mapping.items():
        if not isinstance(pair, list) or len(pair) != 2:
            bad_shape.append((w, pair))
            continue
        e1, e2 = pair
        if not (isinstance(e1, str) and isinstance(e2, str) and e1 and e2):
            bad_shape.append((w, pair))
            continue
        if not (is_probably_emoji(e1) and is_probably_emoji(e2)):
            bad_emoji.append((w, pair))

    if bad_shape:
        print(f"[FAIL] {len(bad_shape)} entries have invalid pair structure (need list of two non-empty strings)")
        for w, p in bad_shape[:10]:
            print("   *", w, "->", p)
        ok = False
    else:
        print("[OK] all entries are lists of two strings")

    if bad_emoji:
        print(f"[WARN] {len(bad_emoji)} entries may not contain emoji codepoints (heuristic)")
        for w, p in bad_emoji[:10]:
            print("   ?", w, "->", p)
    else:
        print("[OK] all pairs look like emoji (heuristic)")

    # 3) Uniqueness (order-sensitive)
    joined = ["".join(mapping[w]) for w in bip39]
    unique = set(joined)
    if len(unique) != len(joined):
        print(f"[FAIL] found duplicate emoji pairs (order-sensitive).")
        # find collisions
        from collections import defaultdict
        rev = defaultdict(list)
        for w in bip39:
            rev["".join(mapping[w])].append(w)
        for pair, words in rev.items():
            if len(words) > 1:
                print("   DUP:", pair, "=>", ", ".join(words))
        ok = False
    else:
        print("[OK] all 2048 pairs are unique (order-sensitive)")

    # 4) No empty/whitespace-only entries
    whitespace_issues = [w for w, p in mapping.items() if any(not e.strip() for e in p)]
    if whitespace_issues:
        print(f"[FAIL] {len(whitespace_issues)} entries contain empty/whitespace-only emojis")
        for w in whitespace_issues[:10]:
            print("   *", w)
        ok = False
    else:
        print("[OK] no empty/whitespace-only emoji entries")

    print("\nRESULT:", "PASS ✅" if ok else "FAIL ❌")
    return 0 if ok else 1

if __name__ == "__main__":
    raise SystemExit(main())
