const fs = require('fs');
const path = require('path');
const { getAll, getOne } = require('../models/items.js');

/* Fatla soliucionar la logiaca del cotrolador */



//Cotrolador para la ruta /shop
const getShop = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/shop/shop.html'))
}
//Controlador para la ruta /shop/item/show
const getItems = async (req, res) => {
    const items = await getAll();
    res.send(items);
}
//Controlador para la ruta /shop/items/:id
const getId = async (req, res) => {
    const id = req.params.id;
    const item = await getOne({product_id: id});//Desde aca se cambia el tipo de consulta
    res.send(item);
}

//contrlador para la ruta /shop/items
const getIlicence = (req, res) => {

    const Funkos = fs.readFileSync(path.resolve(__dirname, '../../data/item.json'));//trae el array de items en binario
    const infoFunkos = JSON.parse(Funkos);//parsea de binario a array de obj.
    const { licence } = req.query;//destructura el objeto
    const itemFiltered = infoFunkos.filter(el => el.collection == licence);
    if (itemFiltered.length == 0) {
        res.send(infoFunkos)
    }
    res.send(itemFiltered)
}
//Controlador para la ruta /shop/items/:id/add
const postAdd = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/admin/create.html'))
}
const getCart = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/shop/cart.html'))

}

module.exports = {
    getItems,
    getId,
    getIlicence,
    getShop,
    postAdd,
    getCart
}