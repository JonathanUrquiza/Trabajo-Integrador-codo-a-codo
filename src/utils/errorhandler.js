const path = require('path')


module.exports = {
    404 : (req, res, next) => {
        res.status(404).sendFile(path.resolve(__dirname,'../../public/pages/error/error.html'));
    },
    serverError : (req, res, next) => {
        res.status(500).send('El servior que traia la respuesta no funciona');
    }
}