const { serverError } =require('../utils/errorhandler.js')

module.exports = {
    auth : (req, res, next) => {
        if (false) {
            serverError(req, res);
        }
        next();
    }
}