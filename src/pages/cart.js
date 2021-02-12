import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import 'normalize.css'
import SEO from '../components/seo'

const CartPage = () => (
  <>
    <SEO title="Cart" />
    <Container style={{ maxWidth: `1500px` }}>
      <h1>Cart</h1>
      <Cart />
    </Container>
  </>
)

export default CartPage
