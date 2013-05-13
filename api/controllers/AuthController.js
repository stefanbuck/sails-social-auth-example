/*---------------------
	:: Auth 
	-> controller
---------------------*/

var passport = require('passport');

var AuthController = {

    index: function (req, res) {
        res.view();
    },

    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },

    'github': function (req, res) {
        passport.authenticate('github', { failureRedirect: '/login' },
            function (err, user) {
                req.logIn(user, function (err) {
                    if (err) {
                        res.view();
                        return;
                    }

                    res.redirect('/');
                    return;
                });
            })(req, res);
    },

    'github/callback': function (req, res) {
        passport.authenticate('github',
            function (req, res) {
                res.redirect('/');
            })(req, res);
    }

};
module.exports = AuthController;