import "./style.css"

function WeekWeatherCard ({maxTemperature, minTemperature, humidity}) {
  return(
    <>
      <div className='week-wrapper'>
        <p>11/01</p>
        <div className='humidity'>
          <img className="week-img" src="https://icons.alboompro.com/v1/bold/health-beauty/blood/000000/blood-drop.svg" />
          <p>{humidity}%</p>
        </div>
        <img className="week-img" src="https://icons.alboompro.com/v1/bold/health-beauty/blood/000000/blood-drop.svg"/>
        <div className="temperature">
          <p>min: {minTemperature} °C</p>
          <p>max: {maxTemperature} °C</p>
        </div>
      </div>

    </>      
  )
}

export default WeekWeatherCard