import styled from 'styled-components'

export const DayWrapper = styled.div`
  display: flex;
  background-image: linear-gradient(90deg,${props => props.bgColor});
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  `

export const IconWrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`

  export const DayImg = styled.img`
  width: 150px;
  `

  export const City = styled.div`
  text-align: center;
  font-size: 25px;
  `

  export const Description = styled.div`
  text-align: center;
  margin-bottom: 10px;
  `

  export const LeftSideWrapper = styled.div`
  display: flex;
  `

  export const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  `

  export const NowTempWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 40px;
  `

  export const Humidity = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
  `

  export const HumidityImg = styled.img`
    width: 20px;
  `
