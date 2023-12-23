import React from "react";
import "./PastEntries.css";

function PastEntries() {
    return (
        <div className="PastEntries">
            <img src="/Assets/Icons/menu_button.svg" alt="menu icon"/>
            <p>Logo</p>
            <p>My Past Journal Entries</p>

            <div className="rectangle">
                <p>Month</p>
                <p>Entry container</p>
            </div>
        </div>
    );
  }
  
export default PastEntries;