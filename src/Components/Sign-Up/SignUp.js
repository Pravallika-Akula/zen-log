import React from "react";
import "./SignUp.css";
import {Link} from "react-router-dom";


const SignUp = () => {
    return(
        <div>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' />
            </head>
            <body>
                <div className="logo"></div>
                <div className="signUp">
                    <h1 className="signUp-header">Welcome to ZenLog!</h1> 
                    <p className="signUp-subheader">Please sign in to begin writing</p> 
                </div>
                <div className="form-items">
                    <div className="email-address">
                        <label className="field-header">Email</label>
                        <input type="text" id="email" placeholder="you@email.com" />
                    </div>
                    <div className="password">    
                        <label className="field-header">Password</label>
                        <input type="text" id="password" placeholder="Enter 6 characters or more" />
                    </div>
                    <Link to="/dashboard">
                        <button className="signUp-button">Sign Up</button>
                    </Link>
                </div>
                <Link to="/login">
                    <p className="login">Already have an account?<b>Sign Up</b></p>
                </Link> 
            </body>
        </div>  

    );
};
  
export default SignUp;