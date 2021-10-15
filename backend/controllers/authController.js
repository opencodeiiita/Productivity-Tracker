const User = require('../models/user')

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