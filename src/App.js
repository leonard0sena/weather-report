import { useEffect, useState } from 'react';

import DayWeatherCard from './components/MainCard';
import WeekWeatherCard from './components/WeekCard';
import SearchInput from './components/SearchInput';

import { AppWrapper, DayCardWrapper, WeekCardWrapper } from './styles/app'

function App() {
  const [mainCardData, setMainCardData] = useState(null)
  const [country, setCountry] = useState('')
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
    setCountry(response.city.country)
  }

  return (
    <AppWrapper>
      <SearchInput updateCoords={setCoords}/>
      <DayCardWrapper>
        {mainCardData && (
          <DayWeatherCard
          nowTemp={mainCardData.main.temp}
          maxTemperature={mainCardData.main.temp_max} 
          minTemperature={mainCardData.main.temp_min} 
          cityName={city}
          country={country}
          icon={mainCardData.weather[0].icon}
          description={mainCardData.weather[0].description}
          date={mainCardData.dt_txt}
          />
        )}
      </DayCardWrapper>
      <WeekCardWrapper>
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
      </WeekCardWrapper>
    </AppWrapper>

  )
}

export default App;
