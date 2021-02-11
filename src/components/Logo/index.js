import React from 'react'
import { Container, LogoImg } from './styles'
import MainLogo from './OMMISSION.svg'

export default function Logo() {
  return (
    <Container>
      <LogoImg src={MainLogo} alt="" />
    </Container>
  )
}
