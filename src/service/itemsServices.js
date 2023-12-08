const ItemModel = require('../models/itemModel');

const getAllItems = async () => {
  return await ItemModel.getAll();
}

const getAllItemsCollection = async (collection) => {
    return await ItemModel.getOne({collection: collection});
};

const getItem = async (id) => {
  return await ItemModel.getOne({product_id: id});
}
const getProductName = async(name) => {
  return await ItemModel.getName({product_name: name})
}
const createItem = async (item, files) => {
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,//Crear esta columna
    sku: item.sku,
    dues: item.dues,
    image_front: '/'+files[0].filename,
    image_back: '/'+files[1].filename,
    licence_id: item.collection,//Crear esta tabla
    category_id: item.category//crear esta tabla
  }
  return await ItemModel.create([Object.values(itemSchema)]);
}

const editItem = async (item, id) => {
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    image_front: '/imagen_front',
    image_back: '/imagen_front',
    licence_id: item.collection,
    category_id: item.category
  }

  return await ItemModel.edit(itemSchema, {product_id: id});
}

const deleteItem = async (id) => {
  return await ItemModel.delete({product_id: id});
}

module.exports = {
  getAllItems,
  getItem,
  getAllItemsCollection,
  getProductName,
  createItem,
  deleteItem,
  editItem
}