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
    grid-auto-rows: auto auto 1fr auto;
    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 
        "header  nav"
        "main main"
        "footer footer";
        grid-auto-rows: auto 1fr auto;
    }
    height: 100vh;
`;

const Main = styled.main`
  grid-area: main;
  background-color: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    }
`;

const Container = styled.div`
  margin: auto;
  max-width: 960px;
  background-color: white;
  border-radius: 10px;
  padding: 14px 24px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12),
            0 2px 4px 0 rgba(0,0,0,0.08);
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
          <Container>
          {children}
          </Container>
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
