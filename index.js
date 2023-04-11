const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

let customers = [
    {id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
    {id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113'},
    {id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176'},
  ]

app.set('view engine', 'pug');

app.get('/customers', (req, res) => {
  res.render('customerlist', {customers: customers});
});

// show the form to add a new customer
app.get('/addcustomers', (req, res) => {
  res.render('addcustomers');
});

// add a new customer
app.post('/addcustomers', (req, res) => {
  let customer = {
    id: Date.now().toString(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone
  }
  customers = [...customers, customer];
  res.redirect('/customers');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});