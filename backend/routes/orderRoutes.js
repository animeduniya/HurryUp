const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Place Order
router.post("/place", async (req, res) => {
  try {
    const { userId, products, totalPrice } = req.body;
    const order = new Order({ user: userId, products, totalPrice });
    await order.save();
    res.status(201).json({ message: "Order Placed Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get User Orders
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate("products");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
