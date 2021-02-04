import React, { useState } from 'react'
import { graphql } from 'gatsby'

import ReactCardFlip from 'react-card-flip'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import {
  ProductTitle,
  ProductDescription,
  ButtonContainer,
  Button,
  StyledImg,
} from './styles'

const ProductPage = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const product = data.shopifyProduct
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <StyledImg
                key="front"
                fluid={product.images[0].localFile.childImageSharp.fluid}
                alt={product.title}
              />

              <StyledImg
                key="back"
                fluid={product.images[1].localFile.childImageSharp.fluid}
                alt={product.title}
              />
            </ReactCardFlip>
            <ButtonContainer>
              <Button onClick={() => setIsFlipped(state => !state)}>
                <p>SEE BACK</p>
              </Button>
            </ButtonContainer>
          </GridLeft>
          <GridRight>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductForm product={product} />
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
