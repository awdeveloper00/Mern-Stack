import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getUser } from "../Action/FetchUser";

const HomePage=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
       dispatch(getUser());
    },[dispatch]);

    const user=useSelector((state) => state)
    console.log(user)
    return(
        <div>
        <h1>Home Page</h1>
        <Link to="/Login">
        <button>Login</button>
        </Link>
        <Link to="/Signup">
        <button>SignUp</button>
        </Link>
        </div>
        )
}
export default HomePage