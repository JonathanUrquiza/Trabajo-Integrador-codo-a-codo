const express = require('express'), router = express.Router(), mainController = require('../controllers/mainController.js')

/* Todas las rutas que no tengan que ver con el shop ni el admin */
/* router.get('/home', (req, res) => res.render('home')); */
router.get('/home', mainController.homeView);
router.get('/home/about', mainController.AboutView);
router.get('/home/contact', mainController.contactView);//falta crear el ejs y cambiar a post
router.get('/home/faqs', mainController.faqsViews);//falta el ejs y cambiar a post


module.exports = router;