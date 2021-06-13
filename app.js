const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  app  =  express();
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;
const cors = require("cors");
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// j'implémente la partie API
app.get("/", (req,res) => {
    res.send("work");
})

app.use("/api", routes);


app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(port);
  });
