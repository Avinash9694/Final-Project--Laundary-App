const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    dateOrdered: {
        type: String,
    },
    productlist: [{
        producttype: { type: String, default: "shirt" },
        quantity: { type: Number, default: 0 },
        wash: { type: Boolean, default: false },
        iron: { type: Boolean, default: false },
        fold: { type: Boolean, default: false },
        pack: { type: Boolean, default: false },
        price: { type: Number, default: 0 },
    }, ],
    totalprice: {type: Number},
    totalitems: {type: Number},
    storelocation: {type: String, default:"JP Nagar"},
    city: {type: String, default:"bangalore"},
    storephone: {type: String,default: "9999999999"},
    status: {type: String ,default: "ready to pickup"  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;