const express = require('express');
const router = express.Router();
const fs = require('fs');



router.get('/shop', (req, res) => {
     res.sendFile('C:/Users/Jonathan/Desktop/Integrador_nodeJS/public/pages/shop/shop.html') 
})
//Busca los items que tiene el mismo collection || endpoint unico para collection
router.get('/shop/items', (req, res) => {
    const { licence } = req.query;//destructura el objeto
    const Funkos = fs.readFileSync('./data/item.json');//trae el array de items en binario
    const infoFunkos = JSON.parse(Funkos);//parsea de binario a array de obj.
   const itemFiltered = infoFunkos.filter(el => el.collection == licence);
   if (itemFiltered.length == 0) {
       res.send(infoFunkos)
    }
    res.send(itemFiltered)
})

router.get('/shop/items/:id', (req, res) => {
    const buscado = req.params.id;
    const data = fs.readFileSync('./data/item.json')//Traemos los datos del archivo(puede ser una consulta a la base de datos)
    const result = JSON.parse(data);//Convertimos a obj
    const search = result.find(el => el.id == buscado);//flitramos el objeto
    if (search) {//Evalua si existe el item
        res.send(search);
    } 
    res.send(result)   
    
})

router.post('/shop/items/:id/add', (req, res) => {
    res.sendFile('C:/Users/Jonathan/Desktop/Integrador_nodeJS/public/pages/admin/create.html') 

})

router.get('/shop/cart', (req, res) => {

})

router.post('/shop/cart', (req, res) => {
    
})

module.exports = router;