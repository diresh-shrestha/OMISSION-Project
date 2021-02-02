import styled from 'styled-components'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
`

export const Container = styled.div`
  background: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 1500px;
`

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin: auto 0;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 0 5px;
  font-size: 1rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

export const SidebarContainer = styled.div`
  @media (min-width: ${breakpoints.m}px) {
    display: none;
  }
`
