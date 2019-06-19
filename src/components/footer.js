import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useMetadata } from './hooks';

const FooterWrapper = styled.footer`
  grid-area: footer;
  ${({index}) => index ? 'background-image: linear-gradient(to bottom, rgba(25, 42, 86, 0), rgba(25, 42, 86, 1))' : 'background-color: #192a56' };
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

const Footer = ({ index }) => {
  const { footer } = useMetadata();
  return (
  <FooterWrapper index={index}>
    <CenterFlex>
    <Icon href="mailto:will@willmann.me.uk"><FaEnvelope/></Icon>
      <Icon href="https://github.com/Will-Mann-16"><FaGithub/></Icon>
      <Icon href="https://www.linkedin.com/in/will-mann-265574156/"><FaLinkedin/></Icon>
    </CenterFlex>
    <CenterFlex>
      <span>{footer}</span>
    </CenterFlex>
  </FooterWrapper>
)}
export default Footer
