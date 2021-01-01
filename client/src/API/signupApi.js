import axios from 'axios'

const BASE_URL='http://localhost:5000'

export const signupApi=(user)=>{
    axios.post(BASE_URL+'/signup',user)
    .then((response)=>console.log(response))
    .catch((response)=>console.log(response))
}