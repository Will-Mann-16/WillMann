import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  grid-area: footer;
  background-color: #f5f6fa;
  color: #dcdde1;
  font-size: 0.5rem;
`;

const Footer = ({ siteFooter }) => (
  <FooterWrapper>
    <span>{siteFooter}</span>
  </FooterWrapper>
)

Footer.propTypes = {
  siteFooter: PropTypes.string,
}

Footer.defaultProps = {
  siteFooter: '',
}

export default Footer
