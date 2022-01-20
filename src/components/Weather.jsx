import React from 'react'
import { useState, useEffect } from 'react'
import './styles/weather.scss'

const Weather = () => {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [location, setLocation] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition( (position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
        
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=db698b5e650a441fae6190451221401&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(data => { 
            setLocation(data)
            console.log(data)
        });
    }, [latitude, longitude])

    return (
        <div className='weather-widget'>
           {latitude && 
                <div className="weather-widget__info">
                    <p>{location.location.name}</p>
                    <h2>{location.current.temp_c}&#176;C</h2>
                </div>
            }

            <div className='weather-widget__icon'>
                {latitude && <img src={location.current.condition.icon} alt="" />}
                {latitude && <h3>{location.current.condition.text}</h3>}
            </div>

            <div className="weather-widget__forecast">
                {latitude && location.forecast.forecastday[0].hour.map(hour => {
                    return (
                    <div className="weather-widget__forecast-info" key={hour.time_epoch}>
                        <p>{hour.time}</p>
                        <h4>{hour.condition.text}</h4>
                        <img src={hour.condition.icon} alt="" />
                    </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Weather
