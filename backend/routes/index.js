var express = require('express');
var router = express.Router();

const { getProfile } = require('../controllers/authController');

const Note = require('../models/note');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ msg: 'Hello World' });
});

router.get('/profile', getProfile);

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

module.exports = router;
