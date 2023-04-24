const mongoose = require("mongoose");
const dev = require("./INDEX.JS");

const connectDB = async () => {
  try {
    await mongoose.connect(dev.db.url);
    console.log("MONGO connected");
  } catch (error) {
    console.log(error);
    console.log("MONGO IS FUCKED");
  }
};
module.exports = connectDB;
