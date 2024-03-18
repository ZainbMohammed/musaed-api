const mongoose = require('mongoose');
// require('dotenv').config();


const dbConnection = async () => {
    try {
      // Connect to the MongoDB cluster
      await mongoose.connect('mongodb+srv://asma:asma1010@cluster0.ca5xjkp.mongodb.net/musaedDB?retryWrites=true&w=majority&appName=Cluster0');
      console.log("Mongoose is connected successful");
    } catch (e) {
      // connection faield
      console.log("could not connect");
    }
}

module.exports = dbConnection;