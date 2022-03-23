const mongoose=require("mongoose");
const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
app.use(express.json())
var jwt = require('jsonwebtoken')
const Registeruser=require("./models/user.js")
const middleware=require("./middleware.js")
mongoose.connect("mongodb+srv://avinash:Avinash123@cluster0.cyjm1.mongodb.net/Database1?retryWrites=true&w=majority").then(()=>console.log("db connected"))
//Registration
app.post('/register',async (req,res)=>{
    console.log(req.body)
   // const {username,email,password,confirmpassword}=req.body
    try{
        const {Name,Email,Password,Phone,State,Address,Pincode,Distric}=req.body
        const exist= await Registeruser.findOne({$or:[{Email},{Phone}]})
        if (exist){
            return res.status(400).send("user Already exist")
        }
        bcrypt.hash(Password,10, async function(err, hash) {
            // Store hash in your password DB.
            if(err){
                return res.status(400).send("hash failed")
            }
            const user=await Registeruser.create({
                Name,
                Email,
                Password:hash,
                Phone,
                State,
                Address,
                Pincode ,
                Distric
            })
            console.log(user._id)
            res.status(200).json({
                status:"successfull stored in DB",
                user
            })

        });
    }catch(err){
        console.log(err)
        return res.status(400).send("server error")
    }

})
//login
app.post('/signin',async (req,res)=>{
    const {Email,Password}=req.body;
    try{
        const {Email,Password,Phone}=req.body;
        //const exist=await Registeruser.findOne({Email});
        const exist=await Registeruser.findOne({$or:[{Email},{Phone}]});

        //const exists=await Registeruser.findOne({Phone})
        if(!exist){
         res.status(400).send("User not found")
        }
        //else if(!exists){
          //  res.status(400).send("User not found")
           //}
        bcrypt.compare(Password, exist.Password).then(function(result) {
            if (result){
                let payload={
                    user:{
                        id:exist._id
                    }
                }
                jwt.sign(payload,"jwtscreate",{expiresIn:3600000},(err,token)=>{
                    if(err)throw err
                    return res.json({
                        status:"sucess",
                        message:"login sucessfuly",
                        token
                    })
                })
            }else{
             res.status(400).json({
                    status:"failed",
                    message:"Not authenticated"
                })
            }
        });
        
    }catch(err){
        return res.status(400).send("password hashin wrong")}
})
app.listen(5000,()=>console.log("server started"))