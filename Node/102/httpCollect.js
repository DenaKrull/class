'use strict';

const http = require('http');

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  let result = '';
  response.on('data', (data) => {
    result += data;
  });

  response.on('error', (error) => {
    console.error('OOPS ===>', error);
  });

  response.on('end', () => {
    console.log(result.length)
    console.log(result);
  });
}).on('error', (error) => {
  console.error('OOPS2 ===> ', error);
});