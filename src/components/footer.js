import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  grid-area: footer;
  background-color: #192a56;
  color: white;
  font-size: 0.5rem;
`;
const CenterFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

const Icon = styled.a`
  padding: 10px 14px;
  color: white;
  text-decoration: none;
  font-size: 2rem;
  &:hover{
    color:  #192a56;
    background-color: white;
  }
  border-radius: 5px;
  margin: 5px;
`;

const Footer = ({ siteFooter }) => (
  <FooterWrapper>
    <CenterFlex>
    <Icon href="mailto:will@willmann.me.uk"><FaEnvelope/></Icon>
      <Icon href="https://github.com/Will-Mann-16"><FaGithub/></Icon>
      <Icon href="https://www.linkedin.com/in/will-mann-265574156/"><FaLinkedin/></Icon>
    </CenterFlex>
    <CenterFlex>
      <span>{siteFooter}</span>
    </CenterFlex>
  </FooterWrapper>
)

Footer.propTypes = {
  siteFooter: PropTypes.string,
}

Footer.defaultProps = {
  siteFooter: '',
}

export default Footer
