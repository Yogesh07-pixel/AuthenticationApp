const User = require("../models/userModel");
const createError = require('../utils/appError');
const bcrypt = require('bcryptjs');
const jwt = reqiure('jsonwebtoken');



// Registering the User
exports.signup = async (req,res,next) => {
    try{
        const user = await User.findOne({email : req.body.email});

        if(user) {
            return next(new createError("User already Exists!"))
        }
        const hashedpassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            ...req.body, 
            password : hashedpassword,
        });

         // Assigning the token (jwt) to the users

    const token = jwt.sign({_id : newUser._id} , 'secretkey123', {
        expiresIn : "90d",
    });

    res.status(201).json({
        status : "Success",
        message: "User registered Successfully",
        token,
    });
    }
    catch(error){
        next(error);
    }
};

// Logging in User
exports.login = async (res,req,next) => {};