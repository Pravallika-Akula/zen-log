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
                <div className="s-logo"></div>
                <div className="signUp">
                    <h1 className="signUp-header">Welcome to ZenLog!</h1> 
                    <p className="signUp-subheader">Please sign in to begin writing</p> 
                </div>
                <div className="s-form-items">
                    <div className="s-email-address">
                        <label className="s-field-header">Email</label>
                        <input type="text" id="email" placeholder="you@email.com" />
                    </div>
                    <div className="s-full-name">
                        <label className="s-field-header">Full Name</label>
                        <input type="text" id="fullname" placeholder="John Doe" />
                    </div>
                    <div className="s-password">    
                        <label className="s-field-header">Password</label>
                        <input type="text" id="password" placeholder="Enter 6 characters or more" />
                    </div>
                    <div className="s-confirm-password">    
                        <label className="s-field-header">Confirm Password</label>
                        <input type="text" id="confirmpassword" placeholder="Enter password again" />
                    </div>
                    <Link to="/dashboard">
                        <button className="signUp-button">Sign Up</button>
                    </Link>
                </div>
                <Link to="/login">
                    <p className="s-login">Already have an account? <b>Login</b></p>
                </Link> 
            </body>
        </div>  

    );
};
  
export default SignUp;