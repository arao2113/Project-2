var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app) {
 
    app.get('../views/signup.hbs', authController.signup);
    app.get('../views/dashboard.hbs', isLoggedin, authController.dashboard);
    app.get('../views/logout.hbs',authController.logout); //logs user out 
 
}

function isLoggedin(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
}