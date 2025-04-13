const mongoose = require("mongoose");
require("dotenv").config()

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting database: ", error);
    process.exit(1);
  }
}

module.exports = connectDB;