const db = require('../config/db.js')
const { DataTypes } = require("sequelize");

const BlogModel = db.define('Blog', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });



module.exports = BlogModel


