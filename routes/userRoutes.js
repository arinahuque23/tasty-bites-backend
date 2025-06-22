const express = require("express");
const {
  registerUser,
  getUserByUID,
  getAllUsers,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getAllUsers);
router.get("/:uid", getUserByUID);
router.put("/:uid", updateUserRole);
router.delete("/:uid", deleteUser);

module.exports = router;
