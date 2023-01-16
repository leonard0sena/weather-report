import styled from 'styled-components'

export const DayWrapper = styled.div`
  display: flex;
  background-image: linear-gradient(90deg,${props => props.bgColor});
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;

  .icon-wrapper {
  gap: 20px;
  display: flex;
  }

  .day-img {
  width: 150px;
  }

  .city {
  text-align: center;
  font-size: 20px;
  }

  .description {
  text-align: center;
  }
`
