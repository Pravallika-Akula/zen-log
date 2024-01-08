import React from "react";
import { useNavigate, Link } from "react-router-dom"
import "./Login.css";

import { useState } from "react"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate();
    async function handleLogin(e) {
        e.preventDefault();
        // alert(email + ':' + password);
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
            navigate('/dashboard')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' />
            </head>
            <body>
                <div className="logo"></div>
                <div className="login">
                    <h1 className="login-header">Welcome Back!</h1> 
                    <p className="login-subheader">Please log in to begin writing</p> 
                </div>
                <div className="form-items">
                    <div className="email-address">
                        <label className="field-header">Email</label>
                        <input onChange={(e) => {setEmail(e.target.value)}} type="text" id="email" placeholder="you@email.com" />
                    </div>
                    <div className="password">
                        <Link to="/dashboard">
                            <p className="forgot-password">forgot password?</p>
                        </Link>    
                        <label className="field-header">Password</label>
                        <input onChange={(e) => {setPassword(e.target.value)}} type="text" id="password" placeholder="Enter 6 characters or more" />
                    </div>
                    <div className="remember-me">
                        <label className="field-header-remember">Remember Me
                            <input type="checkbox" id="remember" />
                        </label>
                    </div>
                    <Link>
                        <button onClick={ (e) => {handleLogin(e)}} className="login-button">Login</button>
                    </Link>
                </div>
                <Link to="/sign-up">
                    <p className="sign-up">Don't have an account? <b>Sign Up</b></p>
                </Link> 
            </body>
            <img src="./Vector.png" alt="leaf pic"></img>
        </div>  
    );
};
  
export default Login;