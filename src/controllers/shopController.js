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
        item: data[0],
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

//Cotrolador para la ruta /shop

/* //Controlador para la ruta /shop/item/show
const getItems = async (req, res) => {
    const items = await intemsSerice.getAllItems();
    res.send(items);
} */


//Controlador para la ruta /shop/items/:id
/* const getId = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const item = await getOne(id);//Desde aca se cambia el tipo de consulta
    res.send(item);
} */

//contrlador para la ruta /shop/items
/* const getIlicence = async (req, res) => {
     const licence  = req.params.licence;
    const item = await getOne({product_licence : licence});
    res.send(item);
} */

//Controlador para la ruta /shop/items/:id/add
/* const postAdd = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/admin/create.html'))
}
const getCart = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/shop/cart.html'))

} */

module.exports = {
    //getItems,
    itemView,
    //getIlicence,
    //postAdd,
    //getCart,
    shopView,
    getItem
}