const itemsSerice = require('../service/itemsServices');

const adminView = async (req, res) => {
   
    const { data } = await itemsSerice.getAllItems();
    res.render('admin/admin', {
        view:{
            title: 'List of product || Admin FunskoShop'
        },
        items: data
    })
};

const editView = async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await itemsSerice.getAllItems();//Revisar estas consultas!
    const { data: licences } = await itemsSerice.getAllItemsCollection();
    const { data } = await itemsSerice.getItem(id);
    console.log(categories, licences);
    res.render('admin/edit', {
        view: {
            title:`Edit Product #${id} | adming FunkoShop`
        },
        item:data[0],
        categories,
        licences
    });
};
const editpost = async (req, res) => {
    const id = req.params.id;
    const item = req.body;
    await itemsSerice.edit(item, id);
    res.redirect('/admin/edit');
}
const createView = async (req, res) => {
    const { data: categories } = await itemsSerice.getAllItems();
    const { data: licences } = await itemsSerice.getAllItemsCollection();
    res.render('admin/create', {
        view: {
            title: 'Create Product || Admin FunkoShop'
        },
        categories,
        licences
    });
};
const createItem = async (req, res) => {
    const item = req.body;
    const result = await itemsSerice.create(Object.values(item));
    res.send(result)
}
const bulkCreate = async (req, res) => {
    const items = req.body;
    const result = await itemsSerice.create(items.map(el => Object.values(el)));
    res.send(result) 
}
const deleteItem = async (req, res) => {
    const id = req.params.id;
    await itemsSerice.delete(id);
    res.redirect('/admin');
}

module.exports = {
    adminView,
    createView,
    editView,
    createItem,
    editpost,
    deleteItem,
    bulkCreate
}