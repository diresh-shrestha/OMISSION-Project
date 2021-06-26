import React, { useState } from 'react'
import {
  Container,
  LogoImg,
  Content,
  MenuButton,
  PageLink,
  ListWrapper,
  ListItems,
  StyledList,
} from './styles'
import Logo from '../Logo/OMMISSION.svg'
import { Link } from 'gatsby'

const Main = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} />
        </Link>
        <div
          style={{
            display: 'flex',
            height: '100px',
            width: '200px',
            marginTop: '1rem',
          }}
        >
          <MenuButton open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
          </MenuButton>
          <ListWrapper open={open}>
            <StyledList>
              <ListItems>
                <PageLink to="/shop">SHOP</PageLink>
              </ListItems>
              <ListItems>
                <PageLink to="/about">ABOUT US</PageLink>
              </ListItems>
              <ListItems>
                <PageLink to="/contact">CONTACT</PageLink>
              </ListItems>
            </StyledList>
          </ListWrapper>
        </div>
      </Content>
    </Container>
  )
}

export default Main
