var express = require('express');
var router = express.Router();

const { getProfile } = require('../controllers/authController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'msg' : "Hello World"});
});

router.get('/profile', getProfile)

module.exports = router;
