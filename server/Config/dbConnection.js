const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Blog-App')
            .then(() => { console.log("Mongodb is Connected!") })
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the process if the connection fails
    }
};
module.exports = { connectDB }