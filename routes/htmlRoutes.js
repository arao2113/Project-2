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

// Load page to login existing user
app.get("/login", function(req, res) {
  res.render("login");
});

// Load example page and pass in an example by id
app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
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

