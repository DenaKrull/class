const http = require('http');
http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader('Content-Type', 'text/html');

  const baseUrl = 'http://' + req.headers.host;
  const url = new URL(req.url, baseUrl);
  console.log(url.pathname);


  switch (url.pathname) {
    case '/index.html':
      res.write('<h1>Welcome to PCS website</h1>');
      break;
    case '/about.html':
      res.write('<h2>About</h2>');
      break;
    case '/':
      // res.statusCode = 301;
      // res.setHeader('Location', '/index.html');
      res.writeHead(301, {
        'Location': '/index.html'
      });
    case '/sayHello':
     // console.log(url.searchParams.get('name'));
      res.write(`<h1>Hello, ${url.searchParams.get('name') || 'stranger'}</h1>`);
      break;
    default:
      res.write('<h1>404</h1>');
      break;


  }
  res.end();
}).listen(80);