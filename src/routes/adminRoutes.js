const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles.js')
const adminCotroller = require('../controllers/adminController.js')

router.get('/',adminCotroller.adminView)
router.get('/create',adminCotroller.createView)
router.post('/create', adminCotroller.createItem)//falta desarrollar
router.get('/edit/:id', adminCotroller.editView)
router.post('/edit/:id', adminCotroller.editpost)//falta desarrollar
router.delete('/delete/:id',adminCotroller.deleteItem)//falta desarrollar

module.exports = router;