const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController.js');



//Busca los items que tiene el mismo collection || endpoint unico para collection
router.get('/shop', shopController.shopView)//muestra todos los items
router.get('/items', shopController.getIlicence);
router.get('/item/:id', shopController.itemView);
router.get('/items/cart', shopController.getItem);//Trae un elemento según el ID.
//router.get('/items/:licence',shopController.getIlicence)//muestra los de la misma licence



//router.post('/shop/items/:id/add', shopController.postAdd)
//router.get('/shop/cart', shopController.getCart)


module.exports = router;