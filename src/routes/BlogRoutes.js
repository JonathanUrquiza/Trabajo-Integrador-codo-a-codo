const express = require('express');
const router = express.Router();
const  {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
 } = require('../controllers/BlogController.js')

router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

module.exports = router;