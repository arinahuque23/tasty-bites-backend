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
router.put("/:id", updateMenuItems);
router.delete("/:id", deleteMenuItems);

module.exports = router;
