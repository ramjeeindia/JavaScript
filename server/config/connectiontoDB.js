const mongoose = require("mongoose")

const connectiontoDB=()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ksgue.mongodb.net/mernstackproject?retryWrites=true&w=majority`).then((resp)=>{
        console.log("DB Connected to ",resp.connection.host)
    }).catch((err)=>{
        console.log("Error while connecting to DB",err.message)
    })
}


module.exports = connectiontoDB
