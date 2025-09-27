# BIP39Emoji Standard — Instruction Set

This document explains how to **generate, validate, and maintain** the official BIP39Emoji mapping.  
The goal is a **1-to-1 mapping between the 2048 BIP39 English words and 2048 unique emoji pairs**.

---

## 1. Input Data

- Use the official **BIP39 English wordlist** (`english.txt` or `bip39.csv`) containing exactly 2048 unique words.
- Each word must map deterministically to **two emojis**.

---

## 2. Emoji Assignment Rules

### 2.1 Direct Match Rule
- If a word has a **clear, universal emoji** (e.g., `dog → 🐶`, `book → 📖`), then: word → emoji emoji

The emoji is duplicated to reinforce the strong semantic tie.

### 2.2 Seasonal & Calendar Words
- **Months** map to seasonal/holiday emojis:
- `january → 🎆🎆`
- `october → 🎃🎃`
- `november → 🦃🍂`
- `december → 🎄🎄`
- **Days of the week** map to calendar/time emojis:
- `monday → 📅📅`
- `friday → 🎉🎉`
- `sunday → ☀️☀️`

### 2.3 Numbers
- Map numbers to emoji digits when possible:
- `one → 1️⃣1️⃣`
- `ten → 🔟🔟`
- `hundred → 💯💯`

### 2.4 Abstract Words
- For vague concepts (e.g., `ability`, `effort`, `process`), assign a **primary metaphorical emoji** plus a **clarifier**:
- `ability → 🧠💪`
- `process → ⚙️📊`
- `effort → 🏋️💦`

### 2.5 Action Words
- For verbs or words ending in `-ing`, `-ed`, etc.:
- Assign a **tool/action emoji** + an **outcome/clarifier**:
  - `running → 🏃💨`
  - `locked → 🔒🔑`

---

## 3. Clarifiers

### 3.1 Clarifier Pools
To avoid duplicates and add nuance, second emojis are selected from:
- **Action clarifiers**: 🏃 ⚙️ ✍️ 🎯 🔍 💬 …
- **Object clarifiers**: 📦 📚 📄 📐 🧩 …
- **Time clarifiers**: ⏰ 🕒 📅 🌙 …
- **Nature clarifiers**: 🌱 🌳 🔥 ❄️ …
- **Place clarifiers**: 🏠 🏛️ 🏞️ 🛕 …

### 3.2 Object vs Action Split
- If the word is a **thing** (noun):  
`object → object + object/noun clarifier`  
- If the word is an **action** (verb):  
`action → action + action clarifier`

---

## 4. Tightening Rules

1. **Duplicate for strong matches**  
 - If a single emoji fully defines the word, duplicate it (`tree → 🌳🌳`).

2. **Clarify vague definitions**  
 - If the word is ambiguous, pair the primary emoji with a clarifier (`cluster → 🌐📦`).

3. **Universal fallback**  
 - If no clear mapping exists, use ✅ plus a clarifier to ensure coverage.

---

## 5. Duplicate Checking

### 5.1 Global Scan
- After generating all 2048 pairs, scan for **duplicate pairs** (`emoji1+emoji2`).
- No two words may share the same final emoji pair.

### 5.2 Resolution Strategy
- If a duplicate pair is detected:
1. Rotate the clarifier to a new emoji.
2. If still colliding, rotate the primary candidate.
3. If still colliding, fallback to ✅ + clarifier.

---

## 6. Validation

- Ensure **2048 unique pairs** for 2048 words.
- Validate output formats:
- `mapping.md` → Arrow format (`word → emoji emoji`)
- `mapping.csv` → Columns: word, emoji1, emoji2
- `mapping.json` → Dictionary: `{ "word": ["emoji1","emoji2"], ... }`

---

## 7. Example Outputs

