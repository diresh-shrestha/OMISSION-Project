import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import 'normalize.css'

const CartPage = () => (
  <Container style={{ maxWidth: `1500px` }}>
    <h1>Cart</h1>
    <Cart />
  </Container>
)

export default CartPage
