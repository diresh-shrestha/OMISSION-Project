import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 2rem 0 2rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  box-sizing: border-box;
  min-width: 0px;
  border-width: 1px;
  border-bottom: solid;
  border-color: #dddddf;
`

export const ProductImage = styled.img`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  max-width: 100%;
  height: auto;
  width: 130px;

  @media (max-width: 768px) {
    width: 500px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  font-size: 1.5rem;
  margin: 0 2rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

export const PriceContainer = styled.div`
  width: 10%;
  padding: 16px;
  display: flex;
  justify-content: center;
`

export const Size = styled.p`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 16px;
  line-height: 1;
  display: flex;
  opacity: 0.7;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const ImageContainer = styled.div`
  padding: 5px;
  margin-right: 1rem;
`

export const RemoveContainer = styled.div`
  cursor: pointer;
  margin: 0 auto;
`
