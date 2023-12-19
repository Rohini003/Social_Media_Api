const User = require("../models/User")

const getAllUser = async(req,res,next) =>{
    let users;
    try{
        users = await User.find();
    } catch(err){
        console.log(err);
        }
     if (!users){
        return res.status(404).json
     }   

}