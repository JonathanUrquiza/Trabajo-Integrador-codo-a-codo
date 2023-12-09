const path = require('path')


module.exports = {
    404: (req, res, next) => {
        res.status(404).render('../views/error/404', {
            view: {
                title: "Error || FunkoShop"
            },
        });
    },
    serverError: (req, res, next) => {
        res.status(500).send('El servior que traia la respuesta no funciona');
    }
}