const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFile.js')
const { isLogged } = require('../middlewares/login.js')
const {
    adminView,
    createView,
    createItem,
    editView,
    editpost,
    deleteItem
} = require('../controllers/adminController.js')

router.get('/', adminView)
router.get('/create',isLogged, createView)
router.post('/create',isLogged, createItem)//Aca va el uploadFiles
router.get('/edit/:id', isLogged, editView)
router.put('/edit/:id', isLogged, editpost)
router.delete('/delete/:id', isLogged, deleteItem)

module.exports = router;