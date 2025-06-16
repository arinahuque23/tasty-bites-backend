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
    ingredients: [{ value: { type: String } }],
    calories: { type: Number },
    protein: { type: String },
    carbs: { type: String },
    fat: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MenuItem", MenuItemSchema);
