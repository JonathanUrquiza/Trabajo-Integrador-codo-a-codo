const { conn } = require('../config/conn.js');

const getAllCategory = async (params) => {
    try {
        const [ rows ] = await conn.query('SELECT * FROM category WHERE ?', params);
        return {
            isError: false,
            data: rows
        };
    } catch (e) {
        return {
            isError: true,
            message: `No pudimos recuperar las categorías: ${e}`
        };
    }
};

module.exports = {
    getAllCategory
}