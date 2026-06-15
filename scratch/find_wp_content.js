const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../doc/source-code.md');
const html = fs.readFileSync(filePath, 'utf8');

// Find all matches for themes.envytheme.com or wp-content/uploads
const matches = html.match(/https?:\/\/[^\s"'<>]+/g) || [];
const wpContentUrls = new Set();
for (const url of matches) {
  if (url.includes('wp-content')) {
    wpContentUrls.add(url);
  }
}

console.log("=== WP CONTENT URLS IN SOURCE ===");
Array.from(wpContentUrls).sort().forEach(url => console.log(url));
