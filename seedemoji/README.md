
# 🌱 EmojiSeed  
**Mnemonic phrases. Reinvented with emojis.**

[![npm version](https://img.shields.io/npm/v/seedemoji.svg)](https://www.npmjs.com/package/seedemoji)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PR #1999](https://img.shields.io/badge/BIP--39-PR%20%231999-brightgreen.svg)](https://github.com/bitcoin/bips/pull/1999)
[![Build](https://img.shields.io/badge/build-passing-success.svg)](#)

---

### Overview  
**EmojiSeed** redefines **Bitcoin’s BIP-39** mnemonic system using visual entropy — emojis.  
Each BIP-39 word maps to a deterministic emoji pair that maintains semantic meaning while improving memory retention, language neutrality, and human readability.  

---

### 💡 Concept  
EmojiSeed keeps the original **2048-word BIP-39** list but pairs each term with **two emojis** selected through deterministic rules based on:  
- Semantic alignment between word and emoji  
- Visual and emotional memorability  
- Cultural neutrality  
- Reversible mapping integrity  

The mapping logic allows encoding or decoding BIP-39 seed phrases visually without altering entropy or recovery compatibility.

---

### ⚙️ Installation  

```bash
npm i -g seedemoji
````

Once installed globally:

```bash
seedemoji <bip39_word>
```

Example:

```bash
seedemoji trust
```

Output:

```
🤝🔐
```

---

### 🧩 Architecture

* Node.js CLI utility (`seedemoji <word>`)
* Core data: `data/english.txt` + `data/emoji.txt`
* Deterministic mapping algorithm in pure JavaScript
* JSON schema for wallet integrations
* Offline operation (no external API calls)
* Lightweight browser renderer for visual keycards

---

### 🔍 Code Review Invitation

EmojiSeed is currently under active discussion in **Bitcoin BIPs Pull Request #1999**, proposing a visual mnemonic extension compatible with **BIP-39**.

Developers, wallet engineers, and cryptographers are invited to **review and comment** on:

* Deterministic consistency of emoji mapping
* Reversibility and collision checks
* Linguistic or cultural edge cases
* Hardware and software wallet integration

👉 **Pull Request:** [https://github.com/bitcoin/bips/pull/1999](https://github.com/bitcoin/bips/pull/1999)
👉 **Repository:** [https://github.com/Coperbyte/EmojiSeed](https://github.com/Coperbyte/EmojiSeed)

---

### 🧠 Example Workflow

```bash
# Install globally
npm i -g seedemoji

# Lookup an emoji pair for a BIP-39 word
seedemoji vision

# Output
👁️💡
```

---

### 🪪 License

MIT — free for personal and commercial use.

---

### 🌍 Mission

EmojiSeed aims to make Bitcoin mnemonic recovery **intuitive, multilingual, and visual** while keeping the cryptography untouched.
Mnemonic security should be human-readable and universal.

Website: [https://emojiseed.com](https://emojiseed.com)

---

**Maintained by [Coperbyte LLC](https://coperbyte.com)**
Pull requests and peer reviews are welcome.

```
