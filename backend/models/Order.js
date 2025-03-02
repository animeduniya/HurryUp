const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
