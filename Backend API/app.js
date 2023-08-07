const mongoose=require("mongoose");
const express = require("express");
const bodyparser = require('body-parser')
const cors = require('cors');
const app = express();
app.use(bodyparser());
app.use(cors());
app.use(express.json())
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
const Registeruser=require("./models/user.js")
const middleware=require("./middleware.js")

const SECRET = "RESTAPI";

mongoose.connect("mongodb+srv://avinash:Avinash123@cluster0.cyjm1.mongodb.net/Database1?retryWrites=true&w=majority")
.then(()=>console.log("db connected"));


const loginRoutes = require("./router/login")
const orderRoutes = require("./router/pastOrder")
const registerRoutes = require("./router/register")


app.post('/register',async (req,res)=>{
    console.log(req.body)
  
    try{
        const {Name,Email,Password,Phone,State,Address,Pincode,Distric}=req.body
        const exist= await Registeruser.findOne({$or:[{Email},{Phone}]})
        if (exist){
            return res.status(400).send("user Already exist")
        }
        bcrypt.hash(Password,10, async function(err, hash) {
            
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
        
        const exist=await Registeruser.findOne({$or:[{Email},{Phone}]});

       
        if(!exist){
         res.status(400).send("User not found")
        }
        /
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


app.use("/orderDetails",(req,res,next)=>{
    var token = req.headers.authorization.split("test ")[1];
    if(!token){
        return res.status(401).json({
            status:"failed",
            message:"Token is missing"
        })
    }
    jwt.verify(token, SECRET,(err,decoded)=>{ 
        if(err){
            return res.status(401).json({
                status:"failed",
                message:err.message
            })
        }
        else{
            req.user = decoded.data
            next();
        }
    })
  })
  
  app.use("/",loginRoutes)
  app.use("/",registerRoutes)
  app.use("/",orderRoutes)
  
app.listen(5000,()=>console.log("server started"))

