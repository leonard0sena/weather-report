import { WeekWrapper, Humidity, Temperature, WeekImg, HumidityImg, DateTime } from './style.js'

function WeekWeatherCard ({maxTemperature, minTemperature, humidity, icon, date}) {
  const day = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  }).format(new Date(date))

  const time = new Intl.DateTimeFormat('pt-BR', {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date))
  
  function getBgColor(icon) {
    switch (icon) {
      case '01d':
      case '02d':
      case '01n':
      case '02n':
        return 'rgb(237, 106, 90), rgb(244, 241, 187)'

      case '03d':
      case '04d':
      case '03n':
      case '04n':
        return 'rgb(181, 177, 178), rgb(173, 169, 183)'

      case '09d':
      case '10d':
      case '09n':
      case '10n':
        return 'rgb(113, 124, 137), rgb(138, 162, 169)'

      case '11d':
      case '11n':  
        return 'rgb(1, 38, 34), rgb(0, 59, 54)'

      case '13d':
      case '13n':        
        return 'rgb(120, 192, 224), rgb(68, 157, 209)'

      case '50d':
      case '50n':        
        return 'rgb(107, 96, 84), rgb(146, 148, 135)'

    }
  }

  return(
    <>
      <WeekWrapper bgColor={getBgColor(icon)}>
        <DateTime>
          <p>{day}</p>
          <p>-</p>
          <p>{time}</p>
        </DateTime>
        <Humidity>
          <HumidityImg src="https://icons.alboompro.com/v1/bold/health-beauty/blood/000000/blood-drop.svg" />
          <p>{humidity}%</p>
        </Humidity>
        <WeekImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        <Temperature>
          <p>min: {minTemperature.toFixed(0)} °C</p>
          <p>max: {maxTemperature.toFixed(0)} °C</p>
        </Temperature>
      </WeekWrapper>

    </>      
  )
}
export default WeekWeatherCard