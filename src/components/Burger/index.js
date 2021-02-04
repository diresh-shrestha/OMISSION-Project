import React from 'react'
import { MenuButton } from './styles'

const Burger = ({ open, setOpen }) => {
  return (
    <MenuButton open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
    </MenuButton>
  )
}

export default Burger
