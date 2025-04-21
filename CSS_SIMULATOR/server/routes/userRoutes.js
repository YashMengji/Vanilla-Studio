const express = require("express");

const { getUsers, updateUser } = require("../controllers/userControllers.js");

const { isLoggedIn } = require("../middlewares/authMiddlewares.js");

const router = express.Router();

router.get("/users", getUsers);

router.put("/update", isLoggedIn, updateUser);

module.exports = router;