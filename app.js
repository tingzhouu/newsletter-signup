const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const app = new express();


app.listen(3000, function() {
  console.log(`Server is running on port ${3000}`);
});
