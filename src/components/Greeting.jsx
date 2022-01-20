import React from 'react'
import './styles/greeting.scss'

const Greeting = () => {

    let timeOfDay;

    const date = new Date();
    const hours = date.getHours();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = date.getDate()+' '+ monthNames[date.getMonth()]+' '+date.getFullYear();

    if (hours < 12) {
        timeOfDay = 'Morning';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Night';
    }

    return (
        <div className='greeting'>
            <h2>Good {timeOfDay}!</h2>
            <p>It's {today}</p>
        </div>
    )
}

export default Greeting
