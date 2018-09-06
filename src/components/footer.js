import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  background-color: #282C33;
  position: static;
  width: 100vw;
  bottom: 0;
  left: 0;
  h2 {
    font-weight: lighter;
  }
`;

const FooterContainer = styled.div`

  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  height: 180px;
  color: gray;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <h2>Other Info</h2>
    </FooterContainer>
    <FooterContainer>
      <h2>Social Media</h2>
    </FooterContainer>
    <FooterContainer>
      <h2>Webmaster</h2>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
