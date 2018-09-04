import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const mediaSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1082px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(max-width: ${mediaSize.mobileS})`,
  mobileM: `(max-width: ${mediaSize.mobileM})`,
  mobileL: `(max-width: ${mediaSize.mobileL})`,
  tablet: `(max-width: ${mediaSize.tablet})`,
  laptop: `(max-width: ${mediaSize.laptop})`,
  laptopL: `(max-width: ${mediaSize.laptopL})`,
  desktop: `(max-width: ${mediaSize.desktop})`,
  desktopL: `(max-width: ${mediaSize.desktop})`
};

const HeaderWrapper = styled.div`
  max-width: 100%;
  position: relative;
  background: #1f70f2;
  // padding: 1.25rem 1.0675rem;
  padding-top: 1.40rem;
  display: flex;
  // justify-content: space-between;
  h1 {
    color: white;
    font-size: 3rem;
    font-weight: lighter;
    padding-right: 4rem;
  }
  a {
    text-decoration: none;
  }
`;
const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0 auto;

    @media only screen and (min-width: 1082px) {
      h1 {
        padding-left: 1.25rem;
      }
      
    }

    @media only screen and (max-width: 425px) {
      h1 {
        padding-left: 1.25rem;
        padding-right: 0;
      }
    }
`;

const MainNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    font-weight: 200;
    list-style: none;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    a {
      font-size: 1.15rem;
      text-decoration: none;
      color: #fff;
      &:hover {
        color: orange;
        // border-bottom: 2px solid;
      }
    }
    }
    @media ${device.laptop} {
      display: block;
      border-left: 1px solid #fff;
      padding-right: 1.25rem;
    }
  }
`;


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link to="/" style={{ color: '#fff' }}>
          {siteTitle}
          <h3 style={{ color: '#7aceff', fontWeight: 200, marginLeft: '5px' }}>Sunny Donaire MA, C.L.C., Somatic Life Coach</h3>
        </Link>
      </h1>

      <MainNav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/my-practice">My Practice</Link>
          </li>

          <li>
            <Link to="/services">Client Services</Link>
          </li>

          <li>
            <Link to="/referrals">Referrals</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      </MainNav>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
