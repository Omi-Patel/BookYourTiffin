const mongoose = require("mongoose");
require('dotenv').config();

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully..!");
  } catch (error) {
    console.log("Connection Failed..!", error);
  }
};

module.exports = connectToMongo;
