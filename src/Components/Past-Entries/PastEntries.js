import React from "react";
import "./PastEntries.css";
import { Link } from "react-router-dom";

function PastEntries() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    return (
        <div className="PastEntries">

            <div className="pe-header">
                <div className="pe-menu">
                    <Link to="/menu">
                        <img src="/Assets/Icons/menu_button.svg" alt="menu icon"/>
                    </Link>
                </div>
                <div className="pe-logo">
                    <Link to="/dashboard">
                        <img src="/Assets/zenlog_logo.svg" className="smaller-image" alt="exit button"/>
                    </Link>
                </div>
            </div>

            <h1 className="pe-title-text">My Past Journal Entries</h1>

            <div className="pe-rectangle-container">
                <div className="pe-rectangle">
                    <p>{currentMonth}</p>
                    <div>
                        <div className="pe-entry">
                            <p>word | journal entry</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default PastEntries;