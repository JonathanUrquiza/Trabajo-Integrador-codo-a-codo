const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');

app.use(express.static('public'));

/* middleware */
 /* El middleware sirve para convertir la información a un formato que el servidor puede entender */
app.use(express.urlencoded())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 
app.use(express.json())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 


app.use('/', shopRoutes);
app.use('/', adminRoutes);


/* 
app.get('/', (req, res) => {
    res.send(__dirname + './index.html')
}) */


app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/pages/admin/admin.html')
})



app.get('/item', (req, res) => {
    res.sendFile(__dirname + '/public/pages/shop/item.html')
})
 
app.get('/item', (req, res) => {
    const buscado = req.query.search;
    const data = fs.readFileSync(__dirname + '/data/item.json')//Traemos los datos del archivo(puede ser una consulta a la base de datos)
    const result = JSON.parse(data);//Convertimos a obj
    if (buscado) {
        const search = result.filter( item => item.serie == buscado );//flitramos el objeto
        res.send(search);
    }
    res.send(result)
})

app.get('/item/:id', (req, res) => {
    const id = req.params.id//Leemos el id de la request
    const data = fs.readFileSync(__dirname + '/data/item.json')//Traemos los datos del archivo(puede ser una consulta a la base de datos)
    const funkoarray = JSON.parse(data);//Convertimos a obj
    
    if (id) {//validamos si existe el id
        let result = funkoarray.filter( item => item.id == id );//flitramos el objeto
        res.send(result);//mostramos los datos obtenidos
    } else {
        res.send(funkoarray)
    }
})


app.get('/cart', (req, res) => {

    res.sendFile(__dirname + '/public/pages/shop/cart.html')

})

app.get('/shop', (req, res) => {

    res.sendFile(__dirname + '/public/pages/shop/shop.html')
})


app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`))