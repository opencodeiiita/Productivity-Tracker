var express = require('express');
var router = express.Router();
var passport = require('passport');

/* Auth with google. */
router.get('/google', passport.authenticate('google',{
    scope:['profile', 'email']
}));


// auth logout

router.get('/logout', (req, res)=>{
    //handle with passport
    res.send('logging out');
})


//callback route for google to redirect to
router.get('/google/callback', passport.authenticate('google',{failureRedirect:'/auth/fail'}), (req, res)=>{
         res.send('user is loged in');
});


module.exports = router;
