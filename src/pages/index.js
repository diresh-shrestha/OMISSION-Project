import React from 'react'
import { graphql } from 'gatsby'

import 'normalize.css'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="Home"
      image={data.seoImg.childImageSharp.fluid}
      keywords={[`clothing`, `ecommerce`, `shopify`, `journalism`]}
    />
    <ProductGrid />
  </>
)

export default IndexPage

export const query = graphql`
  {
    seoImg: file(relativePath: { eq: "Images/omission.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
