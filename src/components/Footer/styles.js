import React from 'react'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  height: 50px;
  margin-bottom: 2rem;
  padding: 1rem;

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const FooterImg = styled.img`
  height: 50px;
  width: 80px;
`

export const SocialContianer = styled.div`
  display: flex;
`

export const SocialLinks = styled.a`
  margin: auto 0.5rem;
  text-decoration: none;
  color: black;
`
