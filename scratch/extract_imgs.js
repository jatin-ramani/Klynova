const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../doc/source-code.md');
const html = fs.readFileSync(filePath, 'utf8');

// Use regex to find all img tags and their src attributes
const imgRegex = /<img[^>]+src="([^"]+)"/g;
const srcMatches = new Set();
let match;
while ((match = imgRegex.exec(html)) !== null) {
  srcMatches.add(match[1]);
}

// Find all css file links or other links
const linkRegex = /<link[^>]+href="([^"]+)"/g;
const links = new Set();
while ((match = linkRegex.exec(html)) !== null) {
  links.add(match[1]);
}

console.log("=== IMAGES ===");
Array.from(srcMatches).sort().forEach(src => console.log(src));

console.log("\n=== LINKS ===");
Array.from(links).sort().forEach(link => console.log(link));
