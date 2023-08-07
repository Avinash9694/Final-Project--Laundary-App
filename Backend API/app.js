const mongoose=require("mongoose");
const express = require("express");
const bodyparser = require('body-parser')
const cors = require('cors');
const app = express();
const SECRET = "RESTAPI";
app.use(bodyparser());
app.use(cors());


mongoose.connect("mongodb+srv://avinash:Avinash123@cluster0.cyjm1.mongodb.net/Database1?retryWrites=true&w=majority")
.then(()=>console.log("db connected"));

app.listen(5000,()=>console.log("server started"));
const loginRoutes = require("./router/login")
const orderRoutes = require("./router/pastOrder")
const registerRoutes = require("./router/register")

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
  
