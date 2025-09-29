BIP: ?
  
Layer: Applications
  
Title: Emoji Seed Mnemonics for Deterministic Keys
  
Author: Emoji Seed Dev Team <bitcoin-dev@bitcoiin.net>
  
Status: Draft
  
Type: Informational
  
Created: 2025-09-28

License: BSD-2-Clause

Discussions-To: bitcoin-dev@lists.linuxfoundation.org


## Abstract

This proposal specifies a standardized mapping between the BIP-39 English word list and unique pairs of emoji characters. The goal is to enable mnemonic phrases to be represented in a universally recognizable, language-independent, and visually distinctive form, while remaining compatible with existing deterministic wallet standards.


## Motivation

BIP-39 defined a widely adopted standard for generating mnemonic codes that encode entropy used in deterministic wallets. However, these mnemonics are language-dependent, subject to translation issues, and require literacy in a supported language.

Emoji characters are globally recognized symbols with strong visual memorability. By providing a one-to-one mapping between BIP-39 words and emoji pairs, mnemonic phrases can be:

* Understood and used across language barriers
* More memorable and resistant to transcription errors
* Easily displayed in user interfaces where text space is limited
* Utilized in mnemonic memory reminder apps and devices
* Promotes an industry standard that makes collaboration a breeze

This proposal extends BIP-39 mnemonics by introducing an emoji layer that preserves full backward compatibility with the underlying word list.


## Rationale

This design follows the naming convention of BIP-44: while extending BIP-39, the proposal does not include “39” in its title. Instead, the relationship to BIP-39 is clearly stated in the text.

The choice of emoji pairs instead of single emoji was made to ensure sufficient uniqueness while maintaining strong mnemonic quality. Pairs avoid ambiguity and provide redundancy if one glyph is visually confusable.


## Specification

* Each of the 2048 BIP-39 English words is assigned a unique pair of emoji characters.
* Each mapping is deterministic and published as part of this standard in JSON, CSV, and Markdown reference files.
* Emoji sequences use only stable Unicode code points (no variation selectors).
* Each word maps to exactly **two emoji graphemes**, ensuring uniqueness and compactness.
* Wallets and libraries may choose to accept, generate, or display emoji mnemonics interchangeably with words.

## Backwards Compatibility

* All mnemonic phrases generated using this proposal map directly to existing BIP-39 words.
* Wallets and tools that do not support emoji mnemonics can still parse and validate the equivalent BIP-39 word phrase.
* No changes to entropy generation, checksum calculation, or key derivation (BIP-32) are introduced.

Thus, backward compatibility is preserved at all cryptographic and protocol levels.


## Security

* **Determinism**: Emoji mapping must be fixed, universal, and collision-free.
* **Human Factors**: Pairs of emoji are chosen to reduce visual ambiguity and improve memorability.
* **Implementation Risks**: Incorrect Unicode handling or reliance on unstable glyphs could cause mismatches; therefore, only stable Unicode code points are permitted.


## Type Definitions

The canonical mapping is provided in structured formats (JSON, CSV, Markdown). Each entry contains:

* **word**: the original BIP-39 English word
* **emoji1**: the first emoji grapheme
* **emoji2**: the second emoji grapheme
* **emoji1_name**: Unicode CLDR short name for emoji1
* **emoji2_name**: Unicode CLDR short name for emoji2

The full set of **2048 entries** will be presented as both:

1. **Arrow-format list** (e.g., `abandon → 😀🎲`)
2. **Reference table** (columns: word, emoji1, emoji2, emoji1_name, emoji2_name)

```text
word       | emoji1 | emoji2 | emoji1_name    | emoji2_name
-----------|--------|--------|----------------|----------------
abandon    | 😀     | 🎲     | grinning face  | game die
ability    | 🐱     | 🌟     | cat            | glowing star
... all 2048 rows ...
```


## Reference Implementation

Reference mapping files and validation scripts are available in the project repository:

* 2048 BIP39 word-emoji-mapping (JSON): `word-emoji-mapping.json`
* 2048 BIP39 word-emoji-mapping (CSV): `word-emoji-mapping.csv`
* 2048 BIP39 word-emoji-mapping (MD): `word-emoji-mapping.md`

A Python test suite validates the uniqueness, integrity, and completeness of the mapping.


## Copyright

This document is licensed under the BSD 2-Clause License.


© 2025 Coperbyte™️
[www.coperbyte.com](http://www.coperbyte.com)

