const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: process.env.sqluser,//'nodeuser',
  password: process.env.sqlpassword,//'test123',
  database: 'nodeuser'
});

pool.on('acquire', (connection) => {
  console.log('Connection %d acquired', connection.threadId);
});
pool.on('connection', (connection) => {
  console.log('Connection %d connected', connection.threadId);
});
pool.on('enqueue', () => {
  console.log('waiting for available connection slot');
});
pool.on('release', (connection) => {
  console.log('Connection %d connected', connection.threadId);
});


module.exports = pool;

