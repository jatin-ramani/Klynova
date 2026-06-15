const https = require('https');

const domain = 'themes.envytheme.com';
const paths = [
  '/startp/wp-content/themes/startnext/assets/img/shape1.png',
  '/startp/wp-content/themes/startnext/assets/img/shape/shape1.png',
  '/startp/wp-content/themes/startnext/assets/images/shape1.png',
  '/startp/wp-content/themes/startnext/assets/img/shapes/shape1.png',
  '/startp/wp-content/themes/startnext/assets/img/shape/1.png',
  '/startp/wp-content/themes/startnext/assets/img/shape2.svg',
  '/startp/wp-content/themes/startnext/assets/img/shape3.svg',
  '/startp/wp-content/themes/startnext/assets/img/shape4.svg',
  '/startp/wp-content/uploads/2020/11/man.png',
  '/startp/wp-content/uploads/2020/11/main-pic.png',
  '/startp/wp-content/uploads/2020/11/code.png',
  '/startp/wp-content/uploads/2020/11/carpet.png',
  '/startp/wp-content/uploads/2020/11/bin.png',
  '/startp/wp-content/uploads/2020/11/book.png',
];

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

Promise.all(paths.map(checkPath)).then((results) => {
  results.forEach(({ path, statusCode }) => {
    console.log(`HEAD https://${domain}${path} -> ${statusCode}`);
  });
});
