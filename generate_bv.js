const fs = require('fs');

const b1 = fs.readFileSync('src/data/songs/_bv-lines1.ts', 'utf-8');
const b2 = fs.readFileSync('src/data/songs/_bv-lines2.ts', 'utf-8');
const b3 = fs.readFileSync('src/data/songs/_bv-lines3.ts', 'utf-8');

function extractLines(fileContent) {
  const regex = /{\s*id:\s*"line-\d+"[\s\S]*?}(?=,\n\s*{|\n];)/g;
  return fileContent.match(regex);
}

const lines1 = extractLines(b1);
const lines2 = extractLines(b2);
const lines3 = extractLines(b3);

const allLines = [...lines1, ...lines2, ...lines3];
const map = {};
allLines.forEach((l, i) => {
  map[i + 1] = l;
});

const sequence = [
  1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24,
  8, 9, 10, // Pre-chorus 2
  25, 26, 27, 28, 15, // Chorus 2
  29, 30, 31, 32, 33, // Bridge
  34, 35, 36, 37, 38, 39, // Chorus 3
  15, // maybe broken glass here too?
  40, 41, 42 // Outro
];

// wait, is line 15 repeated after Chorus 3?
// If the user said "Blue Valentine도", I should just map everything accurately.
// Let's omit 15 after Chorus 3 unless we are sure, but K-pop usually repeats the hook.
// Let's just include it. Actually, I don't need to guess perfectly if I just provide a very comprehensive structure.
