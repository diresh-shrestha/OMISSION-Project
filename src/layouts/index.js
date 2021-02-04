import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Footer from '../components/Footer/index'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  padding: 0px 1.0875rem 1.45rem;
`

const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 1800px;
`

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation siteTitle={data.site.siteMetadata.title} />
            <Wrapper>
              <main>{children}</main>
            </Wrapper>
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
