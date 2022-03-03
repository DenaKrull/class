var express = require('express');
var router = express.Router();

let contacts = [
  {
    id: 1,
    first: 'John',
    last: 'Doe',
    email: '',
    phone: '2324646454564',
  }, {
    id: 2,
    first: 'Kamala',
    last: 'Harris',
    email: 'sfsdfdf',
    phone: '654545',
  }];

let nextId = contacts.length + 1;
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contacts',
    contacts: contacts,
    noContacts: contacts.length === 0,
    css: ['contacts.css'],
    partials: { content: 'contacts' }
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
  req.body.is = nextId++;
  contacts.push(req.body);
  res.redirect('/contacts');
});

router.get('/editContact/:id', (req, res, next) => {
  let contact = contacts.find(contact => contact.id === parseInt(req.params.id));
  res.render('layout', {
    title: 'Edit Contacts',
    css: ['contact.css'],
    contact,
    partials: { content: 'contact' }
  });
});

router.post('/editContact/:id', (req, res, next) => {
  let contact = contacts.find(contact => contact.id === parseInt(req.params.id));
  Object.assign(contact,req.body);
 res.redirect('/contacts');
});

router.get('/deleteContact/:id', (req, res, next) => {
  contacts = contacts.filter(contact => contact.id !== parseInt(req.params.id));
  res.redirect('/contacts');
});


module.exports = router;
