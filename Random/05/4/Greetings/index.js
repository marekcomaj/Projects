const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.get("/:name", function (request, response) {
  // response.header("Content-Type", "text/html");
  // response.sendFile(path.resolve("./welcome.html"));

const name = request.query.name; // http://localhost:3000/?name=Tim

  response.render("welcome", {
    name: name,
    color: "red",
  });
});



app.get('/?name/:name', (req, res) => {
    // render `home.ejs`
    res.render('home', {name: req.params.name});
  });


  app.get('/home', (req, res) => {
    response.send("Welcome guest");
  });


app.listen(3000, function () {
  console.log("the server have been started");
});