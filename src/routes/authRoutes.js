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
        .isLength({ min: 8 })
        .isAlphanumeric()
        .withMessage('La contraseña debe tener al menos 8 caracteres y contener letras y números')
];

router.get('/login', loginView);
router.post('/login', loginValidation, validateInput, loginPost);
router.get('/register', registerView);
router.post('/register', registerPost);
router.get('/logout', logoutUser);
module.exports = router;