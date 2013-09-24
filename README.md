# Sails.js Social Auth example with Passport and MongoDB

## Available authentication strategies
- Google+
- GitHub

## Setup

1. `git clone https://github.com/stefanbuck/sails-social-auth-example.git`
2. `cd sails-social-auth-example`
3. `npm install`
4. Start your MongoDB from the command line `sudo mongod`
5. Create an GitHub application here: https://github.com/settings/applications/new
6. Define the application Name, URL (http://localhost:1337) and Callback URL (http://localhost:1337/auth/github/callback)
7. In the `config/middleware.js` replace `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with the generated keys
8. `sails lift`
9. Open `http://localhost:1337` in your favorite browser

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


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/stefanbuck/sails-social-auth-example/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

