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
const CenterFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

const Footer = ({ siteFooter }) => (
  <FooterWrapper>
    <CenterFlex>

    </CenterFlex>
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
