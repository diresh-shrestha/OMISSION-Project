import React, { useState } from 'react'
import { graphql } from 'gatsby'
import ReactCardFlip from 'react-card-flip'
import ReactImageMagnify from '@milosmladenovicwork/react-image-magnify'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import { Container, TwoColumnGrid, GridLeft, GridRight } from '~/utils/styles'
import {
  ProductTitle,
  ProductDescription,
  ButtonContainer,
  Button,
  HeadingContainer,
  HeadingLeft,
  HeadingRight,
  StickyLeft,
} from './styles'
import 'normalize.css'

const ProductPage = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const product = data.shopifyProduct
  const frontImageSrc = product.images[0].originalSrc
  const BackImageSrc = product.images[1].originalSrc
  return (
    <>
      <SEO
        title={product.title}
        description={product.description}
        image={product.images[0].localFile.childImageSharp.fluid}
      />
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
            <StickyLeft>
              <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: product.title,
                      isFluidWidth: true,
                      src: frontImageSrc,
                    },
                    largeImage: {
                      src: frontImageSrc,
                      width: 1300,
                      height: 1300,
                    },
                    isHintEnabled: true,
                    shouldHideHintAfterFirstActivation: true,
                    enlargedImageContainerStyle: {
                      backgroundColor: `white`,
                    },
                    lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                    enlargedImagePosition: 'over',
                  }}
                />

                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: product.title,
                      isFluidWidth: true,
                      src: BackImageSrc,
                    },
                    largeImage: {
                      src: BackImageSrc,
                      width: 1300,
                      height: 1300,
                    },
                    isHintEnabled: true,
                    shouldHideHintAfterFirstActivation: true,
                    enlargedImageContainerStyle: {
                      backgroundColor: `white`,
                    },
                    lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                    enlargedImagePosition: 'over',
                  }}
                />
              </ReactCardFlip>
              <ButtonContainer>
                <Button onClick={() => setIsFlipped(state => !state)}>
                  {isFlipped ? 'SEE FRONT' : 'SEE BACK'}
                </Button>
              </ButtonContainer>
            </StickyLeft>
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
