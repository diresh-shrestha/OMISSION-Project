import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/styles'
import { Link } from 'gatsby'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  height: 50px;
  margin-bottom: 2rem;
  padding: 1rem;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
  }
`
export const FooterImg = styled.img`
  height: 50px;
  width: 80px;
  margin: 1rem auto;
`

export const SocialContianer = styled.div`
  display: flex;
`

export const SocialLinks = styled.a`
  margin: 1rem;
  text-decoration: none;
  color: black;
  @media (max-width: ${breakpoints.s}px) {
    margin: auto;
  }
`
export const Copyright = styled.p`
  @media (max-width: ${breakpoints.s}px) {
    font-size: 0.8rem;
  }
`

export const LogoLink = styled(Link)`
  margin: 0;
  @media (max-width: ${breakpoints.s}px) {
    margin: auto;
  }
`
