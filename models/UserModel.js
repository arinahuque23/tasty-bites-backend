const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
