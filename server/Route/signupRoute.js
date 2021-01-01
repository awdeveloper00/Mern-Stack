import express from 'express'
import { signupController } from '../Controller/signupController.js'

const router = express.Router()

router.post('/',signupController)

export default router;