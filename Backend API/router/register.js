const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Registeruser = require('../model/user');
const bcrypt = require('bcrypt');

const { body, param,check, validationResult } = require("express-validator")

router.use(bodyParser());

//Registration
router.post('/register',[
    check('Name').isLength({ min: 3 }),
    check('Email').isEmail(),
  ],async (req,res)=>{
    console.log(req.body)

    const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  if(req.body.Pincode.length!=6 && req.body.Phone.length!=10){
      return res.status(422).json({error:"invalid phone or pincode"})
  }
   
    try{
        const {Name,Email,Password,Phone,State,District,Address,Pincode}=req.body
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
                District,
                Address,
                Pincode 
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
module.exports = router