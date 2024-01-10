import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
    
    return (
        
        <div className="Landing">

            <head>
                <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' />
            </head>

            <div className="landing-button-container">
                <Link to="/login">
                    <button className="landing-button-login">Login</button>
                </Link>
                <Link to="/sign-up">
                    <button className="landing-button-signup">Sign Up</button>
                </Link>
            </div>
            
            <div className="landing-logo">
                <img src="/Assets/zenlog_logo.svg" style={{marginLeft: 20}} alt="Zenlog Logo" />
                <img src="/Assets/leaf_landing.svg" className="smaller-image" alt="Leaf" />
            </div>
            

        </div>   

    );
  }
  
export default Landing;