# Sails.js Social Auth example with Passport and MongoDB

## Available authentication strategies
- Google+
- GitHub

## Setup

    1. `git clone https://github.com/stefanbuck/sails-social-auth-example.git`
    2. `cd sails-social-auth-example`
    3. `npm install`
    4. Create an GitHub application here: https://github.com/settings/applications/new
    5. Define the application Name, URL (http://localhost:1337) and Callback URL (http://localhost:1337/auth/github/callback)
    6. In the `config/middleware.js` replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with the generated keys
    7. `sails lift`
    8. Open http://localhost:1337 in your favorite browser
