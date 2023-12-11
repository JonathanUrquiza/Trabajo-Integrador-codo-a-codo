const intemsSerice = require('../service/itemsServices.js')

/* El controlador respoden las peticiones de las rutsa*/
const shopView = async (req, res) => {
    const items = await intemsSerice.getAllItems();
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
    const item = await intemsSerice.getItem(id);
    const { data } = item;
    res.render('../views/shop/item', {
        view: {
            title: "Item|| FunkoShop"
        },
        item: data,
        enableGlide: true
    })
}
const getItem = async (req, res) => {
   
    res.render('../views/shop/cart',  {
        view: {
            title: "Cart|| FunkoShop"
        },
    });
}
//contrlador para la ruta /shop/items:licence
const getIlicence = async (req, res) => {
    const licence  = req.query.licence;
    const items = await intemsSerice.getAllItemsCollection(licence);
    const { data } = items
    res.render('../views/shop/shop', {
        view: {
            title: "Licence || FunkoShop"
        },
        items: data
    })
}

//Falta que funcione con el input del formulario de busqueda
const productName = async (req, res) => {
    const name = req.query.name;
    const item = await intemsSerice.getProductName(name)
    const { data } = item;
    res.render('../views/shop/item', {
        view: {
            title: "Item|| FunkoShop"
        },
        item: data[0],
        enableGlide: true
    })

}
const checout = (req, res) => {
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
    checout,
    postAdd
}