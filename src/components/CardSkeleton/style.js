import styled from 'styled-components'

export const SkeletonDayWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(90deg, rgb(129, 141, 146), rgb(88, 106, 106));

  .left-side-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 25px;
  }

  .right-side-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }
  `

export const SkeletonWeekWrapper = styled.div`
  display: flex;
  width: 91%;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border-radius: 20px;
  background-image: linear-gradient(90deg, rgb(129, 141, 146), rgb(88, 106, 106));

  .info-wrapper{
    display: flex;
    padding: 20px;
    gap: 50px;
  }
  `