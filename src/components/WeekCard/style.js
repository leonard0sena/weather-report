import styled from 'styled-components'

export const WeekWrapper = styled.div`
  display: flex;
  width: 91%;
  justify-content: center;
  align-items: center;
  padding: 25px;
  gap: 50px;
  border-radius: 20px;
  background-image: linear-gradient(90deg,${props => props.bgColor});
  `

  export const DateTime = styled.div`
    display: flex;
    gap: 8px;
  `

  export const Humidity = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
  `

  export const HumidityImg = styled.img`
    width: 20px;
  `

  export const Temperature = styled.div`
    display: flex;
    width: 32%;
    gap: 15px;
  `

  export const WeekImg = styled.img`
    width: 60px;
  `

  export const SvgWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  `

  export const SvgIcons = styled.img`
  width: 20px;
  `