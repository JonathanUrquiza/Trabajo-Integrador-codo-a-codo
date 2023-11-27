const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'infoFunkos',
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
        console.log('conexion ecitosa', rows);
        connection.release();
    }


})

module.exports = {
    conn: pool.promise()
}

/* Solo falta seguir con las conexiones a la DB! */