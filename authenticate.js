const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

exports.local = passport.use(new LocalStrategy(User.authenticate())); //if no mongoose, needs another fx in here other than authenticate
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());