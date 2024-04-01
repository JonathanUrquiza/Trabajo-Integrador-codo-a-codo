const pc = require('picocolors')
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
        console.error(pc.red('hubo un error', error))
    } else {
        console.info(pc.blue('conexion exitosa'));
        connection.release();
    }
})
module.exports = {
    conn: pool.promise()
}
/* Solo falta seguir con las conexiones a la DB! */