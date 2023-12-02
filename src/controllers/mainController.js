const itemsSerice = require('../service/itemsServices.js')



const homeView = async (req, res) => {
    const starwars = await itemsSerice.getAllItemsCollection("starwars");
    const harry = await itemsSerice.getAllItemsCollection("harrypotter");
    const pokemon = await itemsSerice.getAllItemsCollection("pokemon");

    console.log(starwars);
    console.log(harry);
    console.log(pokemon);

    res.render('home' , {
        view :{
                title: "Home || FUNKOSHOP"
        },
        collection1: starwars.data,
        collections2: harry.data,
        collections3 : pokemon.data,
        enableGlide : true
    });
} 

const getAbaut = (req, res) => {
    res.render('abaut', {
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