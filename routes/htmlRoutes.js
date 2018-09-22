var db = require("../models");

module.exports = function(app) {
  
// Load index page
app.get("/", function(req, res) {
  res.render("index");
});

// Load page to sell a part
app.get("/post", function(req, res) {
  res.render("post");
});

  app.get("/part", function (req, res) {
    res.render("post")
  })

// Load example page and pass in an example by id
app.get("/part/:id", function(req, res) {
    db.Part.findOne({ where: { id: req.params.id } }).then(function(part) {
      res.render("part", {
        part: part
      });
    });
  });

// Load page to create a new user to be able to sell
app.get("/createlogin", function(req, res) {
  res.render("createlogin");
});

// Load error page
app.get("*", function(req, res) {
  res.render("404");
});

};

