const express = require("express")
const connectiontoDB = require("./config/connectiontoDB")
const UserModel = require("./models/userModel")
const UserRoute = require("./routes/UserRoute")

require("dotenv").config()

const app = express()
app.use(express.json())

app.use("/user",UserRoute) // User Route

// connection to db
connectiontoDB()
app.listen(8082,()=>{
    console.log("Server has started Successfully")
})