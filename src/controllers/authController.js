const registerService = require('../service/registerService.js')

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
    req.session.isLogged = emailValidation && passwordValidation ? true : false;

    if (req.session.isLogged) {
        
       return res.redirect('/admin');
    }
    return res.status(401).send('credenciales inválidas')
}
const registerView = (req, res) => {
    console.log( 'auth -> regiterView');
  
    res.render('../views/admin/register', {
        view : {
            title: 'Register || FunkoShop'
        }
    })
}
const registerPost = async (req, res) => {
    const data = req.body;
    const result = await registerService.createUser(Object.values(data))
    res.send(result)

    
    
        
}

const logoutUser = (req, res) => {
    req.session.isLogged = false;
    res.send('sesion finalizada')
}

module.exports = {
    loginPost,
    loginView,
    registerPost,
    registerView,
    logoutUser
}