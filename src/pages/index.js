import React from 'react'

import 'normalize.css'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO keywords={[`clothing`, `ecommerce`, `shopify`, `journalism`]} />
    <ProductGrid />
  </>
)

export default IndexPage
