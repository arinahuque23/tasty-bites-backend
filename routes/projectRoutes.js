const express = require("express");

const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const router = express.Router();

router.get("/projects/post", getProjects);
router.post("/projects/post", createProject);
router.put("/projects/post/:id", updateProject);
router.delete("/projects/post/:id", deleteProject);

module.exports = router;
