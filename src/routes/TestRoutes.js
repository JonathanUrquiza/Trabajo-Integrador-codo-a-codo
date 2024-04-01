const express = require('express');
const router = express.Router();

const ShopItemController = require('../controllers/ShopItemController.js')
const OneItemController = require('../controllers/ShopItemController.js')
//Busca los items que tiene el mismo collection || endpoint unico para collection
router.get('/', ShopItemController)
router.get('/:id', OneItemController)


module.exports = router;