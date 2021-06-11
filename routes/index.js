const express = require("express");
const router = express.Router();

const ardoises = require("./ardoises/ardoises")

router.use("/ardoises", ardoises);

module.exports = router;
