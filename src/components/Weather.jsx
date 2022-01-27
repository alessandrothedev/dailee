import React from 'react'
import { useState, useEffect } from 'react'
import './styles/weather.scss'

const Weather = () => {

    const [weather, setWeather] = useState(null);
  
    const getWeather = (lat, lon) => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=db698b5e650a441fae6190451221401&q=${lat},${lon}&days=7&aqi=no&alerts=no`)
        .then(res => res.json())
        .then(data => setWeather(data))
        .catch(err => console.log(err))
    }
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        });
      } else {
        getWeather(51.5072, 0.1276);
      }
    }, []);

    return (
        <div className='weather-widget'>

            {weather && 
                <div className="weather-widget__info">
                    <img src={weather.current.condition.icon} alt="" />

                    <div className="weather-widget__info-text">
                        <h3>{weather.location.name}</h3>
                        <p className="weather-widget__info-text--thin">{weather.location.region}</p>
                        <p className='weather-widget__info-text--condition'>{weather.current.condition.text}</p>
                    </div>

                    <h2>{weather.current.temp_c}&#176;</h2>
                </div>
            }      
        </div>
    )
}

export default Weather
