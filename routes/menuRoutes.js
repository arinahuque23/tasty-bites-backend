const express = require("express");
const router = express.Router();
const {
  createMenuItem,
  getAllMenuItems,
  updateMenuItems,
  deleteMenuItems,
} = require("../controllers/menuController");

router.post("/", createMenuItem);
router.get("/", getAllMenuItems);
router.put("/", updateMenuItems);
router.delete("/", deleteMenuItems);
module.exports = router;
