import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  max-width: 100%;
  max-height: 18vh;
  position: relative;
  background: #1f70f2;
  // padding: 1.45rem 1.0875rem;
  padding-top: 1.40rem;
  display: flex;
  // justify-content: space-between;
  h1 {
    color: white;
    font-weight: lighter;
    padding-right: 4rem;
  }
`;
const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0 auto;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    li {
      margin-left: 6px;
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
