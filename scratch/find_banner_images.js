const https = require('https');

const domain = 'themes.envytheme.com';
const baseNameList = [
  'man', 'code', 'carpet', 'bin', 'book', 'dekstop', 'desktop', 'dot', 
  'flower-top-big', 'flower-top', 'keyboard', 'pen', 'table', 'tea-cup', 
  'headphone', 'main-pic', 'main-pic-2'
];
const extensions = ['png', 'jpg', 'jpeg', 'svg', 'webp'];
const folders = [
  '/startp/wp-content/uploads/2020/11/',
  '/startp/wp-content/uploads/2021/02/',
  '/startp/wp-content/uploads/2025/01/',
  '/startp/wp-content/themes/startnext/assets/img/'
];

const paths = [];
for (const folder of folders) {
  for (const name of baseNameList) {
    for (const ext of extensions) {
      paths.push(`${folder}${name}.${ext}`);
    }
  }
}

function checkPath(path) {
  return new Promise((resolve) => {
    const options = {
      hostname: domain,
      port: 443,
      path: path,
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    };
    const req = https.request(options, (res) => {
      resolve({ path, statusCode: res.statusCode });
    });
    req.on('error', () => {
      resolve({ path, statusCode: 500 });
    });
    req.end();
  });
}

async function run() {
  const batchSize = 25;
  const found = [];
  for (let i = 0; i < paths.length; i += batchSize) {
    const batch = paths.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(checkPath));
    for (const res of results) {
      if (res.statusCode === 200) {
        console.log(`FOUND: https://${domain}${res.path}`);
        found.push(res.path);
      }
    }
  }
  console.log(`Finished. Found ${found.length} items.`);
}

run();
