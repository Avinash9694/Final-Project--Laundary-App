const express = require("express");
const router = express.Router();
const Registeruser = require("../model/user");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const { body, param, validationResult } = require('express-validator');


router.use(bodyparser());

//login
router.post('/signin',async (req,res)=>{
    const {Email,Password}=req.body;
    try{
        const {Email,Password,Phone}=req.body;
        
        const exist=await Registeruser.findOne({$or:[{Email},{Phone}]});

        
        if(!exist){
         res.status(400).send("User not found")
        }
        
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
module.exports = router