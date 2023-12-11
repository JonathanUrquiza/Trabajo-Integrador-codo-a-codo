/* Aca se hacen todas las consultas a la DATABSE */

const { conn } = require('../config/conn.js');


const getAll = async () => {
    try {
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
        const [rows] = await conn.query('select * from funkotest_infofunkos.product WHERE ?', params);
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
const create = async (params) => {
    try {
      const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);
  
      const response = {
        isError: false,
        data: rows
      };
  
      return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos crear los valores seleccionados por: ${e}`
      };
  
      return error;
    } finally {
      conn.releaseConnection();
    }
  };
  const edit = async (params, id) => {
    try {
      const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
      const response = {
        isError: false,
        message: `El item fue modificado exitosamente.`,
        status: rows
      };
  
      return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos modificar el item seleccionado, error: ${e}`
      };
  
      return error;
    } finally {
      await conn.releaseConnection();
    }
  };
  
  const deleteOne = async (params) => {
    try {
      const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
      const response = {
        isError: false,
        data: rows,
        message: `Item borrado exitosamente.`
      };
  
      return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos insertar los valores seleccionados por: ${e}`
      };
  
      return error;
    } finally {
      await conn.releaseConnection();
    }
  }
  

module.exports = {
    getAll,
    getOne,
    getName,
    create,
    deleteOne,
    edit
}