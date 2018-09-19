var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {

    // console.log(passport);
 
    app.get('/signup', authController.signup);//route for signup
    app.get('/signin', authController.signin);//route for signin
    app.get('/dashboard', isLoggedin, authController.dashboard);
    app.get('/logout.',authController.logout); //logs user out 
   

    app.post('/signup', passport.authenticate('local', {
        // successRedirect: '/dashboard',
 
        failureRedirect: '/signup'
        }),
        function(req, res) {
            console.log(req.body);
            res.redirect('/dashboard');
          });
    // );





    app.get('/dashboard', isLoggedin, authController.dashboard);
 
 
 
    app.get('/logout', authController.logout);
 
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signin'
        }
 
    ));
    

    function isLoggedin(req, res, next) {
 
         if (req.isAuthenticated())
     
            return next();
         
        res.redirect('/signin');
    }
}
