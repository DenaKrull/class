var express = require('express');
var router = express.Router();

/* GET home page. */
const contacts = [{
  first: 'John',
  last: 'Doe',
  email: ' ',
  phone: ''
}]
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM contacts', function (error, results, fields) {
    if (error) return next(error) ;
    res.render('layout', {
      title: 'Contacts',
      contacts: results,
      noContacts: contacts.length === 0,
      css: ['contacts.css'],
      partials: { content: 'contacts' }
    });
  });
});

router.get('/addContact', (req, res, next) => {
  res.render('layout', {
    title: 'Add Contact',
    css: ['contact.css'],
    partials: { content: 'contact' }
  });
});

router.post('/addContact', (req, res, next) => {
  connection.query('INSERT INTO contacts (first,last,email,phone) VALUES(?,?,?,?)', [
    req.body.first, req.body.last, req.body.email, req.body.phone
  ], function (error, results, fields) {
    if (error) return next(error) ;

    res.redirect('/contacts');
  });
});

router.get('/editContact/:id', (req, res, next) => {
  connection.query('SELECT * FROM contacts WHERE id = ?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    if(!results.length){
      return next(new Error('Contact not found'));
    }
    res.render('layout', {
      title: 'Edit Contacts',
      css: ['contact.css'],
      contact: results[0],
      partials: { content: 'contact' }
    });
  });
});

router.post('/editContact/:id', (req, res, next) => {
  connection.query('UPDATE contacts SET first = ?, last = ?, email = ?, phone = ? WHERE id = ?', [
    req.body.first, req.body.last, req.body.email, req.body.phone, req.params.id
  ],
    function (error, results, fields) {
      if (error) throw error;
      res.redirect('/contacts');
    });
});


router.get('/deleteContact/:id', (req, res, next) => {
  connection.query('DELETE FROM contacts WHERE id = ?', [req.params.id], function (error, results, fields) {
    if (error) return next(error) ;
    if(!results.affectedRows) return next(new Error('Contact not found'));

    res.redirect('/contacts');
  });
});
module.exports = router;
