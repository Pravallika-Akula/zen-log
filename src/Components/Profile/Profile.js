import React from "react";
import "./Profile.css";
import {Link} from "react-router-dom";

var totalEntries = 31;
var totalMoods = 28;
var userName = 'Varshni';


const Profile = () => {
    return(
        
        <div>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' />
            </head>
            <body>
                <img src="/Assets/Icons/menu_button.svg" alt="menu button" classname="menu-logo"></img>
                <img src="/Assets/zenlog_logo.svg" alt="logo" className="logo-profile"></img>
                <div className="profile">
                    <h1 className="profile-header">Hey {userName}!</h1> 
                    <p className="profile-subheader">You’ve made a total of {totalEntries} journal entries & logged your mood for {totalMoods} days.</p> 
                </div>
                <div className="form-items">
                    <div className="email-address">
                        <label className="field-header">Email</label>
                        <input type="text" id="email" placeholder="you@email.com" />
                    </div>
                    <div className="full-name">
                        <label className="field-header">Full Name</label>
                        <input type="text" id="fullname" placeholder="John Doe" />
                    </div>
                    <div className="password">    
                        <label className="field-header">Password</label>
                        <input type="text" id="password" placeholder="*********" />
                        <img src="/Assets/Icons/open_eye.svg" alt="eye button" className="eye-icon"></img>
                    </div>
                    <Link to="/dashboard">
                        <p className="change-password">change password</p>
                    </Link>
                </div>
                <Link to="/">
                <p className="signOut">Sign Out of My Account</p>
                </Link>
            </body>
        </div>  
    
    
    
    
    
    );
};
  
export default Profile;