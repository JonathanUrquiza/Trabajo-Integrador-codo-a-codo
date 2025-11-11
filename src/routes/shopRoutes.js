const express = require('express');
const router = express.Router();
const { 
    shopView,
    getIlicence,
    productName,
    itemView,
    checkout,
    getItem,
    postAdd
} = require('../controllers/shopController.js');

router.get('/shop', shopView);
router.get('/items', getIlicence);
router.get('/item/:id', itemView);
router.get('/item', productName);
router.get('/items/cart', getItem);
router.post('/item/cart', checkout);
router.post('/shop/items/:id/add', postAdd);

module.exports = router;