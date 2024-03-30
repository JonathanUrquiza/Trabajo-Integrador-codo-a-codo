const licenceModel = require('../models/licenceModel.js');

const getAllItemsLicence = async () => {
    return await licenceModel.getAll();
};
module.exports = {
    getAllItemsLicence
};
