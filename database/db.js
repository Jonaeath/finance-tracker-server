const mongoose = require("mongoose");
require("dotenv").config();

const mongoDBuri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASSWD}@cluster0.pg0dj0q.mongodb.net/finance-tracker`;

const mongodb = async () => {
  await mongoose
    .connect(mongoDBuri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = mongodb();