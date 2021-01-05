import React, { useState } from 'react'
import { loginAPI } from '../API/API'; 
const LoginPage = () =>{
    const [user,setUser]=useState({email:'',password:''})
    const handlerSubmit=(e)=>{
      e.preventDefault()
      loginAPI(user)
    }
    return (
      <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handlerSubmit}> 
      <input placeholder='Email' defaultValue={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
      <input placeholder='Password' defaultValue={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
      <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
  export default LoginPage;