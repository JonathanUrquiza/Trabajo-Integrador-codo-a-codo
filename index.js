const express = require('express');//lama a express
const app = express();//accede al metodo de express
require('dotenv').config();//llama a la configuración de la base de datos
const path = require('path');
const errorHandler = require('./src/utils/errorhandler.js');//metod para manejar la ruta inexistente.
const { auth } = require('./src/middlewares/auth.js');//maneja la autorización de los datos.
const PORT = process.env.PORT || 3008;

/* Router */
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');//trae el modulo con la lógica del router


/* middleware */
/* El middleware sirve para convertir la información a un formato que el servidor puede entender */
app.use(express.static(path.resolve(__dirname,'public')));//define la carpeta publica de estáticos.

//Configuración del template engine - ejs
app.set('view engine', 'ejs');
app.set('views','./src/views');



app.use(express.urlencoded())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 
app.use(express.json())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 





/* Rutas */
app.use('/',auth, mainRoutes);
app.use('/shop', auth,shopRoutes);
app.use('/admin',auth, adminRoutes);



/* middleware, server error, nos permite controlar el flujo delos datos */

app.use(errorHandler[404]);     

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`))