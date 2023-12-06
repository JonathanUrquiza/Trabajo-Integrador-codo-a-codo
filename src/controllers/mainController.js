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
const contactView = (req, res) => {
    res.render('contact', {
        view : {
            title : "Contacto || FUNKOSHOP"
        }
    });
};
const aboutView = (req, res) => {
    res.render('about', {
        view:{ 
            title: "Acerca de mí || FunkoShop"
        }
    })
};

const faqsView = (req, res) => {
    res.render('faqs', {
        view: {
            title: "FAQS || FunkoShop"
        }
    })
}
module.exports = {
    contactView,
    homeView,
    aboutView,
    faqsView
}