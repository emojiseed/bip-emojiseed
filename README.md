# BIPEmojiSeed Standard

```
  ___            _ _ ___             _ 
 | __|_ __  ___ (_|_) __| ___ ___ __| |
 | _|| '  \/ _ \| | \__ \/ -_) -_) _` |
 |___|_|_|_\___// |_|___/\___\___\__,_|
              |__/                     
              
             BIP39 WORDLIST EMOJI STANDARD — v1.0
```

## 🌐 Overview

A complete, open standard for mapping the **BIP39 wordlist (2048 words)** into **2048 unique emoji pairs**.

BIPEmojiSeed bridges **mnemonic seed phrases** with **visual memory cues**, making them more intuitive, fun, and memorable — while keeping **1-to-1 uniqueness** and **cryptographic integrity**.

---

## ✨ Vision

The **BIPEmojiSeed** is an official proposed **Bitcoin Improvement Proposal (BIP)** standard:

- It reduces human error in handling mnemonics
- Builds cross-lingual, cross-cultural memorability
- Creates a foundation for **wallet UIs**, **educational tools**, and **next-gen cryptographic UX**

---

## 🤔 What is this?

**BIPEmojiSeed** is a proposed **Bitcoin Improvement Proposal (BIP)** standard that defines a **1-to-1 mapping** between the 2048 words of the official [BIP39 English wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) and **2048 unique emoji pair sets**.

The project’s goal is to provide a **universal, language-agnostic, and user-friendly mnemonic system** that complements existing BIP39 wordlists while improving **cross-cultural accessibility** and **human memorability**.

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
- `validate.sh` → Runs validation tests.
- `word-emoji-mapping.json` → Master mapping (machine-readable, strict two-emoji pairs).  
- `word-emoji-mapping.csv` → Spreadsheet-friendly format (word, emoji1, emoji2).  
- `word-emoji-mapping.md` → Human-readable arrow-format list.
---

## EmojiSeed Build 🌱✨

[![CI](https://github.com/emojiseed/bip-emojiseed/actions/workflows/ci.yml/badge.svg)](https://github.com/emojiseed/bip-emojiseed/actions/workflows/ci.yml)

---

## ⏰ Testing

```
git clone https://github.com/emojiseed/bip-emojiseed
cd bip-emojiseed
./validate.sh
...
```

## 📜 Examples

```
snake → 🐍🐍
flame → 🔥💨
alarm → ⏰❗
book  → 📖📖
```

Mnemonic phrases like:

```
gravity, tiger, flame, alarm, book

```

map to:

```
🌌🌌, 🐯🐯, 🔥💨 , ⏰❗, 📖📖

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

This project is open source under the **BSD 3-Clause License**.

---

## 👤 Authors & Contributors

- **Coperbyte LLC** (project sponsor & maintainer)
- **Kamal Hakim** (<hakim@coperbyte.com>)
- **Zamir Hakim** (<tingea@gmail.com>)
- Contributions welcome via pull requests!

---

## ✅ Next Steps

- Submit `bip-emoji.rst` to the Bitcoin dev mailing list.  
- Gather feedback from wallets, libraries, and the standards community.

--- 

## 🤝 Contributing?

Want to propose better mappings?

- Open a pull request suggesting **emoji improvements** (especially for abstract words).
- Ensure changes **preserve uniqueness** and follow the **tightening rules**.
- Add reasoning for semantic fit.

