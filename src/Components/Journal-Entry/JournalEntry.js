import React from "react";
import "./JournalEntry.css";
import { Link } from "react-router-dom";

function JournalEntry() {

    const today = new Date().toLocaleDateString();

    return (
        <div className="JournalEntry">

            <div className="rectangle">

                <div className="exit-button">
                    <Link to="/calendar">
                        <img src="/Assets/Icons/exit.svg" alt="exit button"/>
                    </Link>
                    {/* make a bit smaller */}
                </div>

                <p>{today}</p> 
                {/* make word date */}

                <p>How did you feel today?</p>
                <img src="/Assets/Icons/emoji_1.svg" alt="emoji 1"/>
                <img src="/Assets/Icons/emoji_2.svg" alt="emoji 2"/>
                <img src="/Assets/Icons/emoji_3.svg" alt="emoji 3"/>
                <img src="/Assets/Icons/emoji_4.svg" alt="emoji 4"/>
                <img src="/Assets/Icons/emoji_5.svg" alt="emoji 5"/>
                {/* make a bit smaller and clickable*/}
                <p>1 2 3 4 5</p>
                {/* add spacing */}

                <div className="rectangle2">
                    <div className="rectangle3">
                        <p>Describe your day in one word: <input type="text" /></p>
                    </div>

                    <p>B I U</p>
                    {/* left align */}
                    <hr />
                    <input type="text" placeholder="Start writing..." />
                </div>
            </div>

            <div className="save-button">
                <Link to="/calendar">
                    <button className="button-login">Save Entry</button>
                </Link>
                {/* move under rectangle */}
            </div>

        </div>
    );
  }
  
export default JournalEntry;