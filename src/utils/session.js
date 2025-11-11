const session = require('cookie-session');
require('dotenv').config();

function initSession() {
    return session({
        secret: process.env.SESSION_SECRET || 'funkoshop_secret_key',
        saveUninitialized: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 horas
    });
}

module.exports = {
    initSession
};