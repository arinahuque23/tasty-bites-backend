const User = require("../models/UserModel");

exports.registerUser = async (req, res) => {
  const { uid, email, phone, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ uid });
    if (existingUser) {
      return res.status(200).json(existingUser);
    }

    const newUser = new User({
      uid,
      email,
      phone,
      firstName,
      lastName,
      role: "user",
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getUserByUID = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Fetch all users error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateUserRole = async (req, res) => {
  const { role } = req.body;
  if (!["admin", "user"].includes(role)) {
    return res.status(400).json({ error: "Invalid role" });
  }

  try {
    const user = await User.findOneAndUpdate(
      { uid: req.params.uid },
      { role },
      { new: true }
    );

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.error("Update role error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ uid: req.params.uid });
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
