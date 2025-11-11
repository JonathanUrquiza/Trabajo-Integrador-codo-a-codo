const userModel = require('../models/userModel')
const bcrypt = require('bcrypt');

const createUser = async (user) => {
    try {
        // Hashear la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);

        const userSchema = {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: hashedPassword
        }
        return await userModel.createUser([Object.values(userSchema)]);
    } catch (error) {
        return {
            isError: true,
            message: 'Error al crear el usuario: ' + error.message
        }
    }
}

module.exports = {
    createUser,
}