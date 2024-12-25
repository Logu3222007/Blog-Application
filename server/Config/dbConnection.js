const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect('mongodb+srv://logu2007dev:Logu%402007@cluster0.bga3r.mongodb.net/Blog-Application', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, // Optional: Increase timeout to 30 seconds
        });
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = { connectDB };
