import { DayWrapper } from './style.js'
import { getBgColor } from '../WeekCard'

function DayWeatherCard ({maxTemperature, minTemperature, nowTemp, cityName, icon, description, country}) {
  return(
    <>
      <DayWrapper bgColor={getBgColor(icon)}>
        <div>
          <img className="day-img" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
          <p className="city"><img></img> {cityName} , {country} </p>
          <p className="description">{description}</p>
        </div>
        <div>
          <p>{nowTemp.toFixed(0)} °C</p>
        </div>
        <div>
          <p>min: {minTemperature.toFixed(0)} °C</p>
          <p>max: {maxTemperature.toFixed(0)} °C</p>
        </div>
      </DayWrapper>
    </>      
  )
}

export default DayWeatherCard