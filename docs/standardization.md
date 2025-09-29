# EmojiSeed Standardization Document

Title: EmojiSeed Standard
Author: Coperbyte LLC <hakim@coperbyte.com>
Status: Draft
Type: Informational
Created: 2025-09-28
License: BSD 3-Clause License
Discussions-To: https://github.com/emojiseed/bip39emoji/issues

---

## Abstract

This document specifies the **EmojiSeed Standard**, a community-driven extension of BIP39. EmojiSeed defines a one-to-one mapping of 2048 BIP39 English mnemonic words to unique emoji pairs. The standard ensures consistency across wallets, libraries, and community projects while maintaining backward compatibility with existing BIP39 implementations.

---

## Motivation

Mnemonic phrases are widely used in wallets and cryptographic applications. However, for many users:

- Words may be difficult to remember across languages.  
- Emojis are easier to visualize and recall.  
- Emoji-based seeds enhance usability and accessibility while retaining deterministic security.  

The EmojiSeed Standard addresses these challenges by introducing a **normalized, community-vetted emoji mapping**.

---

## Specification

1. **Wordlist Basis**  
   - Uses the official [BIP39 English wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt).  
   - Contains **2048 unique words**.

2. **Emoji Mapping**  
   - Each word maps to **exactly two emojis**.  
   - Emojis are assigned based on semantic closeness, metaphor, or duplication for clarity.  
   - Each emoji pair must be unique across the entire set.

3. **Clarifier Rules**  
   - Duplicate when a single emoji clearly defines the word (e.g., `dog → 🐶🐶`).  
   - Add clarifiers for abstract terms (e.g., `effort → 🏋️💦`).  
   - Fall back to ✅ + clarifier if no direct match exists.

4. **Validation Requirements**  
   - Ensure **no duplicate pairs** exist.  
   - Remove **variation selectors** and enforce single-codepoint emojis where possible.  
   - Validate outputs in `.json`, `.csv`, and `.md` formats.

---

## Backward Compatibility

EmojiSeed does not alter the entropy or checksum model of BIP39. Instead:

- Mnemonics remain valid BIP39 seeds.  
- The emoji mapping is **deterministic** and **reversible** to BIP39 words.  
- Existing wallets and libraries remain compatible by using the underlying words.

---

## Reference Implementations

- **JSON Mapping**: [mapping.json](mapping.json)  
- **CSV Mapping**: [mapping.csv](mapping.csv)  
- **Markdown Mapping**: [mapping.md](mapping.md)  
- Validation tools available in `/scripts/validate.py`.

---

## License

This standard is released under the **BSD 3-Clause License**.

---

## Discussion

All issues, refinements, and community proposals should be submitted via:

- GitHub Issues: [https://github.com/emojiseed/bip39emoji/issues](https://github.com/emojiseed/bip-emojiseed/issues)  
- Bitcoin Dev Mailing List (for BIP inclusion proposals)  
