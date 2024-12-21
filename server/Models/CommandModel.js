const mongoose = require('mongoose');

// Import the User model to create the reference

const CommandSchema = new mongoose.Schema({
    Command: { type: String, },
    Role: { type: String, default: 'author' },
    // Reference to the User model
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Post: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },

    
    
},{
    timestamps:true
});

const CommandModel = mongoose.model('Command', CommandSchema);
module.exports = CommandModel;
