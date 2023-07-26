const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
    type:String,
    required:[true,"Enter username"],
    min:4,
    unique:true
    },
    password:{
    type:String,
    required:[true,"Enter password"],
    }
})

module.exports=mongoose.model("User",userSchema)

