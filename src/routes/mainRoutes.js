const express = require('express'), 
router = express.Router(), 
mainController = require('../controllers/mainController.js')

/* Todas las rutas que no tengan que ver con el shop ni el admin */

router.get('/', mainController.homeView);//Esta ruta es la princiál que muetra las categorias de los funkos

router.get('/contact', mainController.contactView);//Esta ruta muestra el formulario al que le faltan los estilos

router.get('/about', mainController.aboutView);//Esta ruta muestra una imagen de mi perfil, Debe redirigirme a webapp

router.get('/faqs',mainController.faqsView);//Esta ruta no entrega nada como respuesta



module.exports = router;