const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

//Falatan desarrollar todos
router.get('/login', authController.loginView);
router.post('/login',authController.loginPost);
router.get('/register', authController.registerView);
router.post('/register', authController.registerPost);

module.exports = router;