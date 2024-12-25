const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://logu2007dev:Logu%402007@cluster0.bga3r.mongodb.net/Blog-Application', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,  // Timeout for server selection
            socketTimeoutMS: 45000,         // Socket timeout (higher for slow networks)
        });
        console.log("MongoDB is Connected!");
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = { connectDB };
