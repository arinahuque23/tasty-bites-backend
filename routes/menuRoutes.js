const express = require("express");
const router = express.Router();
const {
  createMenuItem,
  getAllMenuItems,
} = require("../controllers/menuController");

router.post("/", createMenuItem);
router.get("/", getAllMenuItems);

module.exports = router;
