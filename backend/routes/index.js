var express = require('express');
var router = express.Router();
const {addtask} = require('../controllers/addtask');
const { getProfile } = require('../controllers/authController');
const ToDo = require('../models/todo');

const Note = require('../models/note');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ msg: 'Hello World' });
});

router.get('/profile', getProfile);
router.post('/task', addtask);
router.post('/note', async (req, res) => {
    try {
        const note = new Note({
            user_id: req.user._id,
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

module.exports = router;
