//external import
const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL, DB_OPTIONS) => {
  try {
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log(DB_OPTIONS.dbName + " DB Connected Successfully...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
