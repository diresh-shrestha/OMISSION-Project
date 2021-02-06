import React from 'react'
import { Container } from '../utils/styles'
import 'normalize.css'
import styled from 'styled-components'

const Main = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

const About = () => {
  return (
    <Container>
      <Main>
        <h1>Mission</h1>
        <p>
          Our mission is to organize a community to engage with journalism and
          celebrate the work of individuals in the field. Through the medium of
          clothing, we aim to put garments in conversation with media ecology;
          bringing awareness to media literacy and the contemporary conditions
          of the digital landscape.
        </p>
      </Main>
    </Container>
  )
}

export default About
