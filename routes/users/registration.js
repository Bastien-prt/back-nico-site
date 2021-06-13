const express = require("express");
const router = express.Router();
const connection = require("../../config");

// GET ALL USERS
router.get("/", (req, res) => {
    connection.query("SELECT * FROM users", (err, results) => {
      if (err) {
        res.status(500).send("error")
      } else {
        res.send(results)
      }
    });
  });


// POST
router.post("/", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    connection.query("INSERT INTO users(username, password) VALUES(?, ?)", [username, password ], (err, result) => {
      if (err) {
        res.status(500).send("Error adding new article");
      } else {
        res.status(200).send("Successfully adding");
      }
    });
  });


module.exports = router;
