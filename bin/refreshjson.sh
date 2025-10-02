#!/usr/bin/env bash
# ------------------------------------------------------------
# EmojiSeed Mapping Extractor (JSON)
# Downloads the BIP-EmojiSeed CSV, extracts word -> [emoji1, emoji2],
# and saves them into emoji.json
# ------------------------------------------------------------

set -euo pipefail

TMP_CSV="$(mktemp)"
OUT_JSON="emoji.json"
CSV_URL="https://raw.githubusercontent.com/emojiseed/bip-emojiseed/main/extras/word-emoji-mapping.csv"

# Fetch CSV (expected columns: word,emoji1,emoji2 with a header row)
curl -sSL "$CSV_URL" > "$TMP_CSV"

# Convert to JSON object: { "word": ["emoji1","emoji2"], ... }
awk -F',' '
  BEGIN{
    OFS=","
    print "{"
  }
  NR==1 { next } # skip header
  {
    # strip potential CR and surrounding quotes
    gsub(/\r/,"")
    for(i=1;i<=3;i++){ sub(/^"/,"",$i); sub(/"$/,"",$i) }

    word=$1; e1=$2; e2=$3

    if (count++>0) { printf(",\n") }
    printf("\"%s\":[\"%s\",\"%s\"]", word, e1, e2)
  }
  END{
    print "\n}"
  }
' "$TMP_CSV" > "$OUT_JSON"

rm -f "$TMP_CSV"

# Optional: pretty-print if jq is available
if command -v jq >/dev/null 2>&1; then
  jq . "$OUT_JSON" > "$OUT_JSON.tmp" && mv "$OUT_JSON.tmp" "$OUT_JSON"
fi

echo "✅ Done! Generated $OUT_JSON from word-emoji-mapping.csv"
# ------------------------------------------------------------

