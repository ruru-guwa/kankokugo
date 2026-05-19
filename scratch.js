const fs = require('fs');
const log = fs.readFileSync('/Users/ryu/.gemini/antigravity/brain/33cb1671-d07f-4a91-8f6b-acf291bef20b/.system_generated/logs/overview.txt', 'utf8');
const match = log.match(/You’ll always be my blue valentine(?:.|\n){1,3000}/);
if (match) {
  console.log(match[0].substring(0, 1500));
}
