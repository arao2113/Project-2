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

<<<<<<< HEAD
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

=======
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  
// // made obsolete because of the auth.js
// app.get("/login", function(req, res) {
//   res.render("signin");
// });

// // Load page to create a new user to be able to sell
// app.get("/createlogin", function(req, res) {
//   res.render("signup");
// });

// Load error page
>>>>>>> c44452d6bb03b75554d2df8000d7da8c90279dd6
};

