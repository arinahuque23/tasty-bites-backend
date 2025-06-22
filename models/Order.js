const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  customer: { type: String, required: true },
  items: { type: String, required: true },
  total: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Preparing", "Ready", "Delivered", "Cancelled"],
    default: "Pending",
  },
  time: { type: String },
  date: { type: String },
  phone: { type: String, required: true },
  address: { type: String },
  type: {
    type: String,
    enum: ["Dine-in", "Takeaway", "Delivery"],
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
