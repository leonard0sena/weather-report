import styled from 'styled-components'


export const WeekWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  gap: 60px;
  border-radius: 20px;
  background-image: linear-gradient(90deg,${props => props.bgColor});

  .humidity {
  display: flex;
  gap: 10px;
  align-items: center;
  }

  .temperature {
  display: flex;
  gap: 15px;
  }

  .week-img {
    width: 60px;
  }

  .humidity-img {
    width: 20px;
  }
`