import React, { useState } from 'react'
import {
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
  breakpoints,
} from '../utils/styles'
import 'normalize.css'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

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

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ProfilePic = styled(Img)`
  width: 300px;
`

const People = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem;
  text-align: center;
  p {
    &:hover {
      opacity: 1;
    }
  }
`

const Bio = styled.div`
  max-width: 400px;
`

const NameContainer = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease 0s;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    opacity: 1;
  }
  @media (max-width: ${breakpoints.m}px) {
    opacity: 1;
  }
`

const Name = styled.div`
  font-weight: bold;
  margin: 5px;
  position: absolute;
  bottom: 40px;
  text-transform: uppercase;
  // opacity: ${({ hovered }) => (hovered ? '1' : '0')};
  transition: opacity 0.5s;
  color: white;
  font-size: 1.5rem;
`

const PeopleContainer = styled.div`
  position: relative;
`

const About = ({ data }) => {
  const about = data.about.edges.map(abt => {
    const { body, frontmatter } = abt.node
    return (
      <People>
        <PeopleContainer>
          <ProfilePic fluid={frontmatter.image.childImageSharp.fluid} />
          <NameContainer>
            <Name>{frontmatter.name}</Name>
          </NameContainer>
          {/* <Name>
            <em>{frontmatter.title}</em>
          </Name> */}
        </PeopleContainer>

        {/* <Bio>
          <MDXRenderer>{body}</MDXRenderer>
        </Bio> */}
      </People>
    )
  })
  return (
    <Container>
      <TwoColumnGrid>
        <GridLeft style={{ backgroundColor: `#efefef`, height: `fit-content` }}>
          <TextContainer>
            <Title>MISSION</Title>
            <Paragraph>
              Our mission is to organize a community to engage with journalism
              and celebrate the work of individuals in the field. Through the
              medium of clothing, we aim to put garments in conversation with
              media ecology; bringing awareness to media literacy and the
              contemporary conditions of the digital landscape.
            </Paragraph>
            <Title>ASPIRING JOURNALIST FUND</Title>
            <Paragraph>
              50% of proceeds contribute to the Aspiring Journalist Fund, which
              is dedicated to financially supporting investigative journalism
              projects. We prioritize coverage of local communities and
              encourage university students to apply for grants with their story
              proposals via email.
            </Paragraph>
            <Title>BEHIND THE NAME</Title>
            <Paragraph>
              Omission Project started from an awareness of shrinking newsrooms
              across the United States, and the downstream impact on public
              trust with “the media”. As news has become more centralized, it is
              more likely for people to not see themselves represented in
              national narratives. With this in mind, people who don't see their
              own reality reflected in the news are more likely to perceive
              biased reporting. In this context, “Omission” refers to two
              elements:
              <ol>
                <li>
                  The omission of local community voices in news coverage.
                </li>
                <li>
                  Our trust in journalists to omit information while maintaining
                  the integrity of a story
                </li>
              </ol>
              We aim to spotlight these two elements by growing the broader
              journalism community and bringing awareness to media literacy.
            </Paragraph>
          </TextContainer>
        </GridLeft>
        <GridRight>
          <TextContainer>
            <Title style={{ textAlign: `center` }}>THE TEAM</Title>
          </TextContainer>
          <TeamContainer>
            {about}

            {/* <ProfilePic src={HunterPic} />

            <ProfilePic src={PaulPic} />
            <ProfilePic src={DireshPic} /> */}
          </TeamContainer>
        </GridRight>
      </TwoColumnGrid>
    </Container>
  )
}

export default About

export const query = graphql`
  {
    about: allMdx(sort: { fields: frontmatter___order }) {
      edges {
        node {
          body
          frontmatter {
            title
            name
            image {
              childImageSharp {
                fluid(grayscale: true) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
