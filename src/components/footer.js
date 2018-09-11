import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

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
  path {
    &:hover {
      fill: #9f9f9f;
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
    li {
      margin-left: 115px;
    }
  }
`;


const FooterContainer = styled.div`
  // display: flex;
  // justify-content: space-around;
  list-style: none;
  margin: 0 auto;
  max-width: 1280px;
  padding: 1.55rem;
  height: 225px;
  color: gray;
  li {
    padding: 30px;
  }
  h3 {
    padding-top: 30px;
    font-size: 14px;
  }
  p {
    padding: 0;
    margin: 0 auto;
    font-size: 12px;
  }
`;

const Footer = () => (
  <FooterWrapper>
    {/* <FooterContainer>
      <h2>Other Info</h2>
      <p>Tel: (510) 555-5555</p>
      <p>Email: lifewellnessfirst@gmail.com</p>
    </FooterContainer> */}
    <FooterContainer id="social">

        <li>
          <SocialIcon url="https://www.facebook.com/wellnessinsomaticcoaching/" color="gray"/>
        </li>
        <li>
          {/* <SocialIcon  network="email" href="mailto: lifewellnessfirst@gmail.com?subject=Information request" /> */}
        </li>

    </FooterContainer>

    <FooterContainer id="webmaster">
    <a href="https://leo-torres.com" target="_blank">
      <h3>BobaBird Websites</h3>

        <p>
           - Leo Torres
        </p>
    </a>

    </FooterContainer>
  </FooterWrapper>
);

export default Footer;