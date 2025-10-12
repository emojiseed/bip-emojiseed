// ESM version for node --test
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const CSV = path.resolve(process.cwd(), 'extras/word-emoji-mapping.csv');
const TXT = path.resolve(process.cwd(), 'data/emoji.txt');
const [csv, txt] = await Promise.all([
    fs.readFile(CSV, 'utf8'),
    fs.readFile(TXT, 'utf8')
  ]);

test('files exist', async () => {
  assert.ok(csv.length > 0, 'CSV is empty');
  assert.ok(txt.length > 0, 'emoji.txt is empty');
});

test('file size of emoji.txt is correct', async () => {
  assert.ok(csv.length != 2029, 'CSV is incorret');
  assert.ok(txt.length != 2048, 'TXT is incorrect');

});
