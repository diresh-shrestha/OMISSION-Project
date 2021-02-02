import React, { useContext, useState, useRef } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import Logo from '../Logo/index'
import {
  CartCounter,
  Container,
  MenuLink,
  Wrapper,
  SidebarContainer,
} from './styles'
import { Cart } from '../Icons/Cart'
import NavItems from '../NavItems/index'
import Burger from '../Burger/index'
import Sidebar from '../Sidebar/index'
import { useOnClickOutside } from '../Sidebar/hooks'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = () => {
  const [hasItems, quantity] = useQuantity()

  const [open, setOpen] = useState(false)

  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <Wrapper>
      <Container>
        <SidebarContainer ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
        </SidebarContainer>

        <MenuLink to="/">
          <Logo />
        </MenuLink>
        <NavItems />

        <MenuLink to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          <Cart />
        </MenuLink>
      </Container>
    </Wrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
