var express = require('express');
var router = express.Router();
const {addtask, getTask} = require('../controllers/addtask');
const { getProfile } = require('../controllers/authController');
const ToDo = require('../models/todo');
const Note = require('../models/note');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ msg: 'Hello World' });
});

router.get('/profile', getProfile);
router.get('/task', getTask);
router.post('/task', addtask);
router.post('/note', async (req, res) => {
    try {
        const note = new Note({
            title: req.body.title,
            text: req.body.text,
        });
        const createdNote = await note.save();
        res.send({ Note: createdNote });
    } catch (err) {
      res.send({ message: 'Note could not be created' });
    }
});

router.post('/todo',async(req,res)=>{
  try{
    const todo = new ToDo({
      user_id: req.user._id,
      description: req.body.description,
      checked: req.body.checked,
    })
    const createdTodo = await todo.save();
    res.send({Todo: createdTodo});
  }catch(err){
    res.send({message: "Todo not created"})
  }
})

router.get('/todo',async(req,res)=>{
  try{
    if(!req.user){
      res.status(404).json({
        error: 'You need to be logged in'
      })
    }
    const todo = await ToDo.find({'user_id': req.user._id})
    res.status(200).json({Todo: todo});
  }catch(err){
    res.status(400).json(
      {Success:false,
      error: err})
  }
})

module.exports = router;
