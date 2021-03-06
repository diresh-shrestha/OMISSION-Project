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
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from 'react-accordion-with-header'
import Instagram from '../components/Icons/Instagram'
import Personal from '../components/Icons/External'
import LinkedIn from '../components/Icons/LinkedIn'
import Behance from '../components/Icons/Behance'

import SEO from '../components/seo'

const TextContainer = styled.div`
  margin: 1rem;
  padding: 2rem;

  li {
    margin-bottom: 0.5rem;
  }
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
  margin-bottom: 1rem;
  line-height: 1.5;
  text-align: justify;
`

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ProfilePic = styled(Img)`
  width: 400px;

  @media (max-width: ${breakpoints.m}px) {
    width: 450px;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 300px;
  }
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
  margin: 0 auto;
  padding: 10px;
  background: #efefef;
  line-height: 1.5;
  text-align: justify;
  p {
    margin: 0;
  }
  @media (max-width: ${breakpoints.m}px) {
    max-width: 450px;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 300px;
  }
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
  @media (max-width: ${breakpoints.s}px) {
    font-size: 1rem;
  }
`

const OrgTitle = styled.div`
  font-weight: bold;
  margin: 5px;
  position: absolute;
  bottom: 10px;
  text-transform: uppercase;
  // opacity: ${({ hovered }) => (hovered ? '1' : '0')};
  transition: opacity 0.5s;
  color: white;
  font-size: 1rem;
  width: 100%;
  @media (max-width: ${breakpoints.s}px) {
    font-size: 0.7rem;
  }
`

const External = styled.a`
  float: right;
  margin-right: 1rem;
  color: white;
  &:hover {
    color: red;
  }
`

const PeopleContainer = styled.div`
  position: relative;
`

const StyledAccordionPanel = styled(AccordionPanel)`
  .is-expanded {
    max-height: 150px;
  }
`

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About Us" />
      <Container>
        <div
          style={{
            backgroundColor: `#efefef`,
            height: `fit-content`,
            marginTop: `10rem`,
          }}
        >
          <TextContainer>
            <Title>{data.markdownRemark.frontmatter.title}</Title>
            <Paragraph>
              {data.markdownRemark.frontmatter.firstParagraph}
            </Paragraph>
            <ol>
              <li>{data.markdownRemark.frontmatter.list1}</li>
              <li>{data.markdownRemark.frontmatter.list2}</li>
            </ol>
            <Paragraph>
              {data.markdownRemark.frontmatter.secondParagraph}
            </Paragraph>
            <Paragraph>
              {data.markdownRemark.frontmatter.thirdParagraph}
            </Paragraph>
          </TextContainer>
        </div>
        <div>
          <TextContainer>
            <Title style={{ textAlign: `center` }}>THE TEAM</Title>
          </TextContainer>
          <TeamContainer>
            <AccordionWithHeader style={{ display: `contents` }}>
              {data.people.edges.map((item, i) => {
                const { body, frontmatter } = item.node
                return (
                  <AccordionNode key={i}>
                    <AccordionHeader style={{ boxShadow: `none` }}>
                      <People>
                        <PeopleContainer>
                          <ProfilePic
                            fluid={frontmatter.image.childImageSharp.fluid}
                          />
                          <NameContainer>
                            <Name>{frontmatter.name}</Name>
                            <OrgTitle>
                              {' '}
                              <em style={{ float: `left` }}>
                                {frontmatter.title}
                              </em>
                              {frontmatter.link.Instagram ? (
                                <External
                                  rel="noreferrer"
                                  target="_blank"
                                  href={frontmatter.link.Instagram}
                                >
                                  <Instagram />
                                </External>
                              ) : null}
                              {frontmatter.link.Personal ? (
                                <External
                                  rel="noreferrer"
                                  target="_blank"
                                  href={frontmatter.link.Personal}
                                >
                                  <Personal />
                                </External>
                              ) : null}
                              {frontmatter.link.LinkedIn ? (
                                <External
                                  target="_blank"
                                  rel="noreferrer"
                                  href={frontmatter.link.LinkedIn}
                                >
                                  <LinkedIn />
                                </External>
                              ) : null}
                              {frontmatter.link.Behance ? (
                                <External
                                  rel="noreferrer"
                                  target="_blank"
                                  href={frontmatter.link.Behance}
                                >
                                  <Behance />
                                </External>
                              ) : null}
                            </OrgTitle>
                          </NameContainer>
                        </PeopleContainer>

                        {/* <Bio>
          <MDXRenderer>{body}</MDXRenderer>
        </Bio> */}
                      </People>
                    </AccordionHeader>
                    <StyledAccordionPanel>
                      <Bio>
                        <MDXRenderer>{body}</MDXRenderer>
                      </Bio>
                    </StyledAccordionPanel>
                  </AccordionNode>
                )
              })}
            </AccordionWithHeader>

            {/* <ProfilePic src={HunterPic} />

            <ProfilePic src={PaulPic} />
            <ProfilePic src={DireshPic} /> */}
          </TeamContainer>
        </div>
      </Container>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    people: allMdx(sort: { fields: frontmatter___order }) {
      edges {
        node {
          body
          frontmatter {
            title
            name
            link {
              Behance
              Instagram
              LinkedIn
              Personal
            }
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
    markdownRemark {
      frontmatter {
        title
        firstParagraph
        list1
        list2
        secondParagraph
        thirdParagraph
      }
    }
  }
`
