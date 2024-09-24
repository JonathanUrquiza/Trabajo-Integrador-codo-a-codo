const express = require('express');
const router = express.Router();
const { shopView,
     getIlicence,
      productName,
       itemView,
        checout,
        getItem,
        postAdd
    } = require('../controllers/shopController.js');

router.get('/shop', shopView)//muestra todos los items falta la paginación(funcionando)

router.get('/items', getIlicence);//Muestra los items segun su collection(funcionando)

router.get('/item/:id', itemView);//Muestra el detalle de los items(funcionando)

router.get('/item', productName);//Muestra los porductos buscados por nombre preciso (http://localhost:8000/shop/item?product_name=Pidgeotto%20Flying)

router.get('/items/cart', getItem);//muesta los items seleccionados en el carrito de compra.(son estáticos)
router.post('/item/cart', checout)//recibe los items seleccionados y los agega al proceso de compra.(Falta hacer la logica)
router.post('/shop/items/:id/add', postAdd)//Agrega los items al carrito (fatla hacer la logica)

module.exports = router;