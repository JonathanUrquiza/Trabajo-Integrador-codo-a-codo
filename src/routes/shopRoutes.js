const express = require('express');
const router = express.Router();
const fs = require('fs');
const shopController = require('../controllers/shopController.js');
const auth = require('../middlewares/auth.js');


router.get('/shop', shopController.getShop)
//Busca los items que tiene el mismo collection || endpoint unico para collection
router.get('/shop/items',shopController.getItems)

router.get('/shop/items/:id', shopController.getId)

router.post('/shop/items/:id/add', shopController.postAdd)

router.get('/shop/cart', shopController.getCart)


module.exports = router;