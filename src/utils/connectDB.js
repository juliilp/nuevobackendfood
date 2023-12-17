const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT);
    console.log("Db conectada");
  } catch (error) {
    console.log("connectDB.js error: " + error);
  }
}

module.exports = connectDB;
