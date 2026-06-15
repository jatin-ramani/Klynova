const https = require('https');

const urls = [
  'https://themes.envytheme.com/startp/wp-content/uploads/2020/11/team-1.jpg',
  'https://themes.envytheme.com/startp/wp-content/uploads/2020/11/man.png',
  'https://themes.envytheme.com/startp/wp-content/uploads/2020/11/main-pic.png',
  'https://themes.envytheme.com/startp/wp-content/uploads/2020/11/code.png',
  'https://themes.envytheme.com/startp/wp-content/themes/startnext/assets/img/shape1.png'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      port: 443,
      path: parsed.pathname,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    };
    const req = https.request(options, (res) => {
      resolve({ url, statusCode: res.statusCode });
      // Abort connection to avoid downloading entire file
      req.destroy();
    });
    req.on('error', () => {
      resolve({ url, statusCode: 500 });
    });
    req.end();
  });
}

Promise.all(urls.map(checkUrl)).then(results => {
  results.forEach(({ url, statusCode }) => {
    console.log(`${url} -> ${statusCode}`);
  });
});
