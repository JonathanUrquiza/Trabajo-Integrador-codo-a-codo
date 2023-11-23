const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');


/* middleware */
/* El middleware sirve para convertir la información a un formato que el servidor puede entender */
app.use(express.static('public'));//define la carpeta publica de estáticos.
app.use(express.urlencoded())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 
app.use(express.json())//para evitar tenes que formatear los tipos de datos para que el servidor pueda leerlos 

/* Rutas */
app.use('/', shopRoutes);
app.use('/', adminRoutes);



/* middleware */

app.use((req,res) => {
    res.status(404).sendFile(__dirname + '/public/pages/error/error.html')
})

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`))