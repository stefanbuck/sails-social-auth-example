// Local configuration
// 
// Included in the .gitignore by default,
// this is where you include configuration overrides for your local system
// or for a production deployment.


// For example, to use port 80 on the local machine, override the `port` config
// module.exports.port = 80;

// or to keep your db credentials out of the repo, but to use them on the local machine
// override the `modelDefaults` config
// module.exports.modelDefaults = { database: 'foo', user: 'bar', password: 'baZ'}

module.exports.auth = {

    // Create an application here: https://github.com/settings/applications/new
    // Define the application Name, URL (http://localhost:1337) and
    // Callback URL (http://localhost:1337/auth/github/callback).
    // Rename config/local.ex.js to local.js and replace YOUR-CLIENT-ID and
    // YOUR-CLIENT-SECRET with the generated keys.

    github: {
        clientID: "YOUR_CLIENT_ID",
        clientSecret: "YOUR_CLIENT_SECRET",
        callbackURL:"http://localhost:1337/auth/github/callback"
    },

    // Create an application here: https://code.google.com/apis/console/

    google: {
        clientID: "YOUR_CLIENT_ID",
        clientSecret: "YOUR_CLIENT_SECRET",
        callbackURL:"http://localhost:1337/auth/google/callback"
    }
}