//require("dotenv").config();
var express = require('express')
var app = express()
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var exphbs = require("express-handlebars");
var db = require("./models")
var env=require('dotenv').load()




var PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


//passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret 
app.use(passport.initialize());
app.use(passport.session());


// Handlebars
app.set('views', './views')
app.engine("handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.get('/', function(req, res) {
 
  res.send('Welcome to Passport with Sequelize');

});
/*
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Sync Database
models.sequelize.sync().then(function() {
 
  console.log('Nice! Database looks fine')

}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});
*/

var models = require("./models");
//load passport strategies
require("./config/passport/passport.js")(passport, models.user);
//Routes
var authRoute = require('./routes/auth.js')(app, passport);


//Sync Database
 
models.sequelize.sync().then(function() {
 
  console.log('Nice! Database looks fine')


}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app, passport);
require("./routes/auth")(app, passport);


// require("./config/passport/passport.js")(passport, models.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
