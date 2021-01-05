import axios from 'axios'

const BASE_URL='http://localhost:5000'

export const loginAPI=(user)=>{
    axios.post(BASE_URL+'/login',user)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))
}
export const signupApi=(user)=>{
    axios.post(BASE_URL+'/signup',user)
    .then((response)=>console.log(response))
    .catch((response)=>console.log(response))
}
export const getUsers=()=>{
    axios.get(BASE_URL+'/users')
    //   .then((response)=>console.log(response.data))
    //   .catch((error)=>console.log(error))
}