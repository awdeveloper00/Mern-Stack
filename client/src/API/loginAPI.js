import axios from 'axios'

const BASE_URL='http://localhost:5000'

export const loginAPI=(user)=>{
    axios.post(BASE_URL+'/login',user)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))
}