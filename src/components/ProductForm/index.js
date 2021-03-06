import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Check from '../Icons/Check'
import Cross from '../Icons/Cross'

import {
  Select,
  SelectContainer,
  Button,
  ButtonContainer,
  CounterContainer,
  StyledLabel,
  Price,
  Modal,
  PageLink,
} from './styles'
import ChevronDown from '../Icons/ChevronDown'
import ProductQuantity from '../ProductQuantity/index'

import StoreContext from '~/context/StoreContext'

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  function increaseAmount() {
    setQuantity(a => a + 1)
  }

  function decreaseAmount() {
    setQuantity(a => (a <= 1 ? 1 : a - 1))
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const [showModal, setShowModal] = useState(false)

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  return (
    <>
      <Price>{price}</Price>

      {options.map(({ id, name, values }, index) => (
        <React.Fragment key={id}>
          <StyledLabel htmlFor={name}>{name} </StyledLabel>
          <SelectContainer>
            <Select
              name={name}
              key={id}
              onChange={event => handleOptionChange(index, event)}
            >
              {values.map(value => (
                <option
                  value={value}
                  key={`${name}-${value}`}
                  disabled={checkDisabled(name, value)}
                >
                  {value}
                </option>
              ))}
            </Select>
            <ChevronDown />
          </SelectContainer>

          <br />
        </React.Fragment>
      ))}
      <CounterContainer>
        <StyledLabel htmlFor="quantity">Quantity </StyledLabel>
        <ProductQuantity
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          currentAmount={quantity}
        />
      </CounterContainer>

      {/* <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      /> */}
      <br />
      <ButtonContainer>
        <Button
          type="submit"
          disabled={!available || adding}
          // onClick={handleAddToCart}
          onClick={() => {
            setShowModal(true)
            handleAddToCart()
          }}
        >
          Pre-Order
        </Button>
      </ButtonContainer>
      <Modal
        tabIndex="0"
        onClick={() => setShowModal(!showModal)}
        showModal={showModal}
      >
        {/* <div>
          <Cross />
        </div> */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ margin: 'auto' }}>
            <Check />
          </div>
          <div style={{ margin: 'auto', marginTop: `1rem` }}>
            <p style={{ margin: `0` }}>Item added to cart!</p>
            <Button>
              <PageLink to="/cart">View Bag</PageLink>
            </Button>
          </div>
        </div>
      </Modal>

      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
