const express = require("express");

const { getUsers } = require("../controllers/userControllers.js");

const { isLoggedIn } = require("../middlewares/authMiddlewares.js");

const router = express.Router();

router.get("/users", isLoggedIn, getUsers);

module.exports = router;