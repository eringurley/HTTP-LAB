const { createServer } = require('http');
const fs = require('fs');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  fs.readFile('public/index.html', { encoding: 'utf8' }, (err, content) => {
    if(err) return console.error(err);
    res.end(content);
  });
});



module.exports = app;
