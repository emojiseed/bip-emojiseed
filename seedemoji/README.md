
# 🌱 seedemojis

**seedemojis** is a command-line utility that maps official [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) mnemonic words to their paired emoji representations.  
It uses the canonical English wordlist and a live emoji mapping hosted at  
[`https://github.com/seedemojis/bip-seedemojis`](https://github.com/seedemojis/bip-seedemojis).

---

## 📦 Installation

```bash
npm install -g seedemojis
````

This makes the `seedemojis` command available globally on your system.

---

## 🚀 Usage

Look up any **exact** BIP-39 word and print its emoji pair:

```bash
seedemojis orbit
```

Example output:

```
🌍🛰️
```

If the word is not part of the official BIP-39 list:

```
Not a valid BIP-39 word (exact match required)
```

---

## 🧩 Features

* ✅ **Exact match lookup** against `BiP-39 english.txt`
* 🧠 Fully compatible with any BIP-39 mnemonic generator

---

## 💡 Examples

```bash
# Look up a valid BIP39 word
seedemojis rocket
🚀🔥

# Invalid word
seedemojis hello
Not a valid BIP-39 word (exact match required)

# Show help
seedemojis --help
```

---

## 📁 Project Structure

```
seedemojis/
├── bin/
│   └── seedemojis.js      ← CLI entry script
├── data/
│   ├── english.txt       ← BIP39 wordlist
│   └── emoji.txt         ← Local fallback mapping
├── extras/
│   └── word-emoji-mapping.csv
├── LICENSE
├── package.json
└── README.md
```

---

🧪 Testing
```bash
node --test
```

---

## 🛠 Development

Clone and link locally:

```bash
git clone https://github.com/seedemojis/seedemojis.git
cd seedemojis
npm link
```

Then run the CLI from anywhere:

```bash
seedemojis tree
```

---

## 🪴 License

MIT 

---

## 🔗 Related Projects

* **EmojiSeed Dataset:** [bip-seedemojis](https://github.com/seedemojis/bip-seedemojis)
* **BIP-39 Standard:** [bitcoin/bips](https://github.com/bitcoin/bips/pill/1999)

