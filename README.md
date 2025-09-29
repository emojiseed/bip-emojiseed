<img width="1020" height="665" alt="image" src="https://github.com/user-attachments/assets/fa6cac8d-19ab-4e11-9711-032a5d3a38f6" />

# BIPEmojiSeed Standard

```
  ___            _ _ ___             _ 
 | __|_ __  ___ (_|_) __| ___ ___ __| |
 | _|| '  \/ _ \| | \__ \/ -_) -_) _` |
 |___|_|_|_\___// |_|___/\___\___\__,_|
              |__/                     
              
             BIP39 WORDLIST EMOJI STANDARD — v1.0
```

## ✨ Vision

**BIPEmojiSeed** is the official **Bitcoin Improvement Proposal (BIP)** for a global BIP39 wordlist to emojiset standard:

---

## 🌐 Overview

A complete, open standard for mapping the **BIP39 wordlist (2048 words)** into **2048 unique emoji pairs**.

flame → 🔥💨

BIPEmojiSeed bridges **mnemonic seed phrases** with **visual memory cues**, making them more intuitive while keeping **1-to-1 uniqueness** and **cryptographic integrity**.

**Why is this needed?**

There are several reasons why this is needed:
- It is a fun, creative  way to remember access words
- It secures seedlists with an emoji-based mnemonic cypher
- It reduces human error in handling mnemonics
- Builds cross-lingual, cross-cultural, multi-functional memorability
- Creates a foundation for libraries, **mneumonic devices**, **wallet UIs**, **educational tools**, and **next-gen apps**

---

## 🤔 What is this really?

**BIPEmojiSeed** is a **Bitcoin Improvement Proposal (BIP)** for a standard that defines a mapping between the 2048 words of the official [BIP39 wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) and 2048 unique [BIP emojiset](https://emojiseed.com/blob/90768f83a6d5503588623e012ede9118ef60dca6/emojiset.txt).

**WordList BIP39**
- https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt

**EmojiSet v.001** 
- https://emojiseed.com/blob/90768f83a6d5503588623e012ede9118ef60dca6/emojiset.txt

The project’s goal is to provide a **universal, language-agnostic, and user-friendly mnemonic system** that complements existing BIP39 wordlists while improving **cross-cultural accessibility** and **human memorability**.

Bitcoin Improvement Proposal 

BIP Emoji Seed Standard [ BIP Emoji Seed Standard ](https://raw.githubusercontent.com/emojiseed/bip-emojiseed/main/bip-emojiseed.rst)

---

## 🚀 Features

- **Complete Coverage**  
  Every BIP39 word maps to exactly two emoji code points (2048 → 2048).
  
- **Uniqueness**  
  No two words share the same emoji pair, ensuring unambiguous decoding.

- **Cross-Platform Safe**  
  Variation selectors removed; all emoji pairs normalized to Unicode NFC.

- **Human-Friendly**  
  Tight semantic ties: concrete nouns → objects, actions → action + clarifier, numbers/dates → calendar/number emojis.

- **Open Source**  
  Released under a permissive license for free use, modification, and integration.

---

## 📂 Repository Contents

- `bip-emojiseed.rst` → Draft BIP document following [BIP-0001](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki).
- `BIP_SUBMISSION_CHECKLIST.md` → Requirements for BIP submission.
- `ISSUES_TODO.md` → Outstanding issues to sort.     
- `INSTRUCTIONS.md` → Setunstall instructions.
- `GOVERNANCE.md` → Open issues & roadmap.  
- `CONTRIBUTING.md` → Open issues & roadmap.  
- `VERSION` → Current version info.
- `LICENSE` → BSD-3-Clause or Apache-2.0 (to be finalized).
- `word-emoji-mapping.json` → Master mapping (machine-readable, strict two-emoji pairs).  
- `word-emoji-mapping.csv` → Spreadsheet-friendly format (word, emoji1, emoji2).  
- `word-emoji-mapping.md` → Human-readable arrow-format list.
---

## EmojiSeed 🌱✨

[![CI](https://github.com/emojiseed/bip-emojiseed/actions/workflows/ci.yml/badge.svg)](https://github.com/emojiseed/bip-emojiseed/actions/workflows/ci.yml)

⏰ Testing

```
git clone https://github.com/emojiseed/bip-emojiseed
cd bip-emojiseed
make

```

📜 Examples

```
snake → 🐍🐍
flame → 🔥💨
alarm → ⏰❗
book  → 📖📖

```
```
Mnemonic phrases like: gravity, tiger, flame, alarm, book
map to: 🌌🌌, 🐯🐯, 🔥💨 , ⏰❗, 📖📖

```

---

## 🛠️ Project Status

- ✅ Initial mapping complete  
- ✅ Normalization & validation scripts finished  
- ⚠️ BIP draft pending review by mailing list  
- 📣 Community input required for refinements  

---

## 📬 Discussions

This project is open for community review and discussion:

- **Mailing List:** [bitcoin-dev](https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev)
- **GitHub Issues:** [Open Issues](https://github.com/emojiseed/bip-emojiseeds/issues)
- **Discord Server** [EmojiSeed Discord Server](https://discord.com/channels/1422040199872905357/1422040200539803810)

---

## 📖 License

This project is open source under the **BSD 2-Clause License**.

---

## 👤 Authors & Contributors

- Emoji Seed Dev Team <bitcoin-dev@bitcoiin.net>
- Contributions welcome via pull requests! ⛳ 

---

## ✅ Next Steps

- [ ] Submit `bip-emoji.rst` to the Bitcoin dev mailing list.  
- [ ] Gather feedback from wallets, libraries, and the standards community.

--- 

## 🤝 Contributing?

Want to propose better mappings?

- Open a pull request suggesting **emoji improvements** (especially for abstract words).
- Ensure changes **preserve uniqueness** and follow the **tightening rules**.
- Add reasoning for semantic fit.
- email team: Emoji Seed Dev Team <bitcoin-dev@bitcoiin.net>

<img width="1020" height="665" alt="banner" src="https://github.com/user-attachments/assets/fa6cac8d-19ab-4e11-9711-032a5d3a38f6" />

## Copyright

This document is licensed under the BSD 2-Clause License.

© 2025 EmojiSeed - [www.emojiseed.com](https://emojiseed.com/)



