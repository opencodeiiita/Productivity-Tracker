const User = require('../models/user')
const Note = require('../models/note')
exports.getProfile = async(req,res) => {
    try{    
        if(!req.user){
           return res.redirect('/login')
        }
        return res.status(400).json({
            success: true,
            user: req.user
        })
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: `Error occured ${err}`
        })
    }
}

exports.getNote = async(req, res)=>{
    try{
       const user_id = req.body._id;
       Note.find({user_id:user_id}).then((data)=>{
        
        return res.status(200).json({
              success:true,
             AllNotes: data
         })
       })
    }
    catch (error){
       return res.status(404).json({
           success:false,
           err:`Error occured ${error}`
       })
    }
}