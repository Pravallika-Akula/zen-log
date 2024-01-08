import React from "react";
import "./Dashboard.css";
import {Link} from "react-router-dom";

var quoteText = "With the new day comes new strength and new thoughts";
var quoteAuthor = "Person";


const Dashboard = () => {
    return(
        <div>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' />
            </head>
            <body>
                <img src="/Assets/Icons/menu_button.svg" alt="menu button" classname="d-menu-logo"></img>
                <img src="/Assets/zenlog_logo.svg" alt="logo" className="logo-dash"></img>
                <p classname="quote"> "{quoteText}" - {quoteAuthor}</p>
            </body>
        </div>
    );
};
  
export default Dashboard;