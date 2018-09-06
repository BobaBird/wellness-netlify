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
  // color: #4d4d4d;
  color: #fff;
  // background-image: radial-gradient( rgba(41, 40, 68, 0.8), rgba(41, 40, 68, 0.6), rgba(41, 40, 68, 0.4));
  text-shadow: 2px 2px 8px #4d4d4d, -2px -2px 8px #4d4d4d;
  p {
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
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

const About = ({ data }) => (
  <OuterWrapper>

    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        opacity: 0.8,
      }}
      sizes={data.background.sizes}
    />
    <ContainerWrapper>
      <h1>About Me</h1>
      <p>
        Hi my name is Sunny Donaire. I am a transgender male born and raised in Tupi South Cotabato,
        Mindanao, Philippines, where I earned a Midwifery degree in 1999. I Arrived here in America
        in 2001, graduated from the Skyline College's Respiratory Therapy Program in 2006, and went
        on to earn a BA in Interdisciplinary Studies and Masters in Psychological Studies, and
        trained in Somatic Psychotherapy from California Institute of Integral Studies in 2016.
      </p>

      <Link to="#">Go back to the top</Link>

    </ContainerWrapper>
  </OuterWrapper>
);

export default About;

export const query = graphql`
  query aboutSite {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: {regex: "/about-bg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`