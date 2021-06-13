const express = require("express");
const router = express.Router();

const ardoises = require("./ardoises/ardoises")
const register = require("./users/registration")
const login = require("./users/login")


router.use("/ardoises", ardoises);
router.use("/register", register);
router.use("/login", login);

module.exports = router;
