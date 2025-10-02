#!/usr/bin/env bash
# ------------------------------------------------------------
# EmojiSeed Mapping Extractor
# Downloads the BIP-EmojiSeed CSV, extracts emoji pairs, and
# saves them into emoji.txt
# ------------------------------------------------------------

set -euo pipefail

#word-emoji-mapping.csv is actually the record of truth shh


curl -sSL https://raw.githubusercontent.com/emojiseed/bip-emojiseed/main/extras/word-emoji-mapping.csv > words.csv
cat words.csv | cut -f2,3 -d, | sed 's/,//g' > emoji.txt
rm words.csv

echo "✅ Done! Generated emoji.txt from word-emoji-mapping.csv"
# ------------------------------------------------------------

