import "./style.css"

function WeekWeatherCard ({maxTemperature, minTemperature, humidity, icon, date}) {
  return(
    <>
      <div className='week-wrapper'>
        <p>{date}</p>
        <div className='humidity'>
          <img className="humidity-img" src="https://icons.alboompro.com/v1/bold/health-beauty/blood/000000/blood-drop.svg" />
          <p>{humidity}%</p>
        </div>
        <img className="week-img" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        <div className="temperature">
          <p>min: {minTemperature.toFixed(0)} °C</p>
          <p>max: {maxTemperature.toFixed(0)} °C</p>
        </div>
      </div>

    </>      
  )
}
export default WeekWeatherCard