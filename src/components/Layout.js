import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Footer from './Footer/index'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  padding: 0px 1.0875rem 1.45rem;
`

const FooterWrapper = styled.div`
  margin: 1rem auto;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
  }
  max-width: 1800px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ContextProvider>
      <GlobalStyle />

      <Navigation />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
