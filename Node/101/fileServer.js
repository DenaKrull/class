const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const contentTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',

}

http.createServer(async (req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.writeHead(301, { Location: '/index.html' });
  } else {
    const ext = path.extname(req.url);
    res.setHeader('Content-Type', contentTypes[ext] || 'text/plain');

    try {
      const fileContents = await fs.readFile(`./public${req.url}`);
      res.write(fileContents);
    } catch (e) {
      switch (e.code) {
        case ('ENOENT'):
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.write('404 Not Found');
          break;
        default:
          res.statusCode = 500;
          res.write(`'Internal Server Error. Unable to get file ${req.url}`);
      }
    }
  }

  res.end();

}).listen(80);