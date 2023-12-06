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
const editView = async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await itemsSerice.getAllItems();
    const { data: licences } = await itemsSerice.getAllItemsCollection();
    const { data } = await itemsSerice.getItem(id);
    res.render('admin/edit', {
        view: {
            title:`Edit Product #${id} | adming FunkoShop`
        },
        item:data[0],
        categories,
        licences
    });
};

module.exports = {
    adminView,
    createView,
    editView
}