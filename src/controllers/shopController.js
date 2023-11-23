const fs = require('fs');

/* Fatla soliucionar la logiaca del cotrolador */

const getShop = (req, res) => {
    res.sendFile('C:/Users/Jonathan/Desktop/Integrador_nodeJS/public/pages/shop/shop.html')
}
const getItems = (req, res) => {
    
const Funkos = fs.readFileSync('/data/item.json');//trae el array de items en binario
const infoFunkos = JSON.parse(Funkos);//parsea de binario a array de obj.
    const { licence } = req.query;//destructura el objeto
   const itemFiltered = infoFunkos.filter(el => el.collection == licence);
   if (itemFiltered.length == 0) {
       res.send(infoFunkos)
    }
    res.send(itemFiltered)
}


module.exports = {
    getItems,
    getShop
}