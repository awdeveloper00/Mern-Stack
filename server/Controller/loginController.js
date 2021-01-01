import User from "../Model/Users.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const loginController=async(req,res)=>{
  const user = await User.findOne({email:req.body.email})
  if(!user) return res.status(404).json('Email is invalid')

  const validPass = await bcrypt.compare(req.body.password,user.password)
  if(!validPass) return res.status(404).json('Password is invalid')     

  const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET,{expiresIn:'7d'});
  // res.header('auth-token',token).send(token);
  res.status(200).json({email:user.email,username:user.username,token:{token}})
  
}