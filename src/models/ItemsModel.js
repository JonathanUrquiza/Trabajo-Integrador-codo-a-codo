
const db = require('../config/db.js');
const { DataTypes } = require('sequelize');

const ItemsModel = db.define('products', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull:false
  },
  product_name : {
      type: DataTypes.STRING,
      allowNull:false
    },
    product_description : {
        type: DataTypes.STRING,
        allowNull:false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'create_time',
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'update_time',
        defaultValue: DataTypes.NOW
    },
    deletedAt: {
        type: DataTypes.DATE,
        field: 'delete_time',
        defaultValue: DataTypes.NOW
    }
    
}, {
    //paranoid: true, // elimina de manera logica los datos del registro pero no realmente.
    //freezeTableName: true //no modifica el nombre de la tabla a plural
})


module.exports = ItemsModel