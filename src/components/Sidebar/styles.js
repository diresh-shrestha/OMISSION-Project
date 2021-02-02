import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  width: 200px;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`

export const Inner = styled.div`
  position: absolute;
  display: block;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 15px 0;
  overflow: auto;
`

export const StyledUl = styled.ul`
  display: block;

  box-sizing: border-box;
  list-style: none;
`

export const ListItems = styled.li`
  box-sizing: border-box;
  vertical-align: top;
  color: white;
  display: block;
`

export const StyledLink = styled(Link)`
  background-position: left center;
  display: block;
  outline-offset: 0;
  padding: 1rem 0;
  letter-spacing: 0.2rem;
  width: auto;
  max-width: none;
  text-decoration: none;
`
