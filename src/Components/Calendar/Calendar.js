import React, { useState } from "react";
import "./Calendar.css";
import { Link } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';

function Calendar() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        
        <div className="Calendar">

            <div className="c-header">
                <div className="c-menu">
                    <Link to="/menu">
                        <img src="/Assets/Icons/menu_button.svg" alt="menu icon"/>
                    </Link>
                </div>
                <div className="c-logo">
                    <Link to="/dashboard">
                        <img src="/Assets/zenlog_logo.svg" className="smaller-image" alt="logo"/>
                    </Link>
                </div>
            </div>

            <div className="calendar-header">
                <img src="/Assets/Icons/left_arrow_calendar.svg" alt="left arrow"/>
                <h1 className="c-title-text">{currentMonth}</h1>
                <img src="/Assets/Icons/right_arrow_calendar.svg" alt="right arrow"/>
            </div>

            <div className="card flex justify-content-center">
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    placeholder="Select a City" className="w-full md:w-14rem" />
            </div> 

        </div>
    );
}
    
export default Calendar;