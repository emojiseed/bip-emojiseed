BIP: ?
Title: Standardized Emojilist for Sourcing Future Applications
Author: Emoji Seed Dev Team <bip-devs@emojiseed.com>
Comments-Summary: None yet
Comments-URI: https://groups.google.com/g/bitcoindev 
Status: Draft
Type: Informational
Created: 2025-10-03
License: MIT
Layer: Applications
Discussions-To: bitcoindev@googlegroups.com
Replaces: None
Superseded-By: None

== Abstract ==

The goal of this BIP is to enable mnemonic phrases to be represented 
in a universally recognizable, language-independent, and visually 
distinctive form, while remaining compatible with existing deterministic 
wallet standards.

== Motivation ==

Emoji characters are globally recognized symbols with strong visual
memorability. By providing a one-to-one mapping between these special words 
and emoji pairs, mnemonic phrases can be:

* Understood and used across language barriers
* More memorable and resistant to transcription errors
* Easily displayed in user interfaces where text space is limited
* Utilized in mnemonic memory reminder apps and devices
* Promotes an industry standard that makes collaboration a breeze

This proposal does not affect wordlists at all.

== Rationale ==

The new emojiset BIP will reflect the definition of the special wordlist perfectly
based on a carefully curated instruction set. The instructions are
detailed here: https://emojiseed.com/#readme

The choice of emoji pairs instead of single emojis when the correlation
is direct was made to ensure sufficient uniqueness while maintaining
strong mnemonic quality. Pairs avoid ambiguity and provide redundancy if
one glyph is visually confusable.

== Specification ==

* Each mapping is deterministic and published as part of this standard
  in JSON, CSV, and Markdown reference files.
* Emoji sequences use only stable Unicode code points (no variation
  selectors).
* Each word maps to exactly **two emoji graphemes**, ensuring uniqueness
  and compactness.
* Wallets and libraries may choose to accept, generate, or display emoji
  mnemonics interchangeably with words.

== Backwards Compatibility ==

* Wallets and tools that do not support emoji mnemonics can still parse
  and validate the equivalent word phrase.
* No changes to entropy generation, checksum calculation, or key
  derivation are introduced.

Thus, backward compatibility is preserved at all cryptographic and
protocol levels.

== Security ==

* **Determinism**: Emoji mapping must be fixed, universal, and
  collision-free.
* **Human Factors**: Pairs of emoji are chosen to reduce visual ambiguity
  and improve memorability.
* **Implementation Risks**: Incorrect Unicode handling or reliance on
  unstable glyphs could cause mismatches; therefore, only stable Unicode
  code points are permitted.

== Type Definitions ==

The canonical mapping is provided in structured formats (JSON, CSV,
Markdown).

Each entry contains:

* **word**: the original word
* **emoji1**: the first emoji grapheme
* **emoji2**: the second emoji grapheme

The full set of **2048 entries**:

emoji: https://emojiseed.com/blob/main/emoji.txt  
english: https://emojiseed.com/blob/main/english.txt  
english → emojis:
https://emojiseed.com/blob/main/extras/word-emoji-mapping.md

1. **Arrow-format list** (e.g., `lucky → 😀🎲`)

==============================================================

abandon → 🏚🚪  
ability → 🧠💪  
able → 💪🏃  
about → ℹ📖  
above → ⬆☁  
absent → 🚫👤  
absorb → 🧽💧  
abstract → 🎨📐  
absurd → 🤪❗  
abuse → 🚫👊  
...  
yard → 🌱🏡
year → 📅📆
yellow → 🟨🌼
you → 🫵🫵
young → 👶🌱
youth → 🧒🎓
zebra → 🦓🦓
zero → ⚪🅾
zone → 📍🗺
zoo → 🐒🏞
==============================================================

== Reference Implementation ==

Reference mapping files and validation scripts are available in the
project repository:

https://emojiseed.com/tree/main/extras/

* 2048 word-emoji-mapping (CSV): `word-emoji-mapping.csv`
* 2048 word-emoji-mapping (MD): `word-emoji-mapping.md`

A Python test suite validates the uniqueness, integrity, and completeness
of the mapping.

== License ==

This document is licensed under the MIT License.

== Copyright ==

© 2025 EmojiSeed - https://emojiseed.com/

