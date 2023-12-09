const isLogged = (req, res, next) => {
    if (req.session.isLoggued) {
        return next();
    }
    res.status(401).redirect('admin');
}
module.exports = {
    isLogged
}