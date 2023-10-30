const mongoose = require("mongoose");


const cartItemSchema = mongoose.Schema({
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
    }
},{
    timestamps:true
})

const CartItemModel = mongoose.model("cartitem",cartItemSchema)

module.exports = CartItemModel