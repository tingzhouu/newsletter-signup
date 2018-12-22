const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const app = new express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
  console.log(`Server is running on port ${3000}`);
});


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;
  console.log(email);
});
