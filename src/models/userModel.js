
const { conn } = require('../config/conn.js');

const createUser = async (params) => {
    try {
        const [ rows ] = await conn.body('INSERT INTO user (name, lastname, email, password) VALUES ?', [params]);
        const response = {
            isError:false,
            data:rows
        };
        return response;

    }catch (e) {
        const error = {
            isError:true,
            message: 'No pudimos enviar los datos.'
        }
        return error
    }finally {
        conn.releaseConnection()
    }
};
module.exports = {
    createUser
}