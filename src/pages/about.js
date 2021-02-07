import React from 'react'
import {
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
  breakpoints,
  Img,
} from '../utils/styles'
import 'normalize.css'
import styled from 'styled-components'
import HunterPic from '../../content/Images/Hunter-Pic.jpg'
import RobertPic from '../../content/Images/Robert.jpeg'
import PaulPic from '../../content/Images/Paul.jpg'
import DireshPic from '../../content/Images/Diresh.jpg'

const TextContainer = styled.div`
  margin: 1rem;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
  margin-top: 0;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 2rem;
  }
`
const Paragraph = styled.p`
  margin-bottom: 5rem;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const ProfilePic = styled.img`
  max-width: 200px;
  margin: 1rem;
  -webkit-filter: grayscale(1);
`

const About = () => {
  return (
    <Container>
      <TwoColumnGrid>
        <GridLeft style={{ backgroundColor: `#efefef` }}>
          <TextContainer>
            <Title>MISSION</Title>
            <Paragraph>
              Our mission is to organize a community to engage with journalism
              and celebrate the work of individuals in the field. Through the
              medium of clothing, we aim to put garments in conversation with
              media ecology; bringing awareness to media literacy and the
              contemporary conditions of the digital landscape.
            </Paragraph>
            <Title>JOURNALISM FUND</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </TextContainer>
        </GridLeft>
        <GridRight>
          <TextContainer>
            <Title style={{ textAlign: `center` }}>WHO WE ARE</Title>
          </TextContainer>
          <ImgContainer>
            <ProfilePic src={RobertPic} />
            <ProfilePic src={HunterPic} />

            <ProfilePic src={PaulPic} />
            <ProfilePic src={DireshPic} />
          </ImgContainer>
        </GridRight>
      </TwoColumnGrid>
    </Container>
  )
}

export default About
