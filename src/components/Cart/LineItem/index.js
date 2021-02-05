import React, { useContext } from 'react'
import { Link } from 'gatsby'

import ProductCounter from '../../ProductQuantity/index'

import StoreContext from '~/context/StoreContext'
import {
  Wrapper,
  ProductImage,
  TextWrapper,
  ImageContainer,
  Size,
  PriceContainer,
  RemoveContainer,
} from './styles'
import Cross from '../../Icons/Cross'

const LineItem = props => {
  const { item, increaseProductAmount, decreaseProductAmount } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const { id, quantity } = item

  const variantImage = item.variant.image ? (
    <ProductImage
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
    />
  ) : null

  function formatPrice(price, locales, currency) {
    return new Intl.NumberFormat(locales, {
      style: 'currency',
      currency,
    }).format(price)
  }

  const displayPrice = formatPrice(Number(item.variant.price), `en-US`, `USD`)

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(option => `${option.value} `)
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Wrapper>
      {console.log(item)}
      <ImageContainer>
        <Link to={`/product/${item.variant.product.handle}/`}>
          {variantImage}
        </Link>
      </ImageContainer>

      <TextWrapper>
        <p>
          {item.title}
          {`  `}
          {item.variant.title === !'Default Title' ? item.variant.title : ''}
        </p>
        <Size>{selectedOptions}</Size>
      </TextWrapper>
      <PriceContainer>{displayPrice}</PriceContainer>
      <ProductCounter
        currentAmount={item.quantity}
        decreaseAmount={() => decreaseProductAmount({ id, quantity })}
        increaseAmount={() => increaseProductAmount({ id, quantity })}
      />
      <RemoveContainer onClick={handleRemove}>
        <Cross />
      </RemoveContainer>

      {/* <button onClick={handleRemove}>Remove</button> */}
    </Wrapper>
  )
}

export default LineItem
