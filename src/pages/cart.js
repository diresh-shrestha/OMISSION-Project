import React from 'react'
import Layout from '../components/Layout'
import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import 'normalize.css'
import SEO from '../components/seo'

const CartPage = () => (
  <Layout>
    <SEO title="Cart" />
    <Container style={{ maxWidth: `1500px` }}>
      <h1>Cart</h1>
      <Cart />
    </Container>
  </Layout>
)

export default CartPage
