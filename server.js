require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport   = require('passport');
var session    = require('express-session');
// var db = require("./models");
var env=require('dotenv').load();
const flash=require('connect-flash');

var app = express();
var PORT = process.env.PORT || 8080;

//passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret 

app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");





app.get('/', function(req, res) {
 
  res.send('Welcome to Passport with Sequelize');

});


var models = require("./models");

console.log(models);

//load passport strategies
require("./config/passport/passport.js")(passport, models.User);
//Routes
app.use(flash());
var authRoute = require('./routes/auth.js')(app, passport);


//Sync Database
 
models.sequelize.sync().then(function() {
 
  console.log('Nice! Database looks fine')


}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});




// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/auth")(app, passport);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
models.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
