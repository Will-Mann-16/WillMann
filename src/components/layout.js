import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring';

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
    min-height: 100vh;
`;

const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    }
    margin: 10px 0;
`;

const Container = styled(animated.div)`
  margin: auto;
  max-width: 960px;
  background-color: ${({index}) => index ? 'rgba(39, 60, 117, 0.95)' : 'white'};
  ${({index}) => index && 'color: white;'}
  border-radius: 10px;
  padding: 14px 24px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12),
            0 2px 4px 0 rgba(0,0,0,0.08);
`;

const Layout = ({ children, location, index, style={} }) => {
  const {file: imageFile} = useStaticQuery(graphql`
  {
  file(relativePath: {
    regex: "/background/"
  }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
  `);
  const {opacity, y} = useSpring({opacity: 1, y: 0, from: {opacity: 0, y: -50}});
 return (
  <BackgroundImage fluid={imageFile.childImageSharp.fluid}>
      <Wrapper>
        <Header index={index} />
        <Main>
          <Container index={index} style={index ? 
          ({
            opacity,
            transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
            ...style
          }) : style}>
          {children}
          </Container>
        </Main>
        <Footer index={index} />
      </Wrapper>
      </BackgroundImage>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
