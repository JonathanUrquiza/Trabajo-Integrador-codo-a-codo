const itemsModel = require('../models/ItemsModel.js')

const ShopItemController = async (req, res) => {
    try {
        const items = await itemsModel.findAll();
        res.json({
            success: true,
            data: {
                list : items
            }
        })
    } catch (error) {
        res.json({ message: error.message });   
    }
}
const OneItemController = async (req, res) => {
    try {
        const item = await itemsModel.findOne({
            where : {
                id : req.params.id
            }
        })
        res.json({
            success: true,
            data : {
                One: item
            }
        })
        
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = ShopItemController, OneItemController;