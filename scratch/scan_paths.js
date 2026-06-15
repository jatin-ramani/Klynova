const https = require('https');

const domain = 'themes.envytheme.com';
const filenames = ['man.png', 'main-pic.png', 'shape1.png', 'shape4.png', 'shape5.png', 'code.png', 'carpet.png'];
const years = ['2019', '2020', '2021', '2022'];
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const pathsToCheck = [];

// Theme images paths
for (let i = 1; i <= 10; i++) {
  pathsToCheck.push(`/startp/wp-content/themes/startnext/assets/img/shape${i}.png`);
  pathsToCheck.push(`/startp/wp-content/themes/startnext/assets/img/shape${i}.svg`);
  pathsToCheck.push(`/startp/wp-content/themes/startnext/assets/img/shape/${i}.png`);
  pathsToCheck.push(`/startp/wp-content/themes/startnext/assets/img/shape/${i}.svg`);
}

// Uploads paths
for (const year of years) {
  for (const month of months) {
    for (const name of filenames) {
      pathsToCheck.push(`/startp/wp-content/uploads/${year}/${month}/${name}`);
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

// Run requests in batches of 20 to avoid overwhelming
async function run() {
  const batchSize = 20;
  const found = [];
  
  for (let i = 0; i < pathsToCheck.length; i += batchSize) {
    const batch = pathsToCheck.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(checkPath));
    for (const res of results) {
      if (res.statusCode === 200) {
        console.log(`FOUND: https://${domain}${res.path}`);
        found.push(res.path);
      }
    }
  }
  console.log(`\nScan finished. Found ${found.length} active paths.`);
}

run();
