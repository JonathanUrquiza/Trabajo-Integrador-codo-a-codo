const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})
pool.getConnection((error, connection) => {
    if (error) {
        console.error('hubo un error', error)
    } else {
        const rows = connection.query('SHOW DATABASE;');
        console.log('conexion exitosa', rows);
        connection.release();
    }


})

module.exports = {
    conn: pool.promise()
}

/* Solo falta seguir con las conexiones a la DB! */