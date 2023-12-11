const express = require('express');
const router = express.Router();
const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');
const {
    loginView,
    loginPost,
    registerPost,
    registerView,
    logoutUser
} = require('../controllers/authController.js');



const loginValidation = [
    body('email')
    .isEmail()
    .withMessage('Es necesario ingresar un correo válido'),
    body('password')
    .isLength({min:8})
    .isAlphanumeric()
    .withMessage('La contraseña debe tener al menos 8 caracteres y contene letras y números')
];



//Falatan desarrollar todos
router.get('/login', loginView);
router.post('/login', loginValidation, loginPost);
router.get('/register', registerView);
router.post('/register', registerPost);
router.get('/logout', logoutUser)
module.exports = router;