const fs = require('fs');

const text = fs.readFileSync('bluevalentine.txt', 'utf8');

// Extract lyrics block
const lyricsMatch = text.match(/原文\t日本語訳\n([\s\S]+?)\n表現メモ/);
if (lyricsMatch) {
  const lyrics = lyricsMatch[1].trim().split('\n');
  console.log("Found", lyrics.length, "lines of lyrics.");
  // console.log(lyrics.slice(0, 5));
} else {
  console.log("No lyrics match");
}
