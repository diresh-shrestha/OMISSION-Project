import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { breakpoints } from '../../utils/styles'

export const ListItems = styled.li`
  display: inline-block;
  margin-right: 2rem;
`

export const ListWrapper = styled.ul`
  float: left;
  font-weight: bold;
  margin: auto 0;
  @media (max-width: 767px) {
    display: none;
  }
`

export const PageLink = styled(Link)`
  position: relative;
  padding: 0.2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
`
