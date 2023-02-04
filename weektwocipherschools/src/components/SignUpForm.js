import React, {useState} from "react";
import { isValidUser } from "./Validators";
const SignUpForm = () => {
    const [state, setState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
 let handleChange = (e) =>
 setState({ ...state, [e.target.name]: e.target.value });
    return (
        <form onSubmit={(e) =>  e.preventDefault()}>
            <label>First Name</label>
            <input name={"firstName"} 
            type ={"text"} 
            onChange={handleChange} 
            value={state.firstName}
            placeholder={"First Name"}
            />
            <label>Last Name</label>
            <input name={"lastName"} 
            type ={"text"} 
            onChange={handleChange} 
            value={state.lastName}
            placeholder={"Last Name"}
            />
            <label>Email</label>
            <input name={"email"} 
            type ={"email"} 
            onChange={handleChange} 
            value={state.email}
            placeholder={"Email"}
            />
            <label>password</label>
            <input name={"password"} 
            type ={"password"} 
            onChange={handleChange} 
            value={state.password}
            placeholder={"Password"}
            />
            <button type={`submit`}>Submit</button>
         </form>
    )
};
export default SignUpForm;