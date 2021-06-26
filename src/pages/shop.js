import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import 'normalize.css'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      image={data.seoImg.childImageSharp.fluid}
      keywords={[`clothing`, `ecommerce`, `shopify`, `journalism`]}
    />
    <ProductGrid />
  </Layout>
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
