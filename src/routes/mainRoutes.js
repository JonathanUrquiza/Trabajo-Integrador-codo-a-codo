const express = require('express'), router = express.Router(), mainController = require('../controllers/mainController.js')

/* Todas las rutas que no tengan que ver con el shop ni el admin */
router.get('/index', mainController.getIndex);
router.get('/abaut', mainController.getAbaut);

module.exports = router;