/* Aca se hacen todas las consultas a la DATABSE */

const { conn } = require('../config/conn.js');

const getAll = async () => {
    const [rows] = await conn.query('select * from infofunkos.product;');
    return rows;
    /* Tambien se puede hacer con filas y contenido */
    //formato no legible que requiere ser parseado
    /* 
    const [rows, fields] = await conn.query('select * from infofunkos.product;');
    return {rows, fields}
 */
}
const getOne = async (params) => {
    const [ rows ] = await conn.query('select * from infofunkos.product WHERE ?',params);
    return {rows}
}




module.exports = {
    getAll,
    getOne
}