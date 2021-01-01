import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'Please enter your First Name']            
    },
    lastName:{
        type:String,
        required:[true,'Please enter your First Name']
    },
    email:{
        type:String,
        required:[true,'Please enter your Email'],
    },
    username:{
        type:String,
        required:[true,'Please enter your Username']
    },
    password:{
        type:String,
        required:[true,'Please enter Password']
    }
})

const User = mongoose.model('User',userSchema);
export default User;