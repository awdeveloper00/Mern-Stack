import express from 'express';
import { loginController } from '../Controller/loginController.js';

const route=express.Router()
route.post('/',loginController);

export default route;