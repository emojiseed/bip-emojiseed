#!/usr/bin/env node
/* emojiseed — exact-match BIP-39 lookup
   Refactored to fetch emoji.txt from GitHub raw.
   Falls back to local data/emoji.txt if the network fetch fails.
*/

const fs = require("fs");
const path = require("path");
const https = require("https");

const PKG_ROOT = path.join(__dirname, "..");
const ENGLISH = path.join(PKG_ROOT, "data", "english.txt");
const EMOJI_LOCAL = path.join(PKG_ROOT, "data", "emoji.txt");

// Override via env if needed
const EMOJI_URL =
  process.env.EMOJI_TXT_URL ||
  "https://raw.githubusercontent.com/emojiseed/bip-emojiseed/refs/heads/main/data/emoji.txt";

const args = process.argv.slice(2);
const termRaw = args[0];

function help() {
  console.log(`
Usage:
  emojiseed <word>

Description:
  Looks up the emojiset from the corresponding BIP-39 deterministic seed word. https://emojiseed.com 

`);
}

function die(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

function readEnglish() {
  if (!fs.existsSync(ENGLISH)) die("Missing data/english.txt in the package.");
  return fs.readFileSync(ENGLISH, "utf8").split(/\r?\n/);
}

// Minimal HTTPS GET with redirect support
function fetchText(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const doReq = (u, redirectsLeft) => {
      https
        .get(u, (res) => {
          const { statusCode, headers } = res;
          if (
            statusCode >= 300 &&
            statusCode < 400 &&
            headers.location &&
            redirectsLeft > 0
          ) {
            // follow redirect
            res.resume();
            return doReq(headers.location, redirectsLeft - 1);
          }
          if (statusCode !== 200) {
            res.resume();
            return reject(
              new Error(`HTTP ${statusCode} fetching emoji.txt from ${u}`)
            );
          }
          let data = "";
          res.setEncoding("utf8");
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve(data));
        })
        .on("error", reject);
    };
    doReq(url, maxRedirects);
  });
}

async function loadEmojiLines() {
  try {
    const txt = await fetchText(EMOJI_URL);
    return txt.split(/\r?\n/);
  } catch (e) {
    // Fallback to local
    if (fs.existsSync(EMOJI_LOCAL)) {
      return fs.readFileSync(EMOJI_LOCAL, "utf8").split(/\r?\n/);
    }
    die(
      `Failed to load emoji.txt from network and no local fallback found.\nReason: ${e.message}`
    );
  }
}

async function main() {
  if (!termRaw || termRaw === "-h" || termRaw === "--help") {
    help();
    process.exit(0);
  }
  const term = termRaw.trim().toLowerCase();
  const englishLines = readEnglish();

  // Find exact match index in english.txt
  let idx0 = -1;
  for (let i = 0; i < englishLines.length; i++) {
    const line = (englishLines[i] || "").trim();
    if (!line || line.startsWith("#")) continue;
    if (line.toLowerCase() === term) {
      idx0 = i; // 0-based
      break;
    }
  }
  if (idx0 === -1) die("Not a valid BIP-39 word (exact match required).", 2);

  // Load emoji.txt from GitHub raw (fallback to local)
  const emojiLines = await loadEmojiLines();

  // Same index in emoji.txt (0-based)
  const out = emojiLines[idx0] ?? "";

  if (!out) die(`No emoji mapping found at index ${idx0 + 1}.`, 3);

  process.stdout.write(out + (out.endsWith("\n") ? "" : "\n"));
}

main().catch((e) => die(e.message));
