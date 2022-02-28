const http = require('http');

http.createServer((req, res) => {

  const baseUrl = 'http://' + req.headers.host;
  const url = new URL(req.url, baseUrl);
  const iso = url.searchParams;
  console.log(url.searchParams, iso);

  if (!iso) {
    res.end('no iso');
  }


  const theDate = new Date(iso);
  let result;
  if (url.pathname === '/api/parsetime') {
    result = {
      hour: theDate.getHours(),
      minute: theDate.getMinutes(),
      second: theDate.getSeconds()
    }

  } else if (url.pathname === '/api/unixtime') {
    result = {
      unixtime: theDate.getTime()
    }
  }
  if (result) {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(result));
  } else {
    res.statusCode = 404;
    res.write('404 not found');
  }
  res.end();
}).listen(process.argv[2]);