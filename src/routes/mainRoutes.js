const express = require('express'), 
router = express.Router(), 
mainController = require('../controllers/mainController.js')

router.get('/', mainController.homeView);
router.get('/contact', mainController.contactView);
router.get('/about', mainController.aboutView);
router.get('/faqs',mainController.faqsView);



module.exports = router;