const Task = require('../models/task')
const User = require('../models/user')
/*
============================
********Task***************
============================
*/

exports.addtask = async(req, res)=>{
    try{
        console.log(req.User);
        const {_id, description, times} =req.body;

        if(!(_id&&description&&times)){

            if(!(_id)){
                return res.status(401).json({
                    success:'false',
                    error:"User is not authenticated💀💀💀"
                })
            }
            else{
            return res.status(422).json({
                success:'false',
                error:"All inputs are required"
            });}
        }
        const newTask = new Task({
            user_id:_id,
            description:description,
            times:times
        })
        await newTask.save();
        return res.status(200).json({
            success:true,
            mssg:'Task is added.'
        })

    }
    catch (err){
      console.log(err);
      return res.status(404).json({
          success:false,
          mssg:'Error!!'
      })
    }
}