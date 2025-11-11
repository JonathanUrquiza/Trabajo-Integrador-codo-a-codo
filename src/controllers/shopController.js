const itemsService = require('../service/itemsServices.js')

const shopView = async (_req, res) => {
    const items = await itemsService.getAllItems();
    const { data } = items;
    res.render('../views/shop/shop', {
        view: {
            title: "Shop || FUNKOSHOP"
        },
        items: data
    });
}
const itemView = async (req, res) => {
    const id = req.params.id;   
    const item = await itemsService.getItem(id);
    const { data } = item;
    res.render('../views/shop/item', {
        view: {
            title: "Item|| FunkoShop"
        },
        item: data,
        enableGlide: true
    })
}
const getIlicence = async (req, res) => {
    const licence  = req.query.licence;
    const items = await itemsService.getAllItemsCollection(licence);
    const { data } = items
    res.render('../views/shop/shop', {
        view: {
            title: "Licence || FunkoShop"
        },
        items: data
    })
}



const getItem = async (req, res) => {
    res.render('../views/shop/cart',  {
        view: {
            title: "Cart|| FunkoShop"
        },
    });
}


const productName = async (req, res) => {
    const name = req.query.product_name;
    const item = await itemsService.getProductName(name)
    const { data } = item;

    res.render('../views/shop/item', {
        view: {
            title: "Item|| FunkoShop"
        },
        item: data,
        enableGlide: true
    })
}
const checkout = (req, res) => {
    res.send('Checkout logic')
}
const postAdd = (req, res) => {
    res.send('postAdd item in cart')
}
module.exports = {
    itemView,
    getIlicence,
    shopView,
    getItem,
    productName,
    checkout,
    postAdd
}