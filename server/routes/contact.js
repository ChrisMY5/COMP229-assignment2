let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the Contact Model
let Contact = require('../models/contact');


// create a route
// GET route for the Business Contact List page - READ operation
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('contact/list', {title: 'Business Contact List', ContactList: contactList});
        }
    });
});

// GET route for Displaying Add page - Create operation
router.get('/add', (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'});
});


// Post route for Processing Add page - Create operation
router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) => {
        if(err)
        {
            console.log(err);
            res.end.bind(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business-contact');
        }
    });
});


// GET route for Displaying Edit page - Update operation
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, ContactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit})
        }
    });
});

// Post route for Processing Edit page - Update operation
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id, id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the contact list
             res.redirect('/business-contact');
        }
    });
});

// GET to perform Contact Deletion - Delte operation
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the contact list
             res.redirect('/business-contact');
        }
    });
});


module.exports = router;