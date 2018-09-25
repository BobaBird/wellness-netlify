import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from "../components/layout";



const OuterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const ImageOverlay = styled.div`
  position: relative;
  background: rgba(20,20,20, 0.3);
`;

const ContainerWrapper = styled.div`
  position: relative;
  z-index: 10;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  max-width: 960px;
  min-height: 80vh;
  // color: #4d4d4d;
  color: #fff;
  // background-image: radial-gradient( rgba(41, 40, 68, 0.8), rgba(41, 40, 68, 0.6), rgba(41, 40, 68, 0.4));
  text-shadow: 2px 2px 8px rgba(10 ,10, 10, 0.9), -2px -2px 8px rgba(10, 10, 10, 0.9);
  p {
    text-shadow: 2px 2px 20px rgba(2, 2, 2, 0.9), -2px -2px 20px rgba(2, 2, 2, 0.9);
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  a {
    color: #fff;
    &:hover {
      color: orange;
      border-bottom: 2px solid;
    }
  }
`;

const About = ({ data }) => (
  <Layout>
    <OuterWrapper>

      <ImageOverlay>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '130vh',
            opacity: 0.8,
          }}
          sizes={data.background.fluid}
        />
      </ImageOverlay>
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
  </Layout>
);

export default About;

export const query = graphql`
  query aboutSite {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(fluid: {originalName: {eq: "about-1.jpg" }}) {
			fluid(maxWidth: 1240) {
      ...GatsbyImageSharpFluid
    }
  }
  }
`