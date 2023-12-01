


const homeView = /* async */ (req, res) => {
    //const allItems = await licenceService.getAllItemsLicence();
    res.render('../views/home' , {
        view :{
            title: "Home || FUNKOSHOP"
        },
        /* collections : allItems.data,
        enableGlide : true */
    });
} 

const getAbaut = (req, res) => {
    res.render('../views/abaut', {
        view: {
            title: "Abaut || FUNKOSHOP"
        }
    });
}
const postLogin = (req, res) => {
    res.render('login', {
        view : {
            title : "Login || FUNKOSHOP"
        }
    });
};
const postRegister = (req, res) => {
    res.render('register', {
        view : {
            title : "Register || FUNKOSHOP"
        }
    })
}
module.exports = {
    getAbaut,
    postLogin,
    postRegister,
    homeView
}