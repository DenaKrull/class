// const connect = require('connect');
// const app = connect();

const app = require('connect')();

app.use(require('./logger'));
// app.use((req, res, next) => {
//   res.write('Hello from connect!\n');
//   next();
// });

// app.use('/middle', (req, res, next) => {
//   res.write('I am middleware!\n');
//   next();
// });

// app.use((req, res, next) => {
//   res.end('Goodbye from connect!');
// });


// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use('/index.html', (req, res, next) => {
//   res.write('<h1>PCS home page!</h1>');
//   next();
// });

// app.use('/aboutus.html', (req, res, next) => {
//   res.write('<h2>About us</h2>');
//   next();
// });

// app.use((req, res, next) => {
//   res.end('<h5>&copy; 2022 PCS</h5>');

// });

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use('/index.html', (req, res, next) => {
  res.write('<h1>PCS home page!</h1>');
  next();
});

app.use('/aboutus.html', (req, res, next) => {
  res.write('<h2>About us</h2>');

});

app.use('/makeError', (req, res, next) => {
  throw new Error('custom error!');

});
app.use(require('./queryParser'));

app.use('/sayHello', (req, res, next) => {
  const name = req.searchParams.get('name') || 'stranger';
  res.end(`Hello, ${name}!`);
});

app.use('/sayGoodbye', (req, res, next) => {
  const name = req.searchParams.get('name') || 'stranger';
  res.end(`Goodbye, ${name}!`);
});


app.use((req, res, next) => {
  // res.statusCode = 404;
  // res.end('<h1> Page not found!</h1>');
  throw { statusCode: 404, message: 'Page not found!' };
});

app.use((error, req, res, next) => {
  res.statusCode = 500;
  res.write(`OOPS! ${error.message}`);
  next(error);
});

app.use((error, req, res, next) => {
  res.statusCode = error.statusCode || 500;
  res.end(`Second Handler - ${error.message}`);
});

app.listen(80);