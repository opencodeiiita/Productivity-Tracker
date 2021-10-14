const User = require('../models/user')

exports.getProfile = async(req,res) => {
    try{    
        const gid = req.params.gid;
        const user = await User.findOne({'gid': gid})
        if(!User){
            return res.status(400).json({
                success: false,
                error: 'Incorrect gid'
            })
        }
        return res.status(200).json({
            success: true,
            user: user
        })
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: `Error occured ${err}`
        })
    }
}