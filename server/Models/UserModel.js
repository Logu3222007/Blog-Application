const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Role: { type: String, default: 'user' } 
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
