const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const passport = require('passport');

mongoose.Promise = global.Promise;
const indexRouter = require('./api/index');

const app = express();
const port = process.env.PORT || 3000;
require('./db');

// app.use(express.json());
app.use(express.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('dist'));
app.use('/', indexRouter);

app.use(
  session({
    secret: process.env.SECRET,
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false
  })
);

require('./config-passport');
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
  console.log(`App running at port: ${port}`);
});

module.exports = app;
