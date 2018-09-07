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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  ul {
    list-style: none;
    li {
      // font-size: 0.8rem;
      text-align: left;
    }
  }
  p {
    text-align: center;
    // font-size: 0.8rem;
  }
  a {
    text-align: center;
    text-decaoration: none;
    color: gray;
    &:hover {
      color: #9f9f9f;
    }
  }
  h2, 
  h3{
    font-weight: lighter;
    text-align: center;
  }

  @media only screen and (max-width: 413px) {
    display: block;
  }
`;

const FooterContainer = styled.div`

  margin: 0 auto;
  max-width: 1280px;
  padding: 1.55rem;
  height: 195px;
  color: gray;
`;

const Footer = () => (
  <FooterWrapper>
    {/* <FooterContainer>
      <h2>Other Info</h2>
      <p>Tel: (510) 555-5555</p>
      <p>Email: lifewellnessfirst@gmail.com</p>
    </FooterContainer> */}
    <FooterContainer>
      <h2>Social Media</h2>
        <p>
          <a href="https://www.facebook.com/wellnessinsomaticcoaching/" target="_blank">Facebook</a>
        </p>
    </FooterContainer>
    
    <FooterContainer>
      <h2>Website by</h2>

        <p>
          Leo Torres
        </p>

    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
