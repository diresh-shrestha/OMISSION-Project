import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProductTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
`

export const ProductDescription = styled.div`
  margin-top: 40px;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 300;
  padding: 1rem;
  margin: 2rem auto;
  width: auto;
  height: 500px;
  overflow: auto;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`

export const Button = styled.button`
  display: flex;
  background: black;

  &:hover {
    background: #121212;
  }
  transition: background 0.5s;
  p {
    color: white;
    margin: 0.5rem;
  }
`

export const StyledImg = styled(Img)``
