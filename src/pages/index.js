import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';


const OuterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const ContainerWrapper = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  max-width: 960px;
  min-height: 80vh;
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  // color: #4d4d4d;
  color: #fff;
  p {
    
  }
  a {
    // color: #4d4d4d;
    color: #fff;
    &:hover {
      color: orange;
      border-bottom: 2px solid;
    }
  }
`;

const IndexPage = ({ data }) => (
  <OuterWrapper>

    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '130vh',
        opacity: 0.8,
      }}
      sizes={data.background.sizes}
    />

    <ContainerWrapper>
      <h1>Discovering wellness</h1>
      <h1>However you define it!</h1>

      <br/>
      <br/> 
      <Link to="/my-practice/">Go to My Practice</Link>
      <br />
      <Link to="/About/">Go to About Me</Link>
      <br />
      <Link to="/contact/">Go to Contact</Link>

    </ContainerWrapper>

  </OuterWrapper>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: {regex: "/home-page/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
