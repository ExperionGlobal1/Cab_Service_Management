const express = require('express');
const parser = require('body-parser');
const homeRoute = require('./routes/home');
const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');
const bookRoute = require('./routes/book');
const driverRoute = require('./routes/driver');


const path = require('path');
const cookieSession = require('cookie-session');
const { engine } = require('express-handlebars');
const authMiddleware = require('./middlewares/authenticationMiddleware');

// Creating an express app.
const app = express();

// Configuring the express app to use handlebars template engine.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Configuring body parser.
app.use("/", parser.urlencoded({extended: true}));

// Configuring static files middleware.
app.use("/static", express.static(path.join(__dirname, 'static')));

// app.use(cookieSession({
//     name: 'session',
//     httpOnly: true,
//     keys: ["asdghjhgsdahjsgdhjasd"],
//     maxAge:  60 * 60 
// }));
// app.use(authMiddleware);

app.use(homeRoute);
app.use(signupRoute);
app.use(signinRoute);
app.use(bookRoute);
app.use(driverRoute);

app.listen(80);