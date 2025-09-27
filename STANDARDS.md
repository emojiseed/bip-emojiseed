# BIP39Emoji Standardization Proposal

## Abstract
This document specifies the **BIP39Emoji Standard**, a deterministic mapping between the 2048-word BIP39 mnemonic list and pairs of Unicode emoji.

## Motivation
Mnemonic phrases are difficult to memorize and communicate across languages. Emoji mappings solve this by creating a universally recognized, visual alternative.

## Specification
- **Input**: The BIP39 word list (2048 English words).  
- **Output**: A mapping file where each word maps to exactly 2 Unicode emojis.  
- **Rules**:
  1. If a direct emoji exists, duplicate (`book → 📖📖`).  
  2. If ambiguous, append clarifier (`alarm → ⏰❗`).  
  3. Months use seasonal icons (`october → 🎃🍁`).  
  4. No duplicates allowed across the set.  

## Rationale
- Emoji provide a high-entropy, universal visual system.  
- Two emojis per word provide redundancy and disambiguation.  
- Collision-free mapping ensures deterministic recovery.  

## Security Considerations
- This system **does not replace** BIP39 or seed storage best practices.  
- It is an **aid for humans**, not a change in entropy or cryptographic guarantees.  
- Unicode rendering differences between platforms should be considered.  

## Reference Implementation
- Mapping published as `mapping.csv`, `mapping.md`.  
- Libraries in Python, JS, and Rust to be developed.  

## Licensing
Apache License 2.0.  
