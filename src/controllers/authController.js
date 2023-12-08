const loginView = (req, res) => {
    res.send('Auth route')
}
const loginPost = (req, res ) => {
    res.send('login Post')
}
const registerView = (req, res) => {
    res.send('register get')
}
const registerPost = (req, res) => {
    res.send('registerPost')
}

module.exports = {
    loginPost,
    loginView,
    registerPost,
    registerView
}