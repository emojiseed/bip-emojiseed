BIP: TBD  

Title: BIP39Emoji Standard  

Author: [Your Name / Org] <email/contact>  

Status: Draft  

Type: Standards Track  

Created: 2025-09-26  

License: Apache-2.0  

==Abstract==

This BIP introduces the **BIP39Emoji Standard**, a deterministic mapping of the BIP39 English word list into **two unique emojis per word**.  
It is intended as a human-friendly, visual representation of mnemonic phrases, improving accessibility and memorability without altering the underlying cryptographic entropy.

==Motivation==

BIP39 defines mnemonic phrases that are widely used for wallet backups.  
However, memorizing and communicating these phrases can be difficult, especially across language barriers.  
Emojis are **Unicode-standardized**, **cross-platform**, and universally recognized.  
By introducing a standard emoji mapping, mnemonic phrases become more accessible, memorable, and usable in non-textual contexts.

==Specification==

- **Input**: The official BIP39 word list (2048 English words).  
- **Output**: A table mapping each word to exactly 2 emojis.  
- **Rules**:
  1. If a direct emoji represents the word, duplicate it (`snake → 🐍🐍`).  
  2. If ambiguous, use a clarifier (`flame → 🔥💨`, distinct from `fire → 🔥🔥`).  
  3. For months/holidays, use seasonal/holiday cues (`november → 🦃🍂`).  
  4. If no clear pair exists, use ✅ as a universal fallback.  
  5. No duplicates are permitted; all 2048 pairs are unique.  

The resulting mapping is published as **mapping.md, mapping.csv, and JSON** files in the reference repository.

==Rationale==

- Two emojis per word provide both redundancy and disambiguation.  
- Emoji mapping does not alter entropy or cryptographic guarantees of BIP39.  
- This standard can be adopted in wallets, teaching tools, or as a mnemonic overlay.  

==Security Considerations==

- This is a **human usability layer**, not a cryptographic change.  
- Mnemonics represented in emoji must be handled with the same security precautions as plain text.  
- Platform rendering differences in emoji sets must be considered (Apple/Google/Twitter glyphs).  

==Backwards Compatibility==

- The BIP39 word list remains unchanged.  
- The mapping is a **1-to-1 overlay**; conversion back to the text word list is deterministic.  
- No protocol or transaction format changes are required.  

==Reference Implementation==

A reference mapping and libraries in Python and JavaScript are provided at:  
[https://github.com/<your-org>/bip39emoji](https://github.com/<your-org>/bip39emoji)

==License==

This document and reference implementation are licensed under the **Apache 2.0 License**.
