const app = require('express')();

app.get('/joeBidenPoll', (req, res, next) => {
  res.send({ first: 'Joe', last: 'Smith', poll: '2020-03-03' });
});

app.get('/sayHello', (req, res, next) => {
  res.send(`Hello ${req.query.name}`);
});

app.get('/sayHello/:name', (req, res, next) => {
  res.send(`Hello2 ${req.params.name}`);
});

app.param('userId', (req, res, next) => {
  req.user = {
    id: req.params.useId,
    name: 'Joe Biden',
    email: 'jbiden@'
  };
  next();
});

app.get('/a/:userId'), (req, res, next) => {
  res.send({ method: 'a', user: req.user });
}

app.get('/b/:userId'), (req, res, next) => {
  res.send({ method: 'b', user: req.user });
}
app.listen(80);