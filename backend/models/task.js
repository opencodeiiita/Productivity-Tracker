const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type:id, 
        required: true
    },
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'user' 
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
},{ timestamps: true });

const Task = mongoose.model('task',taskSchema);

module.exports= Task;