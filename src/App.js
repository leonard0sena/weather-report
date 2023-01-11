import { useEffect, useState } from 'react';
import './app.css';
import MainWeatherCard from './components/MainCard';
import WeekWeatherCard from './components/WeekCard';

function App() {
  const [mainCardData, setMainCardData] = useState(null)
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [coordsLoaded, setCoordsLoaded] = useState(false)
  const [coords, setCoords] = useState({})
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude })
      setCoordsLoaded(true)
    })
  }, [coordsLoaded])

  useEffect(() => {
    if(Object.keys(coords).length !== 0) {
      fetchData()
    }
  }, [coords])
  
  async function fetchData() {
    let latitude = coords.latitude
    let longitude = coords.longitude
    const initialResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=ddbe22c4ca49e54f138a28fc1067af55&lang=pt_br&units=metric`)
    const response = await initialResponse.json()
    setWeatherData(response.list)
    setMainCardData(response.list[0])
    setCity(response.city.name)
  }
  return (
    <div className='wrapper'>
      {/* lembrar que API está enviando previsões apenas de 3 em 3 horas */}
      <div className='main-card-wrapper'>
        {mainCardData && (
          <MainWeatherCard 
          maxTemperature={mainCardData.main.temp_max} 
          minTemperature={mainCardData.main.temp_min} 
          cityName={city} 
          icon={mainCardData.weather[0].icon}
          description={mainCardData.weather[0].description}
          date={mainCardData.dt_txt}
          />
        )}
      </div>
      <div className='main-card-wrapper'>
        {weatherData && weatherData.map((day, index) => (
          <WeekWeatherCard 
          key={index} 
          maxTemperature={day.main.temp_max} 
          minTemperature={day.main.temp_min} 
          humidity={day.main.humidity} 
          icon={day.weather[0].icon}
          date={day.dt_txt}
          />
        ))}
      </div>
    </div>

  )
}

export default App;
