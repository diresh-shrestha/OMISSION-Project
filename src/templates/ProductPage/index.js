import React, { useState } from 'react'
import { graphql } from 'gatsby'
import ReactCardFlip from 'react-card-flip'
import ReactImageMagnify from 'react-image-magnify'

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
  HeadingContainer,
  HeadingLeft,
  HeadingRight,
} from './styles'
import 'normalize.css'
import { over } from 'lodash'

const ProductPage = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const product = data.shopifyProduct
  const frontImageSrc = product.images[0].originalSrc
  const BackImageSrc = product.images[1].originalSrc
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
        <HeadingContainer>
          <HeadingLeft>
            <ProductTitle>{product.title}</ProductTitle>
          </HeadingLeft>
          <HeadingRight>
            <ProductForm product={product} />
          </HeadingRight>
        </HeadingContainer>

        <TwoColumnGrid>
          <GridLeft>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: frontImageSrc,
                  },
                  largeImage: {
                    src: frontImageSrc,
                    width: 1600,
                    height: 1600,
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImageContainerStyle: {
                    backgroundColor: `white`,
                  },
                  lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                  enlargedImagePosition: 'over',
                }}
              />
              {/* <ReactImageZoom
                width="400"
                height="250"
                zoomWidth="400"
                img={product.images[0].originalSrc}
              />  */}
              {/* <StyledImg
                key="front"
                fluid={product.images[0].localFile.childImageSharp.fluid}
                alt={product.title}
              /> */}
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: BackImageSrc,
                  },
                  largeImage: {
                    src: BackImageSrc,
                    width: 1600,
                    height: 1600,
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImageContainerStyle: {
                    backgroundColor: `white`,
                  },
                  lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                  enlargedImagePosition: 'over',
                }}
              />
              {/* <ReactImageZoom
                width="auto"
                height="250"
                zoomWidth="400"
                img={product.images[1].originalSrc}
              /> */}
              {/* <StyledImg
                key="back"
                fluid={product.images[1].localFile.childImageSharp.fluid}
                alt={product.title}
              /> */}
            </ReactCardFlip>
            <ButtonContainer>
              <Button onClick={() => setIsFlipped(state => !state)}>
                <p>SEE BACK</p>
              </Button>
            </ButtonContainer>
          </GridLeft>

          <GridRight>
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
