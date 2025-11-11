const licenceService = require('../service/licenceService.js')

const homeView = async (_req, res) => {
    const licences = await licenceService.getAllItemsLicence(); 

    res.render('home' , {
        view :{
                title: "Home || FUNKOSHOP"
        },
        collections: licences.data,
        enableGlide : true
    });
}
const contactView = (_req, res) => {
    res.render('contact', {
        view : {
            title : "Contacto || FUNKOSHOP"
        }
    });
};
const aboutView = (_req, res) => {
    res.render('about', {
        view:{ 
            title: "Acerca de mí || FunkoShop"
        }
    })
};

const faqsView = (_req, res) => {

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