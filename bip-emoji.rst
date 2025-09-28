BIP: TBD

Title: BIP39Emoji Standard

<<<<<<< Updated upstream
Author: Emoji Sounds <bip39@emojiseed.com>
=======
Author: Emoji Seed <devs@emojiseed.com>
>>>>>>> Stashed changes

Status: Draft

Type: Standards Track

<<<<<<< Updated upstream
Created: 2025-09-27
=======
Created: 2025-09-26
>>>>>>> Stashed changes

License: Apache-2.0

==Abstract==

<<<<<<< Updated upstream
BIP39Emoji maps each BIP39 word to two unique emojis.
=======
BIP39Emoji maps each word in the BIP39 word list to a unique emoji set word[emoji1, emoji2].

This BIP introduces the **BIP39Emoji Standard**, a deterministic mapping of the
BIP39 English word list into *two unique emojis per word*. It is intended as a
human-friendly, visual representation of mnemonic phrases, improving
accessibility and memorability without altering the underlying cryptographic
entropy.

==Motivation==

BIP39 defines mnemonic phrases that are widely used for wallet backups.
However, memorizing and communicating these phrases can be difficult,
especially across language barriers.

Emojis are Unicode-standardized, cross-platform, and universally recognized.
By introducing a standard emoji mapping, mnemonic phrases become more
accessible, memorable, and usable in non-textual contexts.

==Specification==

* **Input**: The official BIP39 English word list (2048 words).
* **Output**: A table mapping each word to exactly 2 emojis.
* **Rules**:
  
  1. If a direct emoji represents the word, duplicate it
     (e.g., ``snake → 🐍🐍``).
  2. If ambiguous, use a clarifier
     (e.g., ``flame → 🔥💨`` distinct from ``fire → 🔥🔥``).
  3. For months and holidays, use seasonal/holiday cues
     (e.g., ``november → 🦃🍂``).
  4. If no clear pair exists, use ✅ as a universal fallback.
  5. No duplicates are permitted; all 2048 pairs are unique.

The resulting mapping is published in ``mapping.md``, ``mapping.csv``,
and ``mapping.json`` files in the reference repository.

==Rationale==

* Two emojis per word provide both redundancy and disambiguation.
* Emoji mapping does not alter entropy or cryptographic guarantees of BIP39.
* This standard can be adopted in wallets, teaching tools, or as a mnemonic
  overlay.

==Security Considerations==

* This is a human usability layer, not a cryptographic change.
* Mnemonics represented in emoji must be handled with the same security
  precautions as plain text.
* Platform rendering differences in emoji sets must be considered
  (Apple, Google, Twitter, etc.).

==Backwards Compatibility==

* The BIP39 word list remains unchanged.
* The mapping is a 1-to-1 overlay; conversion back to the text word list is
  deterministic.
* No protocol or transaction format changes are required.

==Reference Implementation==

A reference mapping and libraries in Python and JavaScript are provided at:

    https://github.com/<your-org>/bip39emoji

==License==

This document and reference implementation are licensed under the
Apache 2.0 License.
>>>>>>> Stashed changes

