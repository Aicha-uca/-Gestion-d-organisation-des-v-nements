import React, {useState} from "react";
import "./signup.css";

const SignUpForm=()=>{
    const [showPopup]= useState("hide")
    const popup=()=>{
        showPopup("login-popup")
        setTimeout(()=>showPopup("hide"),3000)
    }
    return(
        <div className="cover">
            <h1>Register</h1>
            <input type="text" placeholder="username"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <div className="login-btn" onClick={popup}>Sign up</div>
          
        </div>
    )
}
export default SignUpForm;