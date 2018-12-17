import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer';
import './layout.css'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "header"
    "nav"
    "main"
    "footer";
    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 
        "header  nav"
        "main main"
        "footer footer";
    }
    height: 100vh;
`;

const Main = styled.main`
  grid-area: main;
  max-width: 960px;
  margin: auto;
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            meta
            footer
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} siteMeta={data.site.siteMetadata.meta} />
        <Main>
          {children}
        </Main>
        <Footer siteFooter={data.site.siteMetadata.footer} />
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
