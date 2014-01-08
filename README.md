# Sails.js Social Auth example with Passport and MongoDB

## Requirements

- node >= 0.10.0
- MongoDB

## Setup

1. `git clone https://github.com/stefanbuck/sails-social-auth-example.git`
2. `cd sails-social-auth-example`
3. `npm install`
4. Start your MongoDB from the command line `sudo mongod`
5. Setup your strategies
   - [Google+](#google)
   - [GitHub](#github)
   - [Facebook](#facebook)
8. `sails lift`
9. Open `http://localhost:1337` in your favorite browser

## Available authentication strategies

### Google+
1. Create a new app [here](https://cloud.google.com/console#/project)
   - Name ```sails-social-auth-example```
   - URL ```http://localhost:1337```
   - Callback URL ```http://localhost:1337/auth/google/callback```
1. In the `config/middleware.js` replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with the generated keys

### GitHub
1. Create a new app [here](https://github.com/settings/applications/new)
   - Name ```sails-social-auth-example```
   - URL ```http://localhost:1337```
   - Callback URL ```http://localhost:1337/auth/github/callback```
1. In the `config/middleware.js` replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with the generated keys

### Facebook

1. Create a new app [here](https://developers.facebook.com/apps)
   - Name ```sails-social-auth-example```
   - URL ```http://localhost:1337```
   - Callback URL ```http://localhost:1337/auth/facebook/callback```
1. In the `config/middleware.js` replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with the generated keys



## License

The MIT License (MIT)

Copyright (c) 2013 Stefan Buck

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


![Analytics](https://ga-beacon.appspot.com/UA-40473036-6/sails-social-auth-example/readme?pixel)

