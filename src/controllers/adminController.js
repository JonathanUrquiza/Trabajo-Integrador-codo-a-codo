const itemsService = require('../service/itemsServices');
const licencesSerice = require('../service/licenceService');


const adminView = async (req, res) => {
   
    const { data } = await itemsService.getAllItems();
    res.render('admin/admin', {
        view:{
            title: 'List of product || Admin FunskoShop'
        },
        items: data
    })
};

const editView = async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await itemsService.getAllItems();//Revisar estas consultas!
    const { data: licences } = await itemsService.getAllItemsCollection();
    const { data } = await itemsService.getItem(id);
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
    await itemsService.edit(item, id);
    res.redirect('/admin/edit');
}
const createView = async (req, res) => {
    const { data: categories } = await itemsService.getAllItems();
    const { data: licences } = await licencesSerice.getAllItemsLicence();
    console.log(licences);
    console.log('espacio');
    res.render('admin/create', {
        view: {
            title: 'Create || FunkoShop'
        },
        categories,
        licences
    });
};


const createItem = async (req, res) => {
    const item = req.body;
    const result = await itemsService.create(item);
    res.send(result)
}
    




const bulkCreate = async (req, res) => {
    const items = req.body;
    const result = await itemsService.create(items.map(el => Object.values(el)));
    res.send(result) 
}
const deleteItem = async (req, res) => {
    const id = req.params.id;
    await itemsService.delete(id);
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