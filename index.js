const express = require('express');//lama a express
const app = express();//accede al metodo de express
const cors = require('cors')
const db = require('./src/config/db.js')
require('dotenv').config();//llama a la configuración de la base de datos
const path = require('path');
const errorHandler = require('./src/utils/errorhandler.js');//metod para manejar la ruta inexistente.
const { auth } = require('./src/middlewares/auth.js');//maneja la autorización de los datos.
const PORT = process.env.PORT || 3008;
const { initSession } = require('./src/utils/session.js');
const { isLogged } = require('./src/middlewares/login.js');
const picocolors = require('picocolors');





/* Router */
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
const blogRoutes = require('./src/routes/BlogRoutes.js');
const TestRoutes = require('./src/routes/TestRoutes.js');
/* middleware */
/* El middleware sirve para convertir la información a un formato que el servidor puede entender */
app.use(express.static(path.resolve(__dirname, 'public')));//define la carpeta publica de estáticos.


//Sesion de usuario
app.use(initSession())//Esta sesion crea una coockie con la informacion del cliente
app.use((req, res, next) => {
  res.locals.isLogged = req.session.isLogged;//Este middleware a nivel app, y caca vez qeu el usuario haga un peticion, le asigna a locals lo que traiga de la session, retorna true o false
  next();
});



//Configuración del template engine - ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'./src/views'));



app.use(express.urlencoded())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 
app.use(express.json())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 
app.use(cors())
app.disable('x-powered-by');// Elimina las cabeceras de datos, evitando problemas de seguridad




console.log(isLogged);
/* Rutas */

app.use('/', auth, mainRoutes);//Falta hacerlo con sequelize
app.use('/blogs', blogRoutes);//Este modelo permite ingresar comentarios de los compradores en el producto.
app.use('/shop', auth, shopRoutes);//Falta hacerlo con sequelize
app.use('/admin', auth, adminRoutes);//Falta hacerlo con sequelize
app.use('/auth', auth, authRoutes);//Falta hacerlo con sequelize
app.use('/test', TestRoutes)

try {
  db.authenticate()
  console.log(picocolors.green(' Conexion exitosa a DB '));
} catch (error) {
  console.error(picocolors.red(` el error de conexión es: ${error} `));
}

/* middleware, server error, nos permite controlar el flujo delos datos */

app.use(errorHandler[404]);

app.listen(PORT, () => console.log(picocolors.bold(picocolors.green(` 🚀 Servidor corriendo en: http://localhost:${PORT} `))))