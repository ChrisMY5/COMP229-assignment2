/* Man Young Oh / 301161472 / COMP229-005 */

/* load the framework and all routes defining  */
let express = require('express');
let router = express.Router();

/* route to call and load 'Home' page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* route to call and load 'Home' page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});
/* route to call and load 'about' page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about' });
});
/* route to call and load 'projects' page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects' });
});
/* route to call and load 'services' page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services' });
});
/* route to call and load 'contact' page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact', page: 'contact' });
});
module.exports = router;
