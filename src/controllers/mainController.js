const path = require('path');
const router = require('../routes/shopRoutes');

const getIndex = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
}
const getAbaut = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/pages/contact.html'));
}
module.exports = {
    getIndex,
    getAbaut
}