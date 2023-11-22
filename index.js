const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send(__dirname + './index.html')  
})


app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/pages/admin/admin.html')
})



app.get('/item', (req, res) => {
    res.sendFile(__dirname + '/public/pages/shop/item.html')
})

app.get('/cart', (req, res) => {

    res.sendFile(__dirname + '/public/pages/shop/cart.html')

})
 
app.get('/shop', (req, res) => {

    res.sendFile(__dirname + '/public/pages/shop/shop.html')
})


app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`))