let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the Contact Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact')

// create a route
// GET route for the Business Contact List page - READ operation
router.get('/', contactController.displayContactList);

// GET route for Displaying Add page - Create operation
router.get('/add', contactController.displayAddPage);

// Post route for Processing Add page - Create operation
router.post('/add', contactController.processAddPage);

// GET route for Displaying Edit page - Update operation
router.get('/edit/:id', contactController.displayEditPage);

// Post route for Processing Edit page - Update operation
router.post('/edit/:id', contactController.processEditPage);

// GET to perform Contact Deletion - Delte operation
router.get('/delete/:id', contactController.performDelete);


module.exports = router;