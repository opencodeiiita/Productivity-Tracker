var express = require('express');
var router = express.Router();

const { getProfile } = require('../controllers/authController');
const {addtask} = require('../controllers/addtask');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'msg' : "Hello World"});
});

router.get('/profile', getProfile)
router.post('/task', addtask);
module.exports = router;
