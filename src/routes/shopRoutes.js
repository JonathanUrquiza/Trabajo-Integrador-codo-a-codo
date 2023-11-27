const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController.js');


router.get('/shop', shopController.getShop)
//Busca los items que tiene el mismo collection || endpoint unico para collection
router.get('/shop/items/show', shopController.getItems)//muestra todos los items
router.get('/shop/items/:licence',shopController.getIlicence)//muestra los de la misma licence
router.get('/shop/items/:id', shopController.getId);



router.post('/shop/items/:id/add', shopController.postAdd)
router.get('/shop/cart', shopController.getCart)


module.exports = router;