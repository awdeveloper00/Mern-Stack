import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


import signupRoute from './Route/signupRoute.js'
import userFetchRoute from './Route/userFetchRoute.js'
import loginRoute from './Route/loginRoute.js'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.use('/Signup',signupRoute);
app.use('/Users',userFetchRoute);
app.use('/login',loginRoute);

const CONNECTION_URL='mongodb+srv://admin:admin@cluster0.nohhx.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT=process.env.PORT||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(app.listen(PORT,()=>console.log('Connected To Database')))
.catch((error)=>console.log(error))
mongoose.set('useFindAndModify',false);