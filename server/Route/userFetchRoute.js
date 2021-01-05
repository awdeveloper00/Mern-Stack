import express from 'express'
import { fetchUserController } from '../Controller/fetchUserController.js'
// import { tokenVerification } from '../TokenVerification/verifyToken.js';

const route=express.Router()

route.get('/',fetchUserController);

export default route