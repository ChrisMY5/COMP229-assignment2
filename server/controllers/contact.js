/* Man Young Oh / 301161472 / COMP229-005 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to model
let Contact = require ('../models/contact');

// activate displaying the contactlist
module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('contact/list', 
            {title: 'Business Contact List', 
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

// activate to diaply the page of Adding a new contact
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', 
    {title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''});
}

// activate actual process of adding new contac
module.exports.processAddPage = (req, res, next) => {
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
}

// activate to display of Edit page
module.exports.displayEditPage = (req, res, next) => {
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
            res.render('contact/edit', 
            {title: 'Edit Contact', 
            contact: ContactToEdit, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

// activate actual process of Editting the specific contact data
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
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
}

// remove a selected contact list 
module.exports.performDelete = (req, res, next) => {
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
}