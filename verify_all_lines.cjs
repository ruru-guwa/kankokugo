const fs = require('fs');

const tsFile = fs.readFileSync('src/data/songs/_bv-lines-all.ts', 'utf8');

// Parse the array
const arrayStr = tsFile.replace(/import type .*?;\n\nexport const completeBlueValentineLines: LyricLine\[\] = /, '').replace(/;\n$/, '');
let lines;
try {
  lines = eval(arrayStr);
} catch (e) {
  console.log("Parse error", e);
  process.exit(1);
}

let hasMissing = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.tokens || line.tokens.length === 0) {
    console.log(`Line ${i + 1} (${line.korean}) has no tokens!`);
    hasMissing = true;
  }
  if (!line.japanese) {
    console.log(`Line ${i + 1} (${line.korean}) has no japanese!`);
    hasMissing = true;
  }
  if (!line.sentenceExplanation) {
    console.log(`Line ${i + 1} (${line.korean}) has no sentenceExplanation!`);
    hasMissing = true;
  }
}

if (!hasMissing) {
  console.log("All 57 lines have tokens, japanese, and sentenceExplanation.");
} else {
  console.log("There are missing fields.");
}
