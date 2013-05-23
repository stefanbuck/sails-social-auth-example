var passport = require('passport')
    , GitHubStrategy = require('passport-github').Strategy
    , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
    , express = require('express')
    , MongoStore = require('connect-mongo')(express);


var verifyHandler = function (token, tokenSecret, profile, done) {
    process.nextTick(function () {
        User.find({uid:profile.id}, function (err, user) {
            if (user) {
                return done(null, user);
            } else {
                User.create({
                    provider: profile.provider,
                    uid: profile.id,
                    name: profile.displayName
                }).done(function (err, user) {
                        if (err) {
                            console.log(user);
                            throw err;
                        }
                        return done(null, user);
                    });
            }
        })
    })
};

passport.serializeUser(function (user, done) {
    done(null, user.uid);
});

passport.deserializeUser(function (uid, done) {
    User.find({uid:uid}, function (err, user) {
        done(err, user);
    });
});


module.exports = {
	
	// Name of the application (used as default <title>)
	appName: "Sails Application",

	// Port this Sails application will live on
	port: 1337,

	// The environment the app is deployed in 
	// (`development` or `production`)
	//
	// In `production` mode, all css and js are bundled up and minified
	// And your views and templates are cached in-memory.  Gzip is also used.
	// The downside?  Harder to debug, and the server takes longer to start.
	environment: 'development',

	// Logger
	// Valid `level` configs:
	// 
	// - error
	// - warn
	// - debug
	// - info
	// - verbose
	//
	log: {
		level: 'info'
	},

    auth: {},

    session: {
        secret: 'TOP_SECRET',
        cookie: {
            originalMaxAge: 900000 // 15 min
        },
        store: new MongoStore({
            db: 'sails-social-auth-example'
        })
    },

    // Init custom express middleware
    express: {
        customMiddleware: function(app)
        {
            passport.use(new GitHubStrategy({
                    clientID: sails.config.auth.github.clientID,
                    clientSecret: sails.config.auth.github.clientSecret,
                    callbackURL: sails.config.auth.github.callbackURL
                },
                verifyHandler
            ));

            passport.use(new GoogleStrategy({
                    clientID: sails.config.auth.google.clientID,
                    clientSecret: sails.config.auth.google.clientSecret,
                    callbackURL: sails.config.auth.google.callbackURL
                },
                verifyHandler
            ));

            app.use(passport.initialize());
            app.use(passport.session());
        }
    }

};