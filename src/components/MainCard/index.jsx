import { DayWrapper, NowTempWrapper, CityDescriptionWrapper, DayImg, City, SvgWrapper, SvgIcons } from './style.js'
import { getBgColor } from '../WeekCard'

import { DropIcon, MaxTempIcon, MinTempIcon } from '../../icons/icons'

function DayWeatherCard ({maxTemperature, minTemperature, nowTemp, cityName, icon, description, country, humidity}) {
  return(
    <>
      <DayWrapper bgColor={getBgColor(icon)}>
          <NowTempWrapper>
            <DayImg src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <p>{nowTemp.toFixed(0)} °C</p>
          </NowTempWrapper>
          <CityDescriptionWrapper>
            <City>{cityName} , {country} </City>
            {description}
          </CityDescriptionWrapper>
          <div>
            <div>
              <SvgWrapper>
                <DropIcon />
                <p>{humidity}%</p>
              </SvgWrapper>
              <SvgWrapper>
                <MaxTempIcon />
                <p>{maxTemperature.toFixed(0)} °C</p>
              </SvgWrapper>
              <SvgWrapper>
                <MinTempIcon />
                <p>{minTemperature.toFixed(0)} °C</p>
              </SvgWrapper>
            </div>
          </div>
        </DayWrapper>
    </>      
  )
}

export default DayWeatherCard







