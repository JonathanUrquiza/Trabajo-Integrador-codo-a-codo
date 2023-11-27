const express = require('express');
const app = express();

require('dotenv').config();
const errorHandler = require('./src/utils/errorhandler.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const { auth } = require('./src/middlewares/auth.js')
const PORT = process.env.PORT || 3008;


/* middleware */
/* El middleware sirve para convertir la información a un formato que el servidor puede entender */
app.use(express.static('public'));//define la carpeta publica de estáticos.
app.use(express.urlencoded())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 
app.use(express.json())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 




/* Rutas */
app.use('/', auth,shopRoutes);
app.use('/',auth, adminRoutes);



/* middleware, server error, nos permite controlar el flujo delos datos */

app.use(errorHandler[404])      

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`))