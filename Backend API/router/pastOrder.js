const express = require('express');
const mongoose = require('mongoose');

const bodyparser = require('body-parser');
const router = express.Router();
const { body, param, validationResult } = require('express-validator');
const ProductItems = require("../model/createOrder");

router.use(bodyparser())
//fetch order details
router.get("/details", async (req, res)=> {
    try {
        const presentOrders = await ProductItems.find({ user: req.user }).sort({_id: -1,
        });
        return res.json({
            status: "success",
            presentOrders
        });
        // console.log("presentOrders", presentOrders);
    } catch (e) {
        res.status(500).json({
            status: "signup failed",
            message: e.message
        });
    }
});


//create new orders
router.post("/details", async (req, res)=> {
    console.log(req.body)
    
    try {
        const {dateOrdered, totalitems, totalprice, productlist} = req.body;
        const Orders = await ProductItems.create({
            dateOrdered,
            totalitems,
            totalprice,
            productlist,
            user: req.user});
        return res.json({
            status: "success",
            message: "Order Successfull",
            Orders
        });
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            error: e.message
        });
    }
});

//cancel order
router.put("/cancelOrder/:id", async (req,res)=>{
    try{
    const post = await ProductItems.updateOne({ _id: req.params.id,user: req.userId}, {status: "cancelled"})
    res.status(200).json({
        status:"success",
        message: "order cancelled",
        user:req.user
    });
    }
    catch(err){
        res.status(500).json({
            status:"failed",
            message: err.message
        });
    }
});

//delete order(optional)
router.delete("/delete/:id", async (req, res) => {
    const post = await ProductItems.deleteOne({_id: req.params.id, user: req.user});
    console.log(post);
    if(post.deletedCount > 0){
        res.json({
            status: "Post Deleted",
        })
    }else {
        res.json({
            status: "not authorise to delete",
        })
    }
    
})

// router.get("/confirm", async (req,res)=>{
//    try{ const {dateOrdered,productlist,totalprice,totalitems,storelocation,city,storephone,status}= await User.find();
//         res.status(200).json({
//             success:"success",
//             message:"ok"
//         });
//    }

// catch(e){
//     res.status(401).json({
//         status: "failed",
//         message: e.message
//     })

// }
// });
module.exports = router