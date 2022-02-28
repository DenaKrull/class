// const app = require('connect')();
const app = require('express')();

app.use('/home', (req, res) => {
  res.end("This is home page");
});

app.use('/about', (req, res) => {
  res.end("This is about page");
});

// app.use(require('./queryParser'));
// app.use(require('./magicword'))();

app.use(require('./basicAuth')());

app.use('/admin', (req, res) => {
  res.end("This is admin page");
});

app.listen(80);