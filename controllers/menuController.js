const MenuItem = require("../models/MenuItemModel");

exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
};

// Create a new item
exports.createMenuItem = async (req, res) => {
  try {
    const data = req.body;
    const ingredients = data.ingredients?.map((i) => i.value) || [];
    const item = new MenuItem({ ...data, ingredients });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update item
exports.updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const ingredients = data.ingredients?.map((i) => i.value) || [];
    const updated = await MenuItem.findByIdAndUpdate(
      id,
      { ...data, ingredients },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete item
exports.deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
