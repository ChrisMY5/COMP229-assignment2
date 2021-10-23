let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport'); 

// connect to the Contact Model
//let Contact = require('../models/contact');

let contactController = require('../controllers/contact')

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// create a route
// GET route for the Business Contact List page - READ operation
router.get('/', contactController.displayContactList);

// GET route for Displaying Add page - Create operation
router.get('/add', requireAuth, contactController.displayAddPage);

// Post route for Processing Add page - Create operation
router.post('/add', requireAuth, contactController.processAddPage);

// GET route for Displaying Edit page - Update operation
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// Post route for Processing Edit page - Update operation
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// GET to perform Contact Deletion - Delte operation
router.get('/delete/:id', requireAuth, contactController.performDelete);


module.exports = router;