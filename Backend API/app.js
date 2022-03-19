const mongoose=require("mongoose");
const express = require("express");
const app = express();
mongoose.connect("mongodb+srv://avinash:Avinash123@cluster0.cyjm1.mongodb.net/Database1?retryWrites=true&w=majority").then(()=>console.log("db connected"))
app.listen(5000,()=>console.log("server started"))