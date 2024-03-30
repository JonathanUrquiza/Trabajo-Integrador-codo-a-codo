const { conn } = require('../config/conn');

const getAll = async () => {
    //Este codigo es para usar php myadmin
    /* try {
        const [rows] = await conn.query('SELECT * FROM funkotest_infofunkos.product;');
        const response = {
            isError : false,
            data: rows
        }
        return response
    }catch (e) {
        const error = {
            isError : true,
            message:`No pudimos recuperar los datos ${e}`
        }
        return error
    }finally {
        conn.releaseConnection();
    } */
    //Este codigo es paa usar la base de datos local
    try {
        const [rows] = await conn.query('SELECT * FROM licence;');
        const response = {
            isError : false,
            data:rows
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos recuperar los datos ${e}.`
        };
        return error
    } finally {
        await conn.releaseConnection();
    };
};

module.exports = {
    getAll
};