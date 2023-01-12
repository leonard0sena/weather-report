import "./style.css"

function MainWeatherCard ({maxTemperature, minTemperature, cityName, icon, description, country}) {
  return(
    <>
      <div className="day-wrapper">
        <div>
          <img className="day-img" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
          <p className="city"> {cityName} , {country} </p>
          <p className="description">{description}</p>
        </div>
        <div>
          <p>22 °C</p>
        </div>
        <div>
          <p>min: {minTemperature.toFixed(0)} °C</p>
          <p>max: {maxTemperature.toFixed(0)} °C</p>
        </div>
      </div>
    </>      
  )
}

export default MainWeatherCard