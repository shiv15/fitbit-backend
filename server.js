const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: ["http://localhost:8081", "https://fitbit-dat.herokuapp.com", "http://localhost:3000", "https://fitbit-da7ca.web.app/"],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const controller = require("./app/controllers/tutorial.controller");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  // console.log();
  controller.findOne(req.params.id).then((data)=>{
    console.log(data[0].dataValues);
    res.json(data);
  }).catch((error)=>{
    res.send(error);
  })

});

app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  controller.findName(req.params.id).then((data)=>{
    console.log(data);
    res.json(data);
  }).catch((error)=>{
    res.send(error);
  })

});


// require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});