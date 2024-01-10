import React, { useState } from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import { Password } from 'primereact/password';
import { signOut, getAuth } from "firebase/auth"

var totalEntries = 31;
var totalMoods = 28;
var userName = 'Varshni';
var userPass = '123secure';

const Profile = () => {
    
    const [value, setValue] = useState(userPass);

    const auth = getAuth()
    async function handleSignOut(){
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }
    
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
                <div className="p-form-items">
                    <div className="p-email-address">
                        <label className="p-field-header">Email</label>
                        <input type="text" id="email" placeholder="you@email.com" />
                    </div>
                    <div className="p-full-name">
                        <label className="p-field-header">Full Name</label>
                        <input type="text" id="fullname" placeholder="John Doe" />
                    </div>
                    <div className="p-password password2">    
                        <label className="password-field-header">Password</label>
                        <div className="card flex justify-content-center">
                            <Password  value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} toggleMask />
                        </div>    
                    </div>
                    <Link to="/dashboard">
                        <p className="p-change-password">change password</p>
                    </Link>
                </div>


                <button className="p-signOut" onClick={() => {handleSignOut()}}>
                    <p >Sign Out of My Account</p>
                </button>
                
                
            </body>
        </div>  
    
    
    
    
    
    );
};
  
export default Profile;