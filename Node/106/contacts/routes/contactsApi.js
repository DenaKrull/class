var express = require('express');
var router = express.Router();
const pool = require('../pool');

/* GET home page. */
router.route('/')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM contacts', (error, results, fields) => {
      if (error) {
        res.statusCode = 500;
        res.send(error.message);
        // return res.sendStatus(500);
      }
      res.send(results);
    });
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO contacts (first,last,email,phone)VALUES(?,?,?,?)',
      [req.body.first, req.body.last, req.body.email, req.body.phone],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        console.log(results);
        req.body.id = results.insertId;
        res.status(201)
          .location(`${req.baseUrl}/${req.body.id}`)
          .send(`Contact ${req.body.first} ${req.body.last} ${req.body.id} added`);
      });
  });

router.route('/:id')
  .get(function (req, res, next) {
    pool.query('SELECT * FROM contacts WHERE id = ?', [req.params.id], (error, results, fields) => {
      if (error) {
        return res.sendStatus(500);
      }
      if (!results.length) {
        return res.sendStatus(404);
      }

      res.send(results[0]);
    });
  })
  .put((req, res, next) => {
    pool.query('UPDATE contacts SET first = ?, last = ?, email = ?, phone = ? WHERE id = ?',
      [req.body.first, req.body.last, req.body.email, req.body.phone, req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }
        res.sendStatus(204);
      })
  })
  .delete((req, res, next) => {
    pool.query('DELETE FROM contacts WHERE id = ?',
      [req.params.id], (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }
        res.sendStatus(204);
      });
  });
module.exports = router;
