import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
    return (

        <div className="Landing">
            
            <div className="button-container">
                <Link to="/login">
                    <button className="button-login">Login</button>
                </Link>
                <Link to="/sign-up">
                    <button className="button-signup">Sign Up</button>
                </Link>
            </div>
            
            <div className="logo">
                <img src="/Assets/zenlog_logo.svg" style={{marginLeft: 20}} alt="Zenlog Logo" />
                <img src="/Assets/leaf_landing.svg" className="smaller-image" alt="Leaf" />
            </div>

        </div>   

    );
  }
  
export default Landing;