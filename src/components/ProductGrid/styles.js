import styled from 'styled-components'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;

  :before {
    content: '- ';
  }
`
