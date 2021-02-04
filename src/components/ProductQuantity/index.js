import React from 'react'

import { Container, Button, CounterContainer, Amount } from './styles'

const ProductQuantity = ({ currentAmount, increaseAmount, decreaseAmount }) => {
  return (
    <Container>
      <CounterContainer>
        <Button onClick={decreaseAmount}>-</Button>
      </CounterContainer>

      <Amount>{currentAmount}</Amount>
      <CounterContainer>
        <Button onClick={increaseAmount}>+</Button>
      </CounterContainer>
    </Container>
  )
}

export default ProductQuantity
