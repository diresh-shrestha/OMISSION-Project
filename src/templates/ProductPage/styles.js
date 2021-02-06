import styled from 'styled-components'
import Img from 'gatsby-image'
import { breakpoints } from '../../utils/styles'

export const ProductTitle = styled.h1`
  font-size: 3rem;

  word-wrap: break-word;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
`

export const ProductDescription = styled.div`
  margin-top: 1rem;
  height: 840px;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 300;
  padding: 1rem;
  width: auto;
  overflow: auto;
  border: solid;
  border-width: 1px;
  @media (max-width: ${breakpoints.m}px) {
    overflow: none;
    height: auto;
  }
  img {
    @media (max-width: 530px) {
      width: 400px;
    }
    @media (max-width: 425px) {
      width: 300px;
    }
    @media (max-width: 425px) {
      width: 250px;
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  margin-bottom: 4rem;
`

export const Button = styled.button`
  min-width: 0px;
  width: 150px;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Work Sans', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #333;
  transition: all 0.3s ease 0s;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #333;
  &:hover {
    background-color: transparent;
    color: #333;
  }
`

export const StyledImg = styled(Img)``

export const HeadingContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
  }
`

export const HeadingLeft = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
`
export const HeadingRight = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 0.5rem;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
  }
`
