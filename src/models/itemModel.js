/* Aca se hacen todas las consultas a la DATABSE */

const { conn } = require('../config/conn.js');


const getAll = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM infofunkos.product;');
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
    }
}
const getName = async (params) => {
    try {
        const [rows] = await conn.query('SELECT * FROM product WHERE ?', params);
        const response = {
            isError : false,
            data: rows
        }
        return response
    }catch (e){
        const error = {
            isError: false,
            message: `No pudimos realizar la consulta.`
        }
        return error
    }finally{
        conn.releaseConnection()
    }
}

const getOne = async (params) => {
    try{
        const [rows] = await conn.query('select * from infofunkos.product WHERE ?', params);
        const response = {
            isError : false,
            data:rows
        };
        return response
    }catch (e){
        const error = {
            isError: true,
            message : `No pudimos recuperar los datos.`
        };
        return error
    }finally{
        conn.releaseConnection()
    }
}


module.exports = {
    getAll,
    getOne,
    getName
}