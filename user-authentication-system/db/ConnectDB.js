const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // This is config the Dotenv

MongoDB_URI = process.env.MongoDBURI; // this is for get the URL for connection of MongoDB

// Here I use Async and Await for asynchronous operations and aslo Try and Catch
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Database Connected");
  } catch (error) {
    console.error(`Error :${error}`);
  }
};

module.exports = connectDB;
