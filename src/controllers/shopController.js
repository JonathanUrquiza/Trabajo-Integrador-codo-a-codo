const path = require('path');
const { getAll, getOne } = require('../models/items.js');

/* El controlador respoden las peticiones de las rutsa*/



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
const getIlicence = async (req, res) => {
    const licence  = req.params.licence;
    const item = await getOne({product_licence : licence});
    res.send(item);
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