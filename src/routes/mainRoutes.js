const express = require('express'), router = express.Router(), mainController = require('../controllers/mainController.js')

/* Todas las rutas que no tengan que ver con el shop ni el admin */
/* router.get('/home', (req, res) => res.render('home')); */
router.get('/home', mainController.homeView);
router.get('/abaut', mainController.getAbaut);
router.get('/login', mainController.postLogin);//falta crear el ejs y cambiar a post
router.get('/register', mainController.postRegister);//falta el ejs y cambiar a post


module.exports = router;