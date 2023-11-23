const express = require('express');
const router = express.Router();
const fs = require('fs');
const funkos = require('../../public/js/FunkosObj.js');
const { log } = require('console');


router.get('/', (req, res) => {
    res.sendFile('./index.html')
})

router.get('/items', (req, res) => {
    const { query } = req.query
    console.log(query);
    const Funkos = fs.readFileSync('./data/item.json');
    const infoFunkos = JSON.parse(Funkos);
    const itemFiltered = infoFunkos.filter(el => el.serie == query)
    res.send(itemFiltered)

})


router.get('/items/:id', (req, res) => {
    const buscado = req.params.id;
    const data = fs.readFileSync('./data/item.json')//Traemos los datos del archivo(puede ser una consulta a la base de datos)
    const result = JSON.parse(data);//Convertimos a obj
    const search = result.find(el => el.id == buscado);//flitramos el objeto
    res.send(search);
})
router.get('/items/:item', (req, res) => {
   
})




module.exports = router;