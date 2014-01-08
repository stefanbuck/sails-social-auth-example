/**
 * AuthController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var passport = require('passport');

var AuthController = {

    index: function (req, res) {
        res.view();
    },

    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },

    // http://developer.github.com/v3/
    // http://developer.github.com/v3/oauth/#scopes
    github: function (req, res) {
        passport.authenticate('github', { failureRedirect: '/login' },
            function (err, user) {
                req.logIn(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.view('500');
                        return;
                    }

                    res.redirect('/');
                    return;
                });
            })(req, res);
    },

    // https://developers.facebook.com/docs/
    // https://developers.facebook.com/docs/reference/login/
    facebook: function (req, res) {
        passport.authenticate('facebook', { failureRedirect: '/login', scope: ['email'] },
            function (err, user) {
                req.logIn(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.view('500');
                        return;
                    }

                    res.redirect('/');
                    return;
                });
            })(req, res);
    },

    // https://developers.google.com/
    // https://developers.google.com/accounts/docs/OAuth2Login#scope-param
    google: function (req, res) {
        passport.authenticate('google', { failureRedirect: '/login', scope:['https://www.googleapis.com/auth/plus.login','https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.email'] },
            function (err, user) {
                req.logIn(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.view('500');
                        return;
                    }

                    res.redirect('/');
                    return;
                });
            })(req, res);
    }
};
module.exports = AuthController;
