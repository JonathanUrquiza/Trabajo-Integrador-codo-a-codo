const { conn } = require('../config/conn.js');

const getAllCategoty = async (params) => {
    const [ rows ] = await conn.query('SELECT * FROM product WHERE ?', params)
    return rows;
};

module.exports = {
    getAllCategoty
}