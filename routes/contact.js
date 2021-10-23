let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the Contact Model
let Contact = require('../models/contact');


// create a route
// GET route for the Book List page - READ operation
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('contact', {title: 'Business Contact List', ContactList: contactList})
        }
    });
});

module.exports = router;