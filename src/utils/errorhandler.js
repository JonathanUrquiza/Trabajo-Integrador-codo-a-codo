const path = require('path')

module.exports = {
    404: (req, res, next) => {
        res.status(404).render('../views/error/404', {
            view: {
                title: "Error 404 || FunkoShop"
            },
        });
    },
    serverError: (req, res, next) => {
        res.status(500).send('Error interno del servidor');
    }
}