const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');


passport.use(
    new GoogleStrategy({
    //options for the google strategy
    clientID: keys.google.clientId,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/callback',

   }, (accessToken, refreshToken, profile, done)=>{
    //Lets check if user already exits in our db

      //  console.log(profile);
      
       User.findOne({gid:profile.id}).then((currentUser)=>{
            if(currentUser){
                //already have a user
               console.log('user is: ', currentUser);
            }
            else{
                // new user
                new User({
                  gid: profile.id,
                  email:profile.emails[0].value,
                  name:profile.displayName,
                  photoUrl:profile.photos[0].value
                  }).save().then((newUser)=>{
                        console.log("new user created: "+ newUser);
               })
              
               
            }
       })

   
       
   }
   )
)