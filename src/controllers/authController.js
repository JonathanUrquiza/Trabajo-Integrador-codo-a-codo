const registerService = require('../service/registerService.js')
const authService = require('../service/authService.js')

const loginView = (req, res) => {
    res.render('admin/login', {
        view: {
            title: 'Login | FunkoShop'
        }
    })
}

const loginPost = async (req, res) => {
    const { email, password } = req.body;
    
    // Autenticar usuario usando bcrypt
    const authResult = await authService.authenticateUser(email, password);

    if (authResult.isError) {
        return res.status(401).render('admin/login', {
            view: {
                title: 'Login | FunkoShop'
            },
            error: authResult.message
        });
    }

    // Login exitoso
    req.session.isLogged = true;
    req.session.user = authResult.data;

    return res.redirect('/admin');
}
const registerView = (req, res) => {
    res.render('../views/admin/register', {
        view : {
            title: 'Register || FunkoShop'
        }
    })
}
const registerPost = async (req, res) => {
    const data = req.body;
    const result = await registerService.createUser(data)
    
    if (result.isError) {
        return res.status(400).render('admin/register', {
            view: {
                title: 'Register || FunkoShop'
            },
            error: result.message
        });
    }

    // Registro exitoso - redirigir al login
    return res.redirect('/auth/login');
}

const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error al cerrar sesión');
        }
        res.redirect('/auth/login');
    });
}

module.exports = {
    loginPost,
    loginView,
    registerPost,
    registerView,
    logoutUser
}