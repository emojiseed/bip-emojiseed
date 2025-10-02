#!/usr/bin/env bash
# ------------------------------------------------------------
# EmojiSeed Mapping Extractor
# Downloads the BIP-EmojiSeed CSV, extracts emoji pairs, and
# saves them into word-emoji-mappings.md
# ------------------------------------------------------------

set -euo pipefail

# word-emoji-mapping.csv is actually the record of truth shh
# push the latest before refreshing

#git add ../extras/word-emoji-mapping.csv
#git commit -m "refreshing emoji set list"
#git push 

curl -sSL https://raw.githubusercontent.com/emojiseed/bip-emojiseed/main/extras/word-emoji-mapping.csv > words.csv

#refresh emoji list
cat words.csv | cut -f2,3 -d, | sed 's/,//g' | tail -n +2 > emoji.txt

#refresh md
cat words.csv | sed 's/,/→/' | sed 's/,//' | tail -n +2 > mapping.md


mv emoji.txt ../emoji.txt
mv mapping.md ../extras/word-emoji-mapping.md
rm words.csv



echo "✅ Done! Generated emoji.txt and word-emoji-mapping.md from word-emoji-mapping.csv"
# ------------------------------------------------------------
