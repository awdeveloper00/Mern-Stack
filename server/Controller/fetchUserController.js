import User from "../Model/Users.js"

export const fetchUserController =async(req,res)=>{
 
    try {
     const userFetch = await User.find()
        res.status(200).json(userFetch)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}