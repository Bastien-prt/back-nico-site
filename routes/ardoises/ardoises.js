const express = require("express");
const router = express.Router();
const connection = require("../../config");


// GET ALL ARDOISES
router.get("/", (req, res) => {
    connection.query("SELECT * FROM ardoises", (err, results) => {
      if (err) {
        res.status(500).send("error")
      } else {
        res.send(results)
      }
    });
  });
  
  router.get("/:id", (req, res) => {
    const idArdoise = req.params.id;


    connection.query("SELECT * FROM ardoises WHERE id=?", [idArdoise], (err, results) => {
      if (err) {
        res.status(500).send("error")
      } else {
        res.json(results)
      }
    });
  });

  // POST
  router.post("/", (req, res) => {
    const { title, price, dimension, description, image } = req.body;
    connection.query("INSERT INTO ardoises(title, price, dimension, description, image) VALUES(?, ?, ?, ?, ?)", [title, price, dimension, description, image ], (err) => {
      if (err) {
        res.status(500).send("Error adding new article");
      } else {
        res.status(200).send("Successfully adding");
      }
    });
  });


  // PUT 
  router.put("/:id", (req, res) => {
    const newArticle = req.body;
    const idArticle = req.params.id;
  
    connection.query(
      "UPDATE ardoises SET ? WHERE id = ?",
      [newArticle, idArticle],
      (err) => {
        if (err) {
          res.status(500).send("error updating article");
        } else {
          res.status(200).send("article successfully updated");
        }
      }
    );
  });


  // DELETE 
  router.delete("/:id", (req, res) =>{
    const idArdoise = req.params.id;

    connection.query("DELETE FROM ardoises WHERE id=?" , [idArdoise], (err) => {
      if(err){
        res.status(500).send("error deleting article")
      } else {
        res.status(200).send("article successfully deleted")
      }
    })
  })

module.exports = router;
