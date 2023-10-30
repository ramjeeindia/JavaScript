const express = require("express");
const UserModel = require("../models/userModel");
const { registerUser, loginUser, getUserDetails } = require("../controllers/userController");

const UserRoute = express.Router()

// to register user
UserRoute.post("/register",registerUser)

// to login user

UserRoute.post("/login",loginUser)

// get user user details

UserRoute.post("/details",getUserDetails)

module.exports = UserRoute