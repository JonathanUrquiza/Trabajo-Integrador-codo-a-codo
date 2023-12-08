const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController.js');

//Busca los items que tiene el mismo collection || endpoint unico para collection
router.get('/', shopController.shopView)//muestra todos los items
router.get('/items', shopController.getIlicence);//Muestra los items segun su collection
router.get('/item', shopController.productName);//Falta hacer que la consulta en el input ejecute este controller
router.get('/item/:id', shopController.itemView);
router.get('/items/cart', shopController.getItem);//muesta los items seleccionados en el carrito de compra.(son estáticos)
router.post('/item/cart', shopController.checout)//recibe los items seleccionados y los agega al proceso de compra.(Falta hacer la logica)
router.post('/shop/items/:id/add', shopController.postAdd)//Agrega los items al carrito (fatla hacer la logica)

module.exports = router;