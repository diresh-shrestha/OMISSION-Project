import React from 'react'
import { StyledFooter, FooterImg } from './styles'
import FooterLogo from './Footer_logo.png'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <FooterImg src={FooterLogo} alt="OMISSION Project Alternate Logo" />
      </Link>
      <p> © {new Date().getFullYear()} - OMISSION Project</p>
    </StyledFooter>
  )
}

export default Footer
