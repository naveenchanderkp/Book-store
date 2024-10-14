const User = require('../Models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



//Register
 const registerUser = async(req,res)=>{
    const {name,email,password} = req.body

    const userExit = await User.findOne({email})

    if(userExit){
       return res.status(400).json({message:"User already exist"})
    }

    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({name,email,password:hashedPassword})

    if(user){
        res.status(200).json({
            _id : user._id,
            name:user.name,
            email:user.email,
            // token:generateToken(user._id)
            message:"User Register successfully"
        })
    }
    else{
        res.status(400).json({message:"Invalid user data"})
    }
}

 const loginUser = async(req,res) => {
const{email,password} = req.body

    const user = await User.findOne({email})

    if(!user){
        res.status(400).json({message:"Invalid user"})
    }

    const isMatch = bcrypt.compare(password,user.password)
    if(!isMatch){
        res.status(400).jsn({message:"Invalid Password"})
    }


    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1hr'})
    res.json({token,user:{id:user._id,name:user.name,email:user.email}})
}

 const dashboard = (req,res,next) => {
    const token = req.header('x-auth-token');

    if(!token){
        res.status(401).json({message:"No token! authorization denied"})
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        res.status(401).json({message:"Token is not valid"})
    }
}

module.exports = {registerUser,loginUser,dashboard}