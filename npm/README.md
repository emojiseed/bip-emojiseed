
# 🌱 emojiseed

**emojiseed** is a command-line utility that maps official [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) mnemonic words to their paired emoji representations.  
It uses the canonical English wordlist and a live emoji mapping hosted at  
[`https://github.com/emojiseed/bip-emojiseed`](https://github.com/emojiseed/bip-emojiseed).

---

## 📦 Installation

```bash
npm install -g emojiseed
````

This makes the `emojiseed` command available globally on your system.

---

## 🚀 Usage

Look up any **exact** BIP-39 word and print its emoji pair:

```bash
emojiseed orbit
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

* ✅ **Exact match lookup** against `english.txt`
* 🌐 **Live emoji data** pulled automatically from
  [`raw.githubusercontent.com/emojiseed/bip-emojiseed`](https://raw.githubusercontent.com/emojiseed/bip-emojiseed/refs/heads/main/data/emoji.txt)
* 💾 Falls back to local `data/emoji.txt` if offline
* 🧠 Fully compatible with any BIP-39 mnemonic generator

---

## 💡 Examples

```bash
# Look up a valid BIP39 word
emojiseed rocket
🚀🔥

# Invalid word
emojiseed hello
Not a valid BIP-39 word (exact match required)

# Show help
emojiseed --help
```

---

## 📁 Project Structure

```
emojiseed/
├── bin/
│   └── emojiseed.js      ← CLI entry script
├── data/
│   ├── english.txt       ← BIP39 wordlist
│   └── emoji.txt         ← Local fallback mapping
├── extras/
│   └── word-emoji-mapping.csv
├── package.json
└── README.md
```

---

## 🧪 Testing

Run local validation to ensure the mappings follow 2-character emoji rules and dataset length integrity:

```bash
node --test
```

---

## 🛠 Development

Clone and link locally:

```bash
git clone https://github.com/emojiseed/emojiseed.git
cd emojiseed
npm link
```

Then run the CLI from anywhere:

```bash
emojiseed tree
```

---

## 🪴 License

MIT 

---

## 🔗 Related Projects

* **EmojiSeed Dataset:** [bip-emojiseed](https://github.com/emojiseed/bip-emojiseed)
* **BIP-39 Standard:** [bitcoin/bips](https://github.com/bitcoin/bips/pill/1999)

