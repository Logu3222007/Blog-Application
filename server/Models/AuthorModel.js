const mongoose = require('mongoose');

// Import the User model to create the reference

const AuthorSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Content: { type: String, required: true },
    Published: { type: String, default: Date.now },
    Role: { type: String, default: 'author' },
    // Reference to the User model
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
    
},{
    timestamps:true
});

const AuthorModel = mongoose.model('Author', AuthorSchema);
module.exports = AuthorModel;
