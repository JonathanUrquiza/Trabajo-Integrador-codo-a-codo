const express = require('express'), 
router = express.Router(), 
mainController = require('../controllers/mainController.js')

/* Todas las rutas que no tengan que ver con el shop ni el admin */
/* router.get('/home', (req, res) => res.render('home')); */
router.get('/', mainController.homeView);
router.get('/contact', mainController.contactView);
router.get('/about', mainController.aboutView);
router.get('/faqs',mainController.faqsView);



module.exports = router;