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

  let data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  }

  let jsonData = JSON.stringify(data);

  console.log(email);

  let options = {
    url: "https://us7.api.mailchimp.com/3.0/lists/67d60097a8",
    method: "POST",
    headers: {
      "Authorization": "tingzhou 25d4a71757d77fbd9631eab84fde3e0f-us7",
    },
    // body: jsonData,
  };

  request(options, function(error, response, body) {
    if (error) {
      res.sendFile(__dirname + "/failure.html");
    } else {
      if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});


// 25d4a71757d77fbd9631eab84fde3e0f-us7
// 67d60097a8
