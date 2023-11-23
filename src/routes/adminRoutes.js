const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/admin', (req, res) => {
    res.sendFile('C:/Users/Jonathan/Desktop/Integrador_nodeJS/public/pages/admin/admin.html')
})

router.post('/admin/create', (req, res) => {
    const newItem = req.body
    const infoFunkos = fs.readFileSync('./data/item.json')//Traemos los datos del archivo(puede ser una consulta a la base de datos)
    const Funkos = JSON.parse(infoFunkos);//Convertimos a obj
    Funkos.push(newItem)
    res.send(Funkos)
    
})

module.exports = router;