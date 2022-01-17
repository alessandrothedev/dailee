import { useState, useEffect } from 'react'

function App() {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [location, setLocation] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition( (position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            console.log(position.coords.latitude)
        })
    }, [])

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=db698b5e650a441fae6190451221401&q=${latitude},${longitude}&days=1&aqi=yes&alerts=yes`)
            .then(response => response.json())
            .then(data => { 
                setLocation(data)
                console.log(location)
            });
    }, [latitude, longitude])


  return (
    <div className="App">
      <h2>Latitude: {latitude}</h2>
      <h2>Longitude: {longitude}</h2>
      {latitude != 0 && <h3>{location.location.name}</h3>}
      {latitude != 0 && <h3>{location.location.region}</h3>}
      {latitude != 0 && <h3>{location.location.country}</h3>}
      {latitude != 0 && <h3>{location.forecast.forecastday[0].astro.sunrise}</h3>}
    </div>
  );
}

export default App;
