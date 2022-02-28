const http = require('http');

http.createServer((req, res) => {
  //res.statusCode(404);
  // res.setHeader('Content-Type','text/plain');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.write('Hello World');
  res.write('Page not found');
  res.end();
}).listen(80);
