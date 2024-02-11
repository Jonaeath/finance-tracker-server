const mongoose = require("mongoose");

const { Schema } = mongoose;

const transactionSchema = new Schema({
    name: String,
    income: Number,
    expense:String,
    category: String,
    amount: Number
  });
  
  module.exports = mongoose.model('Transaction', transactionSchema);
   

