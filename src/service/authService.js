const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const authenticateUser = async (email, password) => {
    try {
        // Buscar usuario por email
        const userResult = await userModel.getUserByEmail(email);
        
        if (userResult.isError) {
            return {
                isError: true,
                message: 'Error al buscar el usuario.'
            };
        }

        // Si no existe el usuario
        if (!userResult.data) {
            return {
                isError: true,
                message: 'Credenciales inválidas.'
            };
        }

        // Comparar contraseñas
        const isPasswordValid = await bcrypt.compare(password, userResult.data.password);

        if (!isPasswordValid) {
            return {
                isError: true,
                message: 'Credenciales inválidas.'
            };
        }

        // Autenticación exitosa - retornar datos del usuario sin la contraseña
        const { password: _, ...userWithoutPassword } = userResult.data;
        
        return {
            isError: false,
            message: 'Autenticación exitosa.',
            data: userWithoutPassword
        };

    } catch (error) {
        return {
            isError: true,
            message: 'Error durante la autenticación: ' + error.message
        };
    }
};

module.exports = {
    authenticateUser
};

