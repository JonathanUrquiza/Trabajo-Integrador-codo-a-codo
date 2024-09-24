/* Aca se hacen todas las consultas a la DATABSE */
const { conn } = require('../config/conn.js');


//El siguiente codigo trae todos los banner de las distintas licencias
const getAll = async () => {
  try {
    const [rows] = await conn.query('SELECT * FROM product;');
    
    const response = {
      isError: false,
      data: rows
    };
    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos ${e}`
    };
    return error
  } finally {
    conn.releaseConnection();
    console.log('ultiliza itemModel.getAll');
  };
}

//Trae el item segun el id pasado por params
const getOne = async (params) => {
  try {
    const [rows] = await conn.query('SELECT * FROM product WHERE ?', params);
    
    const response = {
      isError: false,
      data: rows
    };
    return response
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos.`
    };
    return error
  } finally {
    conn.releaseConnection()
    console.log('ultiliza itemModel.getOne');
  }
}


const getName = async (params) => {
  try {
    const [rows] = await conn.query('SELECT * FROM product WHERE ?', params);
    const response = {
      isError: false,
      data: rows
    };
    return response
  } catch (e) {
    const error = {
      isError: false,
      message: `No pudimos realizar la consulta.`
    };
    return error
  } finally {
    conn.releaseConnection()
    console.log('ultiliza itemModel.getName');
  };
}






const create = async (params) => {
  try {
    const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);


    const response = {
      isError: false,
      data: rows
    };

    return response;
  }/*  catch (e) {
      const error = {
        isError: true,
        message: `No pudimos crear los valores seleccionados por: ${e}`
      };
  
      return error;
    } */ finally {
    conn.releaseConnection();
    console.log('ultiliza itemModel.Create');
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
    console.log('ultiliza itemModel.edit');  
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
    console.log('ultiliza itemModel.deleteOne');
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