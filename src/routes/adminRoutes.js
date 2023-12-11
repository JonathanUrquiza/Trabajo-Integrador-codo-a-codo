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


router.use(isLogged);
router.get('/', adminView)
router.get('/create', createView)
router.post('/create', createItem)//Aca va el uploadFiles
router.get('/edit/:id', editView)
router.put('/edit/:id', editpost)
router.delete('/delete/:id', deleteItem)

module.exports = router;