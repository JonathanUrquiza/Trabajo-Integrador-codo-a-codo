const useCredentials = {
    email: 'jonas.lokura@gmail.com',
    password: 'elloco123'
}


const loginView = (req, res) => {
    res.render('admin/login', {
        view: {
            title: 'Login | FunkoShop'
        }
    })
}

const loginPost = (req, res ) => {
    const {email, password} = req.body;
    const emailValidation = useCredentials.email == email;
    const passwordValidation = useCredentials.password == password;
    req.session.isLogged = emailValidation & passwordValidation ? true : false;
    if (req.session.isLogged) {
        return res.redirect('/admin');
    }
    return res.status(401).send('credenciales inválidas')
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