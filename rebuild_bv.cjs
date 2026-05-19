const fs = require('fs');

const text = fs.readFileSync('bluevalentine.txt', 'utf8');

const lyricsMatch = text.match(/原文\t日本語訳\n([\s\S]+?)\n表現メモ/);
if (!lyricsMatch) {
  console.log("No lyrics match");
  process.exit(1);
}
const lyricsRaw = lyricsMatch[1].trim().split('\n');
const lines = lyricsRaw.map(l => {
  const parts = l.split('\t');
  return { korean: parts[0].trim(), japanese: parts[1] ? parts[1].trim() : '' };
});

const tsFile = fs.readFileSync('src/data/songs/_bv-lines-all.ts', 'utf8');
const objRegex = /{\s*id: "line-[^"]+",\s*korean: "([^"]+)",\s*japanese: "([^"]+)",[\s\S]*?tokens: \([\s\S]*?\]\s*as any \|\| \)?\[\s*([\s\S]*?)\s*\]\s*}/g;
// Wait, my previous generated TS might have just tokens: [ ... ]
// Let's use a simpler extraction or just require it!

