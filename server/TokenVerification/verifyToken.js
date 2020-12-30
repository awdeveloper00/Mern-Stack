import jwt from 'jsonwebtoken'
 export const tokenVerification = (req,res,next) =>{
    const token = req.header('auth-token')
    if(!token) return res.status(404).json('Access Denied')

    try {
        const Verified =jwt.verify(token,process.env.TOKEN_SECRET);
        req.user=Verified;
        next();
        console.log('Token Verified')
    } catch (error) {
        console.log(error)
    }
}
