const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    stock  : {
        type:Number,
        default:1
    },
    price : {
        type:Number,
        required:true
    },
    productImage:  {
        type:String,
        required:true
    },
    createdBy: {
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    timestamps:true
})


const ProductModel = mongoose.model("product",productSchema)

module.exports = ProductModel