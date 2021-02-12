import React from 'react'
import {
  StyledFooter,
  FooterImg,
  SocialContianer,
  SocialLinks,
  Copyright,
  LogoLink,
} from './styles'
import FooterLogo from './omission.svg'
import { Link } from 'gatsby'
import Facebook from '../Icons/Facebook'
import Instragram from '../Icons/Instagram'
import Mail from '../Icons/Mail'

const Footer = () => {
  return (
    <StyledFooter>
      <LogoLink to="/">
        <FooterImg src={FooterLogo} alt="OMISSION Project Alternate Logo" />
      </LogoLink>
      <SocialContianer>
        <SocialLinks
          href="https://www.instagram.com/omission.project/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <Instragram />
        </SocialLinks>
        <SocialLinks href="mailto:omissionproject@gmail.com">
          <Mail />
        </SocialLinks>
      </SocialContianer>
      <Copyright> © {new Date().getFullYear()} - OMISSION Project</Copyright>
    </StyledFooter>
  )
}

export default Footer
