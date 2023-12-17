const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/food");
    console.log("Db conectada");
  } catch (error) {
    console.log("connectDB.js error: " + error);
  }
}

module.exports = connectDB;
