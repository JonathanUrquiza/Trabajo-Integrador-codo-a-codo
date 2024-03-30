const BlogModel = require('../models/BlogModel.js');


/** métodos de CRUD */

// mostrar todos los registros
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll(); // Usar el método findAll del modelo BlogModel
        res.json(blogs);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// mostrar un solo registro
const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findOne({ where: { id: req.params.id } }); // Usar el método findOne para buscar un solo registro
        res.json(blog);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// crear un registro
const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body); // Usar el método create para crear un nuevo registro
        res.json({ message: 'Registro creado' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// actualizar un registro
const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, { where: { id: req.params.id } }); // Usar el método update para actualizar un registro
        res.json({ message: 'Registro actualizado' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// eliminar un registro
const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({ where: { id: req.params.id } }); // Usar el método destroy para eliminar un registro
        res.json({ message: 'Registro borrado' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
};