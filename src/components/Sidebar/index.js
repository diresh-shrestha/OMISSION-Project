import React from 'react'
import { StyledMenu, ListItems, StyledUl, Inner, StyledLink } from './styles'
import MenuItems from '../NavItems/MenuItems'

const Sidebar = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Inner>
        <StyledUl>
          {MenuItems.map(item => {
            return (
              <StyledLink to={item.url}>
                <ListItems>{item.title}</ListItems>
              </StyledLink>
            )
          })}
        </StyledUl>
      </Inner>
    </StyledMenu>
  )
}

export default Sidebar
