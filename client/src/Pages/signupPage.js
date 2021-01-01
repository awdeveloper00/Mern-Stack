
import { useState } from "react"
import { signupApi } from "../API/signupApi"
import { Button,Grid, Paper, TextField } from '@material-ui/core'
const SignUp=()=>{
    const [user,setUser]=useState({firstName:'',lastName:'',email:'',username:'',password:''})
   const handlerSubmit=(e)=>{
       e.preventDefault();
        console.log(user)
        signupApi(user)
    }
    const style={ padding: 20,
        height: "70vh",
        width: "53vh",
        margin: "50px auto",
      }
    return(
        <Grid>
            <Paper elevation={10} style={style}>
                <Grid align={"center"}>
        <h2> Sign Up Page </h2>
        
        <form onSubmit={handlerSubmit}>
        <TextField variant="outlined" label ="FirstName" placeholder="Enter First Name" required defaultValue={user.firstName} onChange={(e)=>{setUser({...user,firstName:e.target.value})}}/>
        <TextField variant="outlined" label="LastName" placeholder="Enter Last Name" required defaultValue={user.lastName} onChange={(e)=>{setUser({...user,lastName:e.target.value})}}/>
        <TextField variant="outlined" label="Email" placeholder="Enter Email" required defaultValue={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
        <TextField variant="outlined" label="Username" placeholder="Enter Username" required defaultValue={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
        <TextField variant="outlined" label="Password" placeholder="Enter Password" required type='password' defaultValue={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
       <br/>
        <Button variant="outlined" color="primary" type="submit">Submit</Button>
        </form>
        </Grid>
        </Paper>
        </Grid>
    )
}
export default SignUp;