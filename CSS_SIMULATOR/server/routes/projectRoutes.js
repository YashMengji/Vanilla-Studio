const express = require("express");
// updateProjectDetails:- Updates only projectTitle, projectDesc, access
// editProject:- Updates only HTML CSS
const { isLoggedIn } = require("../middlewares/authMiddlewares");
const { createProject, getProject, updateProjectDetails, editProject, deleteProject, getProjects } = require("../controllers/projectControllers");

const router = express.Router();

router.get("/", isLoggedIn, getProjects)
router.post("/create", isLoggedIn, createProject);
router.get("/:id", isLoggedIn, getProject);
router.put("/:id/update", isLoggedIn, updateProjectDetails);
router.put("/:id/edit", isLoggedIn, editProject);
router.delete("/:id/delete", isLoggedIn, deleteProject);

module.exports = router;