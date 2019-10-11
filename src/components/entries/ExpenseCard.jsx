import React from 'react'
import styled from 'styled-components'

const StyledExpenseCard = styled.div`
  -webkit-animation: fadeLeft;
  -moz-animation: fadeLeft;
  -o-animation: fadeLeft;
  animation: fadeLeft;
  -webkit-animation-duration: 1.5s;
  -moz-animation-duration: 1.5s;
  -o-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-box-shadow: 0 6px 20px 0 rgba(38, 198, 218, .5) !important;
  box-shadow: 0 6px 20px 0 rgba(38, 198, 218, .5) !important;

  background: #0288d1;
  background: -webkit-linear-gradient(45deg, #0288d1, #26c6da) !important;
  background: -moz-oldlinear-gradient(45deg, #0288d1, #26c6da) !important;
  background: -o-linear-gradient(45deg, #0288d1, #26c6da) !important;
  background: linear-gradient(45deg, #0288d1, #26c6da) !important;

  min-height: 100px !important;
`

const ExpenseCard = (props) => {
  const { value, name, category} = props;
  return (
    <StyledExpenseCard>
      <p>{name}</p>
      <p>{value}</p>
    </StyledExpenseCard>
  )
}

export default ExpenseCard;
