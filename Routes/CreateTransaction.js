const express = require("express");
const router = express.Router();
const transaction = require("../models/transactionSchema");


router.post("/transactions", async (req, res) => {
  const { name, income, category, amount } = req.body;  
  try {
    // Create new transaction object
    const newTransaction = new transaction({
      name,
      income,
      expense:"How do you allocate your income for expenses?",
      category,
      amount
    });

    // Save transaction to database
    await newTransaction.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;