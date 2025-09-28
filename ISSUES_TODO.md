# 📌 BIP39 Emoji Project – Issues TODO

This file bundles all identified issues and tasks into a single document.  
Each entry can be turned into a GitHub Issue when ready.

---

## 🚀 Project Standardization

- [x] **Finalize `bip-emoji.rst`**
  - Ensure header matches BIP-0001.
  - Review rationale, motivation, and backward compatibility.
  - Add example usage of emoji seeds.

- [x] **Confirm License Alignment**
  - Adopt BSD-2-Clause license in all files.
  - Verify repo LICENSE file matches.

- [ ] **Create BIP Submission Checklist**
  - Abstract, Motivation, Specification, Rationale, Backward Compatibility, Reference Implementation.
  - Ensure compliance with BIP-0001 template.

---

## 🔧 Implementation

- [ ] **Validation Script**
  - Ensure all 2048 mappings are unique (order matters).
  - Check contextual correctness.
  - Validate no duplicate pairs.

- [ ] **Add Tests**
  - Unit tests for uniqueness and correctness.
  - Integration tests for mapping import/export.

- [ ] **Format Consistency**
  - JSON (`mapping_2048.json`)
  - CSV (`mapping_2048.csv`)
  - Markdown table

---

## 📖 Documentation

- [ ] **README Enhancements**
  - Add example: word → emoji pair → binary mnemonic.
  - ASCII banner refinement.
  - Link to BIP draft.

- [ ] **Contributing Guidelines**
  - How to propose emoji mapping fixes.
  - Code style and validation rules.

- [ ] **Add `ISSUES_TODO.md`**
  - This file itself for tracking.

---

## 🌍 Community / Adoption

- [ ] **Open Discussions**
  - Post link in Bitcoin-dev mailing list once draft is stable.
  - Engage wallet developers for feedback.

- [ ] **Backwards Compatibility Clarification**
  - Document how wallets can display emojis while storing words internally.

- [ ] **Multi-language Considerations**
  - Evaluate cross-language recognition issues with emojis.

---

## 🎨 Nice-to-Have (Optional)

- [ ] **SVG / PNG Emoji Mapping Charts**
  - Visual posters for 2048 mappings.

- [ ] **Interactive Web Demo**
  - Enter BIP39 mnemonic → show emoji seed.
  - Reverse: emoji → word list.

- [ ] **CLI Tool**
  - `bipemoji encode <seed>` → outputs emoji.
  - `bipemoji decode <emoji-seed>` → outputs words.
