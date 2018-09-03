import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Checkout from '../components/checkout';

const mediaSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '413px',
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

const OuterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;
`;

const ContainerWrapper = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  // max-width: 960px;
  min-height: 80vh;
  color: #4d4d4d;
  p {
      
  }
  a {
    color: #4d4d4d;
    &:hover {
      color: orange;
      border-bottom: 2px solid;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.45rem 1.0875rem 1.45rem;

  @media ${device.laptop} {
    display: inline-block;
    justify-content: space-around;
    padding-left: 1rem;
  }
  @media ${device.mobileL} {
    padding: 0;
  }
`;


const Card = styled.div`
  position: relative;
  margin: 12px;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  width: 350px;
  min-width: 350px;
  height: 504px;
  min-height: 304px;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
   p {
     padding: 1rem;
     font-size: 14px;
   }

  @media ${device.laptop} {
    margin: 1rem auto;
  }

  @media ${device.mobileL} {
    margin: 1rem auto;
    // margin-left: 0;
  }
`;




const Services = ({ data }) => (
  <OuterWrapper>
    <ContainerWrapper>

    <h1>Services Offered</h1>
    <br />
    <p>Individuals,</p>
    <p>Couples & Families</p>
    <p>SPECIALTY:</p>
    <p>LGBTQ</p>
    <p>SOMATIC PRACTICE</p>
    <p>PYSCHOLOGICAL STUDIES</p>
    <p>MULTICULTURAL Adaptation</p>
    <p>GENDER Identity and Expression</p>
    <p>BILINGUAL  in TAGALOG & ENGLISH</p>

    <CardContainer>
      <Card>
        <Img 
        style={{
        position: 'relative',
        // left: 0,
        top: 0,
        // width: '100vw',
        height: '200px',
      }}
        sizes={data.single.sizes} />
        <p>
          It is my privilege to accompany you in one-on-one on a journey to excavate and heal pain of body and mind, unlock potential, and build toward empowered, integrated embodiment.
          Book Online
          Individual Counseling
          1 hr
          $50-$75
        </p>
      </Card>

      <Card>
        <Img
        style={{
        position: 'relative',
        // left: 0,
        top: 0,
        // width: '100vw',
        height: '200px',
      }}
         sizes={data.couple.sizes} />
        <p>
          Couples coaching creates a safe space in which to shine the light of awareness on unaddressed resentment, fear, and avoidance, clarify boundaries, needs and agreements, overcome painful patterns, build or rebuild trust, and co-create a vibrant new relationship vision.
          Book Online
          Couples Coaching
          1 hr
          $80-$120
        </p>
      </Card>

      <Card>

        <div>
        <Img
        style={{
        position: 'relative',
        // left: 0,
        top: 0,
        // width: '350px',
        height: '200px',
        }}
         sizes={data.family.sizes} />
        </div>

        <p>
          Family coaching creates a safe space to bring old and new wounds out into the light to be healed, untangle misunderstanding, break down and release judgments, and bridge differences. Every family is unique. Some families are better suited to group sessions. In other cases, a single family member  hiring a coach may be more appropriate and can still have a powerful ripple effect on all parties involved.
          Book Online
          Families
          1 hr
          $100-$150
        </p>
      </Card>
    </CardContainer>

    <Checkout />

    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>

    </ContainerWrapper>
  </OuterWrapper>
);

export default Services;

export const query = graphql`
  query servicesPage {
    site {
      siteMetadata {
        title
      }
    }
    single: imageSharp(id: {regex: "/couple-card/"}) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    couple: imageSharp(id: {regex: "/couple-card/"}) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    family: imageSharp(id: {regex: "/couple-card/"}) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`