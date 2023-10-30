const mongoose = require("mongoose");


const reviewSchema = mongoose.Schema({
    review : {
        type:String,
        required:true
    },
    rating: {
        type:Number,
        required:true
    },
    user : {
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    },
    product : {
        type:mongoose.Types.ObjectId,
        ref:"product",
        required:true
    }
},{
    timestamps:true
})

const ReviewModel = mongoose.model("review",reviewSchema)

module.exports = ReviewModel