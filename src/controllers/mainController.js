const itemsSerice = require('../service/itemsServices.js')



const homeView = async (req, res) => {
    /* Fue necesario hardcodear estos datos, debido a que no se explico como estructurar una base de datos correctamente,
    para simular la tabla de licencie y que traiga los finkos con determinada licence
     */
    const starwars = await itemsSerice.getAllItemsCollection("starwars");
    const harry = await itemsSerice.getAllItemsCollection("harrypotter");
    const pokemon = await itemsSerice.getAllItemsCollection("pokemon");
    
    

    res.render('home' , {
        view :{
                title: "Home || FUNKOSHOP"
        },
        collections1: starwars.data,
        collections2: harry.data,
        collections3 : pokemon.data,
        enableGlide : true
    });
    
   
} 

const AboutView = (req, res) => {
    res.render('abaut', {
        view: {
            title: "About || FUNKOSHOP"
        }
    });
}
const contactView = (req, res) => {
    res.render('contact', {
        view : {
            title : "Login || FUNKOSHOP"
        }
    });
};
const faqsViews = (req, res) => {
    res.render('register', {
        view : {
            title : "Register || FUNKOSHOP"
        }
    })
}
module.exports = {
    AboutView,
    contactView,
    faqsViews,
    homeView
}