var exports = module.exports = {}
 
exports.signup = function(req, res) {
    var hbsObject = {
        hello: 'hi'
    };
    res.render('signup', hbsObject);
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}