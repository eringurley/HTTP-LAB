const { createServer } = require('http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello');
});

server.listen(7890, () => {
  console.log('listening on 7890');
});
