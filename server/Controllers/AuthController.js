const User = require('../Models/Users')
const bcrypt = require('bcryptjs')



//Register
const registerUser = async(req,res)=>{
    const {name,email,password} = req.body

    const userExit = new User.findOne({email})

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
            token:genarateToken(user._id)
        })
    }
    else{
        res.status(400).json({message:"Invalid user data"})
    }
}
