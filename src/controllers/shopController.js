const fs = require('fs');
const path = require('path')

/* Fatla soliucionar la logiaca del cotrolador */


//Cotrolador para la ruta /shop
const getShop = (req, res) => {
    res.sendFile(path.resolve(__dirname,'../../public/pages/shop/shop.html'))
}
//contrlador para la ruta /shop/items
const getItems = (req, res) => {
    
const Funkos = fs.readFileSync(path.resolve(__dirname, '../../data/item.json'));//trae el array de items en binario
const infoFunkos = JSON.parse(Funkos);//parsea de binario a array de obj.
    const { licence } = req.query;//destructura el objeto
   const itemFiltered = infoFunkos.filter(el => el.collection == licence);
   if (itemFiltered.length == 0) {
       res.send(infoFunkos)
    }
    res.send(itemFiltered)
}
//Controlador para la ruta /shop/items/:id
const getId = (req, res) => {
    //reciben los datos de la base de datos y se envian las vistas
    const buscado = req.params.id;
    const data = fs.readFileSync(path.resolve(__dirname, '../../data/item.json'));//trae el array de items en binario
    const result = JSON.parse(data);//Convertimos a obj
    const search = result.find(el => el.id == buscado);//flitramos el objeto
    if (search) {//Evalua si existe el item
        res.send(search);
    } 
    res.send(result)   
}
//Controlador para la ruta /shop/items/:id/add
const postAdd = (req, res) => {
    res.sendFile(path.resolve(__dirname,'../../public/pages/admin/create.html'))
}
const getCart = (req, res) => {
    res.sendFile(path.resolve(__dirname,'../../public/pages/shop/cart.html'))
    
}

module.exports = {
    getItems,
    getShop,
    getId,
    postAdd,
    getCart
}