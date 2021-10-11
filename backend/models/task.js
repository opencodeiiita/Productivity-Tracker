const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type:Number, 
        required: true
    },
    user_id: {
        type: String, 
        required: true 
    },
    created_at:{
        type: Date,
        default: Date.now,
    },
    description: { 
        type: String, 
        required: true, 
    },
    times:[{
        HH:Number,
        MM:Number,
        SS:Number,
        required:true,
    }],
});

const Task = mongoose.model('task',taskSchema);

module.exports= Task;