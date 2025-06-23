const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    prepTime: { type: String },
    serves: { type: String },
    isVegetarian: { type: Boolean, default: false },
    allergens: [{ type: String }],
    ingredients: [{ type: String }],
    calories: { type: Number },
    protein: { type: String },
    carbs: { type: String },
    fat: { type: String },
    imageUrl: { type: String },
    status: { type: String, default: "Available" },
    reason: { type: String },
    rating: { type: Number, default: 4.9 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MenuItem", MenuItemSchema);
