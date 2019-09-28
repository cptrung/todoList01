const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const AuthUserSchema = new mongoose.Schema({
    username:String,
    password:String,
});


const AuthUser = mongoose.model('auth_users',AuthUserSchema);
module.exports = AuthUser;
