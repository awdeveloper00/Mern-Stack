import User from "../Model/Users.js"
import bcrypt from 'bcryptjs';

export const loginController=async(req,res)=>{
  const userEmail=await User.findOne({email:req.body.email})
  const userPass=bcrypt.compare(req.body.password,userEmail.password)
  if(userEmail&&userPass)
      {
        res.status(200).json('Success')
        console.log('Logged IN')
      }
  else
      { 
        res.status(400).json({message:error.message})    
      }

    // const userPassword=bcrypt.compare(req.body.password,userEmail.password)  
    // if(!userPassword) res.status(400).json('Password')
 
 

    // console.log(User.password,'Test');
    // const hashPassword=bcrypt.compare(req.body.password,User.password)
    // const login= new User({
    //     email:req.body.email,
    //     password:hashPassword
    // })
    // try {
    //     await User.find(login)
    //     res.status(200).json('Yess')
    // } catch (error) {
    //     res.status(400).json('YBoo')
    // }
}