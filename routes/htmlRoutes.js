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
};
