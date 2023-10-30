const mongoose = require("mongoose");


const orderSchema = mongoose.Schema({
    user : {
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    },
    product : {
        type:mongoose.Types.ObjectId,
        ref:"product",
        required:true
    },
    qty:{
        type:Number,
        required:true,
        default:1
    },
    status:  {
        type:String,
        required:true,
        default:"Pending"
    },
    amount : {
        type:Number,
        required:true
    }
},{
    timestamps:true
})


const OrderModel = mongoose.model("order",orderSchema)

module.exports = OrderModel