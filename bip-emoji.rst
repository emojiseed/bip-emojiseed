BIP: TBD
Title: BIP39 Emoji Seed Mapping
Author: Emoji Seed <devs@emojiseed.com>
Status: Draft
Type: Informational
Created: 2025-10-01
License: BSD-2-Clause
Discussions-To: https://github.com/emojiseed/bip39emoji/issues


==Abstract==

This BIP proposes an extension to the BIP39 standard by introducing a consistent,
context-aware emoji mapping for the 2048-word seed list. The goal is to create a
human-friendly, language-agnostic mnemonic system that improves memorability,
engagement, and accessibility without altering the cryptographic guarantees of BIP39.

==Motivation==

The current BIP39 word list is effective, but it relies solely on words.
Some users find long word sequences difficult to memorize, especially across
different languages. Emoji, as a global symbolic language, offer an intuitive,
visual alternative that can be remembered more easily, cross linguistic barriers,
and improve usability for onboarding and recovery.

The motivation is to:
- Provide a unique emoji mapping for each BIP39 word.
- Ensure mappings respect semantic context, tightness, and non-duplication rules.
- Offer backward compatibility with existing BIP39 seeds.
- Enhance adoption of cryptocurrency wallet security by improving UX.

==Specification==

- Each of the 2048 BIP39 words is mapped to a pair of emojis.
- Mappings are unique by **order**, meaning duplicate emojis are allowed but no duplicate **pairs** exist.
- Contextual tightness is enforced: emoji choices must reflect the meaning of the word as closely as possible.
- A JSON, CSV, and Markdown table format of the mapping MUST be published as reference artifacts.
- Validation scripts MUST check uniqueness, context correctness, and non-duplication of pairs.
- The mnemonic checksum rules of BIP39 remain unchanged.

==Rationale==

- Emoji are already supported across major devices, platforms, and operating systems.
- Using two-emoji pairs increases entropy space while keeping memorability.
- The project is open-source, ensuring transparency and adoption by wallets.
- By adhering strictly to contextual tightness rules, emoji mappings remain intuitive and globally recognizable.

==Backward Compatibility==

This proposal does not alter the BIP39 word list, entropy calculation, or checksum mechanism.  
It is fully backward compatible:
- Existing BIP39 mnemonics remain valid.
- Emoji mappings are purely representational overlays for usability.
- A wallet implementing this proposal must continue to support the canonical word list internally.

==Reference Implementation==

A reference repository including:
- Full emoji mapping (`mapping_2048.json`, `mapping_2048.csv`)
- Validation scripts
- README with rationale and examples
is available at: https://github.com/emojiseed/bip39emoji

==License==

This BIP is licensed under the BSD-2-Clause license.
