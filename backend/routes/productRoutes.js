const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Add a Product (Farmer Only)
router.post("/add", async (req, res) => {
  try {
    const { name, price, imageUrl, farmerId } = req.body;
    const product = new Product({ name, price, imageUrl, farmer: farmerId });
    await product.save();
    res.status(201).json({ message: "Product Added Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("farmer", "name");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
