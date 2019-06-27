const { createServer } = require('http');
const fs = require('fs');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello erin');
});

fs.readFile('./public/index.html', { encoding: 'utf8' }, (err, content) => {
  if(err) return console.error(err);
  console.log(content, 'content');
});


module.exports = app;
