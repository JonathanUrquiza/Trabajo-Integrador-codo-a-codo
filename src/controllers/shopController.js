const intemsSerice = require('../service/itemsServices.js')

/* El controlador respoden las peticiones de las rutsa*/
const shopView = async (_req, res) => {
    /* Este código trae todos los items de la base de datos */
    const items = await intemsSerice.getAllItems();
    console.log('Se ejecuta desde shopController ==> shopview');
    
    const { data } = items;
    res.render('../views/shop/shop', {
        view: {
            title: "Shop || FUNKOSHOP"
        },
        items: data
    });
}
//Este controlador muestra cada item en detalle
const itemView = async (req, res) => {
    const id = req.params.id;   
    const item = await intemsSerice.getItem(id);
    console.log('Se ejecuta desde shopController ==> itemview');
    const { data } = item;
    res.render('../views/shop/item', {
        view: {
            title: "Item|| FunkoShop"
        },
        item: data,
        enableGlide: true
    })
}
//contrlador para la ruta /shop/items:licence del landingpage
const getIlicence = async (req, res) => {
    const licence  = req.query.licence;
    const items = await intemsSerice.getAllItemsCollection(licence);
    console.log('Se ejecuta desde shopController ==> getIlicence');
    const { data } = items
    res.render('../views/shop/shop', {
        view: {
            title: "Licence || FunkoShop"
        },
        items: data
    })
}



const getItem = async (req, res) => {
    console.log('Se ejecuta desde shopController ==> getItem');
    res.render('../views/shop/cart',  {
        view: {
            title: "Cart|| FunkoShop"
        },
    });
}


//Busca el producot por nombre
const productName = async (req, res) => {
    const name = req.query.product_name;
    const item = await intemsSerice.getProductName(name)
    console.log(item);
    
    console.log('Se ejecuta desde shopController ==> productName');
    const { data } = item;

res.render('../views/shop/item', {
    view: {
        title: "Item|| FunkoShop"
    },
    item: data,
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