const { conn } = require('../config/conn.js');

const createUser = async (params) => {
    try {
        const [ rows ] = await conn.query('INSERT INTO user (name, lastname, email, password) VALUES ?', [params]);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: 'No pudimos crear el usuario.'
        }
        return error
    }
};

const getUserByEmail = async (email) => {
    try {
        const [ rows ] = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
        const response = {
            isError: false,
            data: rows[0] || null
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: 'Error al buscar el usuario.'
        }
        return error
    }
};

module.exports = {
    createUser,
    getUserByEmail
}