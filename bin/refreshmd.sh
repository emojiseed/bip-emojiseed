#!/usr/bin/env bash
# ------------------------------------------------------------
# EmojiSeed Mapping Extractor
# Downloads the BIP-EmojiSeed CSV, extracts emoji pairs, and
# saves them into word-emoji-mappings.md
# ------------------------------------------------------------

set -euo pipefail

#word-emoji-mapping.csv is actually the record of truth shh

curl -sSL https://raw.githubusercontent.com/emojiseed/bip-emojiseed/main/extras/word-emoji-mapping.csv > words.csv
cat words.csv | sed 's/,/→/' | sed 's/,//' > mapping.md
#rm words.csv

echo "✅ Done! Generated mapping.md from word-emoji-mapping.md"
# ------------------------------------------------------------

