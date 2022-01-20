import React from 'react'
import './styles/greeting.scss'
import sunrise from '../assets/icons/sunrise-svgrepo-com.svg'
import sun from '../assets/icons/sun-svgrepo-com.svg'
import moon from '../assets/icons/moon-svgrepo-com.svg'


const Greeting = () => {

    let timeOfDay;

    const date = new Date();
    const hours = date.getHours();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = date.getDate()+' '+ monthNames[date.getMonth()]+' '+date.getFullYear();

    const greetingIcons = () => {
        if(hours < 12) {
            timeOfDay = 'Morning'
            return sunrise;
        } else if(hours >= 12 && hours < 17) {
            timeOfDay = 'Afternoon'
            return sun;
        } else {
            timeOfDay = 'Night'
            return moon;
        }
    }

    return (
        <div className='greeting'>
            <img src={greetingIcons()} alt="" className='greeting__icon'/>
            <div className="greeting__text">
                <p>{today}</p>
                <h2>Good {timeOfDay}!</h2>
            </div>
        </div>
    )
}

export default Greeting
