const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { sendMail } = require("../helpers/sendMail");
const { registerEmail } = require("../helpers/registerEmail");

// to register user
exports.registerUser =async(req,res)=>{
    const { email,password,name} = req.body;
    if(!email || !password || !name) return res.status(404).send({msg:"All input fields are required"})
    try {
        const hashedPassword = await  bcrypt.hash(password, 12 )  // to hash password
        const newUser = await UserModel({...req.body,password:hashedPassword});
        await newUser.save();
        sendMail(email,"Welcome to Our Ecommerce Project","",registerEmail(name))
        res.status(200).send({msg:"User Registered Successfully"})

    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// to login user
exports.loginUser=async(req,res)=>{
    const {email,password } = req.body;
    if(!email || !password) return res.status(404).send({msg:"All input fields are required"})
   
    try {
        const userData = await UserModel.findOne({email})
       const result = await  bcrypt.compare(password, userData.password) // it will return a boolean value
        if(result) { 
            const token = jwt.sign({userId: userData._id}, process.env.JWT_SECRET,{
                expiresIn:'24h'
            });
            res.status(200).send({msg:"You are login successfully",token})
        }else{
            res.status(404).send({msg:"Wrong password, Please try again"})
        }
        
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}


// get user details

exports.getUserDetails = async(req,res)=> {
    const {token} = req.body
    try {
        const {userId} = jwt.verify(token, process.env.JWT_SECRET);
        const userDetails = await UserModel.findOne({_id:userId});

        res.status(200).send({userDetails})
    } catch (error) {
        res.status(500).send({msg:"Authentication failed"})
    }
}


