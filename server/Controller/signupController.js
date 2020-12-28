import User from "../Model/Users.js"
import bcrypt from 'bcryptjs'
export const signupController=async(req,res)=>{
  const userExist= await User.findOne({email:req.body.email})
  if(userExist){
      res.status(400).json('Email Already Exists')
  }
  else{
    const salt=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(req.body.password,salt)
    const register = new User({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      password:hashPassword,
    })
    try {
        await register.save();
        res.status(201).json(register)
  } catch (error) {
      res.status(404).json({message:error.message})
  }
}
}
