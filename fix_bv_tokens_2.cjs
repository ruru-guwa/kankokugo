const fs = require('fs');

const missingTokens = {
  "I can see it now": {
    sentenceExplanation: "傷や関係の壊れ方が、今ははっきり見えている。今なら分かる。",
    tokens: [
      { id: "t1", surface: "I", base: "I", language: "en", shortMeaning: "私", meaning: "私は" },
      { id: "t2", surface: "can", base: "can", language: "en", shortMeaning: "〜できる", meaning: "〜できる" },
      { id: "t3", surface: "see", base: "see", language: "en", shortMeaning: "見える", meaning: "見える、分かる" },
      { id: "t4", surface: "it", base: "it", language: "en", shortMeaning: "それ", meaning: "それが" },
      { id: "t5", surface: "now", base: "now", language: "en", shortMeaning: "今", meaning: "今なら" }
    ]
  },
  "Hot and icy": {
    sentenceExplanation: "相手は熱くもあり、冷たくもある。矛盾している。",
    tokens: [
      { id: "t1", surface: "Hot", base: "hot", language: "en", shortMeaning: "熱い", meaning: "熱い" },
      { id: "t2", surface: "and", base: "and", language: "en", shortMeaning: "と", meaning: "〜と" },
      { id: "t3", surface: "icy", base: "icy", language: "en", shortMeaning: "氷のように冷たい", meaning: "氷のように冷たい" }
    ]
  },
  "I can feel it now": {
    sentenceExplanation: "関係の壊れ方や孤独を、頭で理解するだけでなく体感している。",
    tokens: [
      { id: "t1", surface: "I", base: "I", language: "en", shortMeaning: "私", meaning: "私は" },
      { id: "t2", surface: "can", base: "can", language: "en", shortMeaning: "〜できる", meaning: "〜できる" },
      { id: "t3", surface: "feel", base: "feel", language: "en", shortMeaning: "感じる", meaning: "感じる、体感する" },
      { id: "t4", surface: "it", base: "it", language: "en", shortMeaning: "それ", meaning: "それを" },
      { id: "t5", surface: "now", base: "now", language: "en", shortMeaning: "今", meaning: "今なら" }
    ]
  }
};

let tsFile = fs.readFileSync('src/data/songs/_bv-lines-all.ts', 'utf8');

const arrayStr = tsFile.replace(/import type .*?;\n\nexport const completeBlueValentineLines: LyricLine\[\] = /, '').replace(/;\n$/, '');
const lines = eval(arrayStr);

for (const line of lines) {
  const match = missingTokens[line.korean];
  if (match) {
    line.sentenceExplanation = match.sentenceExplanation;
    line.tokens = match.tokens;
    line.tokens.forEach((t, i) => {
      t.id = `${line.id}-t${i+1}`;
    });
  }
}

const out = `import type { LyricLine } from "../../types/song";\n\nexport const completeBlueValentineLines: LyricLine[] = ${JSON.stringify(lines, null, 2)};\n`;

fs.writeFileSync('src/data/songs/_bv-lines-all.ts', out);
console.log("Updated tokens for the 3 missing lines.");
