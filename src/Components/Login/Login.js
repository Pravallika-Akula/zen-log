import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";

const Login = () => {
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
                        <input type="text" id="email" placeholder="you@email.com" />
                    </div>
                    <div className="password">
                        <Link to="/dashboard">
                            <p className="forgot-password">forgot password?</p>
                        </Link>    
                        <label className="field-header">Password</label>
                        <input type="text" id="password" placeholder="Enter 6 characters or more" />
                    </div>
                    <div className="remember-me">
                        <label className="field-header-remember">Remember Me
                            <input type="checkbox" id="remember" />
                        </label>
                    </div>
                    <Link to="/dashboard">
                        <button className="login-button">Login</button>
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