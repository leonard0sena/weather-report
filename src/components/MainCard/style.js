import styled from 'styled-components'

export const DayWrapper = styled.div`
  display: flex;
  background-image: linear-gradient(90deg,${props => props.bgColor});
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 280px) and (max-width: 1140px) {
    display: relative;
    justify-content: space-around;
    align-items: center;
  }
  `

  export const DayImg = styled.img`
  width: 100px;

  @media screen and (min-width: 280px) and (max-width: 1140px) {
    width: 70px;
  }
  `

  export const City = styled.div`
  text-align: center;
  font-size: 25px;

  @media screen and (min-width: 280px) and (max-width: 1140px) {
    text-align: center;
    font-size: 15px;
  }
  `

  export const NowTempWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px ;

  @media screen and (min-width: 280px) and (max-width: 1140px) {
    display: flex;
    align-self: flex-start;
    font-size: 20px;
  }
  `
  export const CityDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  `

  export const SvgWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    @media screen and (min-width: 280px) and (max-width: 1140px) {
    display: relative;
    justify-content: space-around;
    align-items: center;
  }
  `
