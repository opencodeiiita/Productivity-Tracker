var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const passport = require('passport');
var logger = require('morgan');
const mongoose = require('mongoose');
require('./models/user');
var indexRouter = require('./routes/index');
var authRoutes = require('./routes/auth_routes')
const cookieSession = require('cookie-session');
const keys = require('./config/keys')
var app = express();
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/pt', { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
  console.log('Connected to mongoDb');
});
var passportSetup = require('./config/passport-setup');  

// const User = mongoose.model('User');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({maxAge:24*60*60*1000, keys:[keys.session.cookieKey]}))
//initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/auth', authRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ msg: 'error' });
});


// set up routes


module.exports = app;
