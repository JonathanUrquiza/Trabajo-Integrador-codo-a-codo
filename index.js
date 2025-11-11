const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const errorHandler = require('./src/utils/errorhandler.js');
const PORT = process.env.PORT || 3008;
const { initSession } = require('./src/utils/session.js');
const { isLogged } = require('./src/middlewares/login.js');
const picocolors = require('picocolors');





// Routes
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
const TestRoutes = require('./src/routes/TestRoutes.js');

// Middleware
app.use(express.static(path.resolve(__dirname, 'public')));

// Session
app.use(initSession());
app.use((req, res, next) => {
  res.locals.isLogged = req.session.isLogged;
  next();
});

// Template engine - EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

// Body parser & CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.disable('x-powered-by');




// Routes
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/test', TestRoutes);

// Error handler - Must be last
app.use(errorHandler[404]);

app.listen(PORT, () => {
    console.log(picocolors.bold(picocolors.green(` 🚀 Servidor corriendo en: http://localhost:${PORT} `)));
});