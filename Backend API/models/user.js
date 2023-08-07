const mongoose=require("mongoose");
const Registration=new mongoose.Schema({
    Name:{type:String ,required:true},
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true},
    Phone:{type:Number,required:true,unique:true},
    State:{type:String,required:true},
    Distric:{type:String,required:true},
    Address:{type:String,required:true},
    Pincode:{type:Number,required:true}
},{timestamps:true})
module.exports=mongoose.model("Registration",Registration)