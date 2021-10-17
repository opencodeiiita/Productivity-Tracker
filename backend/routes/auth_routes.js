var express = require('express');
var router = express.Router();
var passport = require('passport');

/* Auth with google. */
router.get('/google', passport.authenticate('google',{
    scope:['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }), (req, res)=> {
    res.json({'Gid': req.user.gid, 
              'Email':req.user.email,
              'Name':req.user.name,
              'PhotoUrl':req.user.photoUrl
  })
});



module.exports = router;
