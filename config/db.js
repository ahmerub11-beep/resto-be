const mongoose = require("mongoose");

const { MONGODB_USERNAME, MONGO_PASSWORD } = process.env;

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGO_PASSWORD}@cluster0.obizneg.mongodb.net/?appName=Cluster0`)
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = { connectDB }; 

// mongodb+srv://<db_username>:YsXAnxv08HiZPQu2@cluster0.obizneg.mongodb.net/?appName=Cluster0