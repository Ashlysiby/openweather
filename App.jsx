import React, {useState} from 'react'
import axios from 'axios'


function App() {
const [data, setData] = useState({}) 
const [location, setLocation] = useState('')



const searchLocation = (event) => {
  if(event.key === 'Enter'){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=00040e268e374c8f7fa1e1c1246bcde0&units=metric`;
  axios.get(url).then((response) => {
    setData(response.data);
    console.log(response.data);
  })
}
} 

return (
    <>
  <div className="app">
    <div className="container">
    <div className="search">
     <input 
     value={location}
     onChange={event => setLocation(event.target.value)}
     placeholder='Enter Location'
     onKeyPress={searchLocation}
     type='text'/> 
    </div>
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
           {data.main ? <h1>{data.main.temp}°C</h1> : null} 
        </div>
        <div className="description">
          
        {data.weather ? <p>{data.weather[0].description}</p> : null} 
        
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>Feels Like</p>
          {data.main ? <p className='bold'>{data.main.feels_like}°F</p> : null}
        </div>
        <div className="humidity">
          <p>Humidity</p>
          {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
          
        </div>
        <div className="wind">
          <p>Wind Speed</p>
          {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
          
        </div>
        
      </div>
    </div>
  </div>
    </>
  )
}

export default App;
