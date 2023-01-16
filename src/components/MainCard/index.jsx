import { DayWrapper, IconWrapper, LeftSideWrapper, RightSideWrapper, NowTempWrapper, DayImg, City, Description, Humidity, HumidityImg } from './style.js'
import { getBgColor } from '../WeekCard'

function DayWeatherCard ({maxTemperature, minTemperature, nowTemp, cityName, icon, description, country, humidity}) {
  return(
    <>
      <DayWrapper bgColor={getBgColor(icon)}>
        <LeftSideWrapper>
          <IconWrapper>
            <DayImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <City>{cityName} , {country} </City>
            <Description>{description} </Description>
          </IconWrapper>
          <NowTempWrapper>
            <p>{nowTemp.toFixed(0)} °C</p>
          </NowTempWrapper>
        </LeftSideWrapper>
        <RightSideWrapper>
          <Humidity>
            <HumidityImg src="https://icons.alboompro.com/v1/bold/health-beauty/blood/000000/blood-drop.svg" />
            <p>{humidity}%</p>
          </Humidity>
          <p>min: {minTemperature.toFixed(0)} °C</p>
          <p>max: {maxTemperature.toFixed(0)} °C</p>
        </RightSideWrapper>
      </DayWrapper>
    </>      
  )
}

export default DayWeatherCard