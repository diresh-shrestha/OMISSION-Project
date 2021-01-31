import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const ListItems = styled.li`
  display: inline-block;
  margin-right: 2rem;
`

export const ListWrapper = styled.ul`
  float: left;
  margin: auto 0;
`

export const PageLink = styled(Link)`
  position: relative;
  padding: 0.2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
`
