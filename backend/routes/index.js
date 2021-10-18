var express = require('express');
var router = express.Router();

const { getProfile } = require('../controllers/authController');
const ToDo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'msg' : "Hello World"});
});

router.get('/profile', getProfile)

router.post('/todo',async(req,res)=>{
  try{
    const todo = new ToDo({
      user_id: req.user.gid,
      description: req.body.description,
      checked: req.body.checked,
    })
    const createdTodo = await todo.save();
    res.send({Todo: createdTodo});
  }catch(err){
    res.send({message: "Todo not created"})
  }
})

module.exports = router;
