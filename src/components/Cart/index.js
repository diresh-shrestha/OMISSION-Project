import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import useShopifyFunctions from '../../hooks/useShopifyFunctions'

import { Items, PriceContainer, CheckoutContainer, Button } from './styles'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const { updateItem, removeItem } = useShopifyFunctions()

  async function decreaseProductAmount({ id, quantity }) {
    if (quantity === 1) return
    try {
      await updateItem({ id, quantity: quantity - 1 })
    } catch (error) {
      console.error(error)
    }
  }

  async function increaseProductAmount({ id, quantity }) {
    try {
      await updateItem({ id, quantity: quantity + 1 })
    } catch (error) {
      console.error(error)
    }
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem
      key={item.id.toString()}
      item={item}
      decreaseProductAmount={decreaseProductAmount}
      increaseProductAmount={increaseProductAmount}
      removeItem={removeItem}
    />
  ))

  return (
    <Items style={{ maxWidth: `1500px` }}>
      {checkout.lineItems.map(item => (
        <React.Fragment>
          <LineItem
            key={item.id.toString()}
            item={item}
            decreaseProductAmount={decreaseProductAmount}
            increaseProductAmount={increaseProductAmount}
            removeItem={removeItem}
          />
        </React.Fragment>
      ))}
      <CheckoutContainer>
        <PriceContainer>
          <h2>Subtotal: </h2>
          <p style={{ margin: `0` }}>$ {checkout.subtotalPrice}</p>

          {/* <h2>Taxes</h2>
        <p>$ {checkout.totalTax}</p>
        <br />
        <h2>Total</h2>
        <p>$ {checkout.totalPrice}</p>
        <br /> */}
        </PriceContainer>
        <Button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </Button>
      </CheckoutContainer>
    </Items>
  )
}

export default Cart
