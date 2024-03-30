const { conn } = require('../config/conn.js')


const createTable = async (table) => {
    try {
        const [rows] = await conn.query(`create table ${table}`);
        const response = {
            isError: false,
            data: rows
        }
        return response        
    }catch (e) {
        const error = {
            isError: true,
            message: `No se pudo crear la tabla de datos debido a ${e}`
        }
        return error
    }finally {
        conn.releaseConnection();
    }
}