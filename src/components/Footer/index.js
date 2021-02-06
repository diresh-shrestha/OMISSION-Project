import React from 'react'
import { StyledFooter, FooterImg, SocialContianer, SocialLinks } from './styles'
import FooterLogo from './Footer_logo.png'
import { Link } from 'gatsby'
import Facebook from '../Icons/Facebook'
import Instragram from '../Icons/Instagram'

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <FooterImg src={FooterLogo} alt="OMISSION Project Alternate Logo" />
      </Link>
      <SocialContianer>
        <SocialLinks href="">
          <Facebook />
        </SocialLinks>
        <SocialLinks href="">
          <Instragram />
        </SocialLinks>
      </SocialContianer>
      <p> © {new Date().getFullYear()} - OMISSION Project</p>
    </StyledFooter>
  )
}

export default Footer
