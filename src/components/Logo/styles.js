import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/styles'

export const Container = styled.div``

export const LogoImg = styled.img`
  height: 60px;
  width: 80px;

  @media (max-width: ${breakpoints.m}px) {
    height: 50px;
    width: 60px;
  }
`
