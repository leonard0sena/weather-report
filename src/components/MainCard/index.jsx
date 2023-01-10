import "./style.css"

function MainWeatherCard ({maxTemperature, minTemperature, cityName}) {
  return(
    <>
      <div className="background">
        <div className="day-wrapper">
          <div>
            <div className="icon-wrapper">
              <img className="day-img" src="https://icons.alboompro.com/v1/bold/weather/weather/000000/weather-cloud-thunder.svg"></img>
              <p>22 °C</p>
            </div>
            <div className="city-wrapper">
              <p className="city"> {cityName} </p>
            </div>
          </div>  
          <div>
            <p>min: {minTemperature}</p>
            <p>max: {maxTemperature}</p>
          </div>
        </div>  
      </div>
    </>      
  )
}

export default MainWeatherCard