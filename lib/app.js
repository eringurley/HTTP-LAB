const { createServer } = require('http');
const fs = require('fs');
const { parse } = require('url');

const app = createServer((req, res) => {
  const pathname = parse(req.url).pathname;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(`public${pathname}`, { encoding: 'utf8' }, (err, content) => {
    console.log(pathname);
    if(!content) {
      res.statusCode = 404;
      res.end('404: Page does not exist.');
    } else {
      res.end(content);
    }
  });

});

module.exports = app;
