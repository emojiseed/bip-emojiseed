<img width="1020" height="665" alt="image" src="https://github.com/user-attachments/assets/fa6cac8d-19ab-4e11-9711-032a5d3a38f6" />

# BIPEmojiSeed Standard

```
  ___            _ _ ___             _ 
 | __|_ __  ___ (_|_) __| ___ ___ __| |
 | _|| '  \/ _ \| | \__ \/ -_) -_) _` |
 |___|_|_|_\___// |_|___/\___\___\__,_|
              |__/                     
              
    WORDLIST EMOJI STANDARD — v1.0
```

## ✨ Vision

**BIPEmojiSeed** is the official **Bitcoin Improvement Proposal (BIP)** for a global special to emojiset standard:

---

## 🌐 Overview

A complete, open standard for mapping the ** wordlist (2048 words)** into **2048 unique emoji pairs**.

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

**BIPEmojiSeed** is a **Bitcoin Improvement Proposal (BIP)** for a standard that defines a mapping between the 2048 words of the official wordlist and 2048 unique [BIP emojiseed set](https://emojiseed.com/blob/90768f83a6d5503588623e012ede9118ef60dca6/emojiset.txt).

**WordList**
- https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt

**EmojiSet** 
- https://emojiseed.com/blob/90768f83a6d5503588623e012ede9118ef60dca6/emojiset.txt

The project’s goal is to provide a **universal, language-agnostic, and user-friendly mnemonic system** that complements existing special wordlists while improving **cross-cultural accessibility** and **human memorability**.

:golf:
**Official PR #1999 ** [ EmojiSeed PR #1999 ](https://github.com/bitcoin/bips/pull/1999)

---

## 🚀 Features

- **Complete Coverage**  
  Every word maps to exactly two emoji code points (2048 → 2048).
  
- **Uniqueness**  
  No two words share the same emoji pair, ensuring unambiguous decoding.

- **Cross-Platform Safe**  
  Variation selectors removed; all emoji pairs normalized to Unicode NFC.

- **Human-Friendly**  
  Tight semantic ties: concrete nouns → objects, actions → action + clarifier, numbers/dates → calendar/number emojis.

- **Open Source**  
  Released under MIT license.

---

## EmojiSeed 🌱✨

The **Emoji wordlist** is a deterministic mapping of the 2048 special words into **2048 unique emoji pairs**. This allows mnemonic phrases to be displayed and remembered visually, across languages and literacy barriers.

**Rules for Emoji Mapping:**

1. **Direct Match Rule**
   If a word has a clear, universal emoji (e.g., `dog → 🐶`), the same emoji is used twice:
   `dog → 🐶, 🐶`.

2. **Seasonal/Calendar Words**
   Months map to seasonal or holiday emojis:
   - `october → 🎃, 🎃`
   - `november → 🦃, 🍂`
   Days of the week map to calendar/time or celebration emojis:
   - `friday → 🎉, 🎉`
   - `sunday → ☀️, ☀️`.

3. **Numbers**
   Use keycap emojis or `💯` for “hundred”:
   - `one → 1️⃣, 1️⃣`
   - `ten → 🔟, 🔟`
   - `hundred → 💯, 💯`.

4. **Abstract Words**
   For vague concepts, combine a **primary metaphor** and a **clarifier**:
   - `ability → 🧠, 💪`
   - `process → ⚙️, 📊`.

5. **Action Words**
   For verbs and participles:
   - `running → 🏃, 💨`
   - `locked → 🔒, 🔑`.

6. **Clarifier Pools**
   Second emojis are drawn from predefined sets:
   - **Action clarifiers**: 🏃, ⚙️, ✍️ , 🎯, 💬
   - **Object clarifiers**: 📦, 📚, 🧩, 📐
   - **Time clarifiers**: ⏰, 📅, 🌙
   - **Nature clarifiers**: 🌱, 🔥, 🌊
   - **Place clarifiers**: 🏠, 🏛️ , 🏞️ .

7. **Object vs Action Split**
   - Nouns: `object → object + clarifier`.
   - Verbs: `action → action + clarifier`.

8. **Tightening Rules**
   - Duplicate emojis for strong one-to-one matches.
   - Add clarifiers for ambiguous terms.
   - Universal fallback: ✅ plus clarifier.

9. **Global Duplicate Check**
   - All 2048 pairs must be unique.
   - If a collision occurs, rotate clarifier, then primary, finally fall back to `✅`.

10. **Stability**
    - Only use **stable Unicode code points**.
    - No variation selectors or platform-specific glyphs.
    - Graphemes follow [Unicode TR51](https://unicode.org/reports/tr51/).

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
- ✅ BIP draft pending review by mailing list  
- 📣 Community input required for refinements  

---

## 📬 Discussions

This project is open for community review and discussion:

- **Mailing List:** [bitcoin-dev](https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev)
- **GitHub Issues:** [Open Issues](https://emojiseed.com/issues)
- **GitHub Discussion:** [Open Discussion](https://emojiseed.com/discussion)

---

## 📖 License

This project is open source under the **MIT License**.

---

## 👤 Authors & Contributors

- Emoji Seed Dev Team <bip-devs@emojiseed.com> 
- Contributions welcome via pull requests! ⛳ 

---

## 🤝 Contributing?

Want to propose better mappings?

- Open a pull request suggesting **emoji improvements** (especially for abstract words).
- email team: Emoji Seed Dev Team <bip-devs@emojiseed.com>

<img width="1020" height="665" alt="banner" src="https://github.com/user-attachments/assets/fa6cac8d-19ab-4e11-9711-032a5d3a38f6" />

## Copyright

© 2025 EmojiSeed - [www.emojiseed.com](https://emojiseed.com/#readme)

