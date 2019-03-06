import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image';
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import { Spring } from 'react-spring';
import { Toggle } from 'react-powerplug';


const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderContainer = styled.div`
  margin-left: 10px;
`

const Thumbnail = styled(Img)`
  width: 120px;
  height: auto;
  border: 10px solid #dcdde1;
`;

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
  grid-area: header;
  background-color: #192a56;
  h1{
    color: white;
    text-decoration: none;
  }
  p{
    color: white;
  }
`;

const NavWrapper = styled.nav`
  grid-area: nav;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  background-color: #192a56;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px){
    flex-direction: column;
    height: ${({height}) => height}
  }
  .active:after{
    transform: scaleX(1);
  }
  a{
    text-align: center;
    color: white;
    text-decoration: none;
    padding: 12px 20px;
    &:after{
        display:block;
        content: '';
        border-bottom: solid 3px white;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    &:hover:after{
      transform: scaleX(1);
    }
  }
`;

const Hamburger = styled.div`
  margin-right: 30px;
  cursor: pointer;
  @media (min-width: 768px){
    display: none;
  }
  div {
      width: 35px;
      height: 5px;
      background-color: white;
      margin: 6px 0;
      transition: 0.4s;
      &:nth-child(1){
        ${({change}) => change ? 'transform: rotate(-45deg) translate(-9px, 6px)': ''};
      }
      &:nth-child(2){
        ${({change}) => change ? 'opacity: 0': ''};
      }
      &:nth-child(3){
        ${({change}) => change ? 'transform: rotate(45deg) translate(-8px, -8px)': ''};
      }
  }
`;

const Header = ({ siteTitle, siteMeta }) => (
  <StaticQuery 
    query={graphql`
      query HeaderQuery {
        file(relativePath: {
          regex: "/Profile/"
        }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
      render={data => (
  <Toggle>
  {({on, toggle}) => (
    <>
    <HeaderWrapper>
      <Flex>
      <Thumbnail fluid={data.file.childImageSharp.fluid} />
      <HeaderContainer>
      <h1 style={{ margin: 0 }}>
          {siteTitle}
        </h1>
        <p style={{ margin: 0 }}>
          {siteMeta}
        </p>
        </HeaderContainer>
        </Flex>
        <Hamburger change={on} onClick={toggle}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
      </HeaderWrapper>
            <NavWrapper height={on ? 'auto' : 0}>
            </NavWrapper>
  </>
          )}
        </Toggle>
      )}
      />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteMeta: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
  siteMeta: ''
}

export default Header
