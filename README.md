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
pytest -q

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

- **Coperbyte LLC** (project sponsor & maintainer) www.coperbyte.com
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
- email team: prod-support@emojiseed.com






<img width="1020" height="665" alt="banner" src="https://github.com/user-attachments/assets/fa6cac8d-19ab-4e11-9711-032a5d3a38f6" />

```

---

| **|* __  ___ (*|*) __| ___ ___ __| |
| *|| '  / _ | | _* / -*) -*) *` |
|*__|*|*|*_**// |*|***/_**_**_*,*|
|__/


```
         BIP39 WORDLIST EMOJI STANDARD — v1.0

```

[![CI](https://github.com/emojiseed/bip-emojiseed/actions/workflows/ci.yml/badge.svg)](https://github.com/emojiseed/bip-emojiseed/actions/workflows/ci.yml)
[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD--2--Clause-blue.svg)](LICENSE)
[![Spec](https://img.shields.io/badge/BIP-draft.rst-informational)](bip-emojiseed.rst)

---

# 🌱 BIPEmojiSeed Standard


## ✨ Vision

**BIPEmojiSeed** is the official **Bitcoin Improvement Proposal (BIP)** for a global BIP39 wordlist→emojiset standard.

---

## 🌐 Overview

A complete, open standard for mapping the **BIP39 wordlist (2048 words)** into **2048 unique emoji pairs**.

Example:

```

flame → 🔥💨

````

BIPEmojiSeed bridges **mnemonic seed phrases** with **visual memory cues**, making them more intuitive while keeping **1-to-1 uniqueness** and **cryptographic integrity**.

**Why is this needed?**

- It is a fun, creative way to remember access words  
- It secures seedlists with an emoji-based mnemonic mapping  
- It reduces human error in handling mnemonics  
- Builds cross-lingual, cross-cultural, multi-functional memorability  
- Creates a foundation for libraries, **mnemonic devices**, **wallet UIs**, **educational tools**, and **next-gen apps**

---

## 🤔 What is this really?

**BIPEmojiSeed** is a **Bitcoin Improvement Proposal (BIP)** for a standard that defines a **mapping** between the 2048 words of the official
[BIP39 wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)
and **2048 unique emoji pairs** defined in the [EmojiSet](emojiset.txt).

- **WordList BIP39**  
  https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt

- **EmojiSet (current)**  
  [`emojiset.txt`](emojiset.txt)

- **BIP Draft (RST)**  
  [`bip-emojiseed.rst`](bip-emojiseed.rst)

The goal is a **universal, language-agnostic, user-friendly mnemonic system** that complements BIP39 while improving **accessibility** and **memorability**.

---

## 🚀 Features

- **Complete Coverage** – Every BIP39 word maps to exactly two emoji code points (2048 → 2048).  
- **Uniqueness** – No two words share the same emoji pair (unambiguous decoding).  
- **Cross-Platform Safe** – Variation selectors removed; pairs normalized to Unicode NFC.  
- **Human-Friendly** – Concrete nouns → objects; actions → action + clarifier; numbers/dates → calendar/number emojis.  
- **Open Source** – Permissive licensing for free use, modification, and integration.

---

## 📖 Key Documents

- **White Paper (community/vision):** [`WHITEPAPER.md`](WHITEPAPER.md)  
- **Standardization Document:** [`STANDARDIZATION.md`](STANDARDIZATION.md)  
- **BIP Draft (specification):** [`bip-emojiseed.rst`](bip-emojiseed.rst)  
- **BIP Submission Checklist:** [`BIP_SUBMISSION_CHECKLIST.md`](BIP_SUBMISSION_CHECKLIST.md)  
- **Governance:** [`GOVERNANCE.md`](GOVERNANCE.md)  
- **Contributing Guide:** [`CONTRIBUTING.md`](CONTRIBUTING.md)  
- **Setup & Install Instructions:** [`INSTRUCTIONS.md`](INSTRUCTIONS.md)  
- **Version:** [`VERSION`](VERSION)  
- **License (BSD-2-Clause):** [`LICENSE`](LICENSE)

### Mappings & Data

- **Emoji Set (pairs only):** [`emojiset.txt`](emojiset.txt)  
- **Word ↔ Emoji (JSON):** [`word-emoji-mapping.json`](word-emoji-mapping.json)  
- **Word ↔ Emoji (CSV):** [`word-emoji-mapping.csv`](word-emoji-mapping.csv)  
- **Word ↔ Emoji (Markdown):** [`word-emoji-mapping.md`](word-emoji-mapping.md)

### Scripts & Tests

- **Validator:** [`scripts/validate.py`](scripts/validate.py)  
- **Pair→Names tool (CSV “word1, word2”):** [`tools/emojiset_pairs_to_names.py`](tools/emojiset_pairs_to_names.py)  
- **Tests:** [`tests/`](tests/)

> 📌 If a link 404s, create the file in that path—these links are repo-relative so they’ll resolve automatically on push.

---

## 📂 Repository Contents

- [`bip-emojiseed.rst`](bip-emojiseed.rst) – Draft BIP document following [BIP-0001](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki)  
- [`WHITEPAPER.md`](WHITEPAPER.md) – Human-centric, narrative overview  
- [`STANDARDIZATION.md`](STANDARDIZATION.md) – Formal standardization document  
- [`BIP_SUBMISSION_CHECKLIST.md`](BIP_SUBMISSION_CHECKLIST.md) – BIP submission requirements  
- [`INSTRUCTIONS.md`](INSTRUCTIONS.md) – Setup & install instructions  
- [`GOVERNANCE.md`](GOVERNANCE.md) – Process, roles & roadmap  
- [`CONTRIBUTING.md`](CONTRIBUTING.md) – How to file issues/PRs & mapping rules  
- [`VERSION`](VERSION) – Current version info  
- [`LICENSE`](LICENSE) – BSD-2-Clause  
- Data files: [`emojiset.txt`](emojiset.txt), [`word-emoji-mapping.json`](word-emoji-mapping.json), [`word-emoji-mapping.csv`](word-emoji-mapping.csv), [`word-emoji-mapping.md`](word-emoji-mapping.md)

---

## ⏰ Testing

```bash
git clone https://github.com/emojiseed/bip-emojiseed
cd bip-emojiseed
pytest -q
````

Validation checks:

* ✅ All 2048 words mapped
* ✅ No duplicate pairs
* ✅ Unicode normalization enforced

---

## 📜 Examples

```
snake → 🐍🐍
flame → 🔥💨
alarm → ⏰❗
book  → 📖📖
```

Mnemonic example:

```
gravity, tiger, flame, alarm, book
```

EmojiSeed mapping:

```
🌌🌌, 🐯🐯, 🔥💨, ⏰❗, 📖📖
```

---

## 🛠️ Project Status

* ✅ Initial mapping complete
* ✅ Normalization & validation scripts finished
* ⚠️ BIP draft pending mailing-list review
* 📣 Community input requested for refinements

---

## 📬 Discussions

* **Mailing List:** [https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev](https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev)
* **GitHub Issues:** [https://github.com/emojiseed/bip-emojiseed/issues](https://github.com/emojiseed/bip-emojiseed/issues)
* **Discord:** [https://discord.com/channels/1422040199872905357/1422040200539803810](https://discord.com/channels/1422040199872905357/1422040200539803810)

---

## 📖 License

This project is open source under the **BSD 2-Clause License**. See [`LICENSE`](LICENSE).

---

## 👤 Authors & Contributors

* **Coperbyte LLC** (project sponsor & maintainer) — [https://www.coperbyte.com](https://www.coperbyte.com)
* **Kamal Hakim** ([hakim@coperbyte.com](mailto:hakim@coperbyte.com))
* **Zamir Hakim** ([tingea@gmail.com](mailto:tingea@gmail.com))

Contributions welcome via pull requests!

---

## ✅ Next Steps

* Submit `bip-emojiseed.rst` to the Bitcoin dev mailing list
* Gather feedback from wallets, libraries, and standards community
* Iterate mappings following the clarifier & uniqueness rules

---

## 🤝 Contributing

Want to propose better mappings?

* Open a PR with **emoji improvements** (esp. abstract terms)
* Preserve **uniqueness** and follow the **tightening rules**
* Explain the semantic fit in your PR description
* Or email: **[prod-support@emojiseed.com](mailto:prod-support@emojiseed.com)**

```


