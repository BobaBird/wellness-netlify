import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// import Layout from "../components/layout";


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

  @media only screen and (max-width: 1082px) {
    max-width: 100vw;
    padding: 0 auto;
  }
`;

const ContainerWrapper = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  margin-top: 1.45rem;
  /* max-width: 960px; */
  min-height: 80vh;
  color: #4d4d4d;
  h2 {
    font-weight: 300;
  }
  article {
    p {
      font-weight: 200;
      font-size: 1.5rem;
      line-height: 2.8rem;
    }
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
  justify-content: space-around;
  padding: 1.45rem 1.0875rem 1.45rem;

  @media ${device.laptop} {
    display: inline-block;
    justify-content: space-around;
    /* padding-left: 1rem; */
  }
  @media only screen and (min-width: 425px) {
    padding: 0 !important;
  }
`;


const Card = styled.div`
  /* Use Stripe box-shadow values  **philz tip** */
  position: relative;
  margin: 12px;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  max-width: 350px;
  height: 504px;
  min-height: 304px;
  box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.15), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
   p {
     padding: 1rem;
     font-size: 14px;
   }

  @media only screen and (max-width: 1082px) and (min-width: 426px) {
    margin-top: 2.5rem;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 80px;
    p {
      font-size: 0.8rem;
    }
  }
`;

// const BtnStyle = styled.div`
  // margin: 80px auto;
  /* margin-top: 80px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 45px;
  text-transform: uppercase;
  border: red;
  box-shadow: 2px 2px 4px #4d4d4d;
  outline: none;
  width: 180px;
  background: red;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 20; */
  // text-transform: uppercase;
  // font-size: 2rem;

  // a {
    /* color: #fff; */

  // }
// `;




const Services = ({ data }) => (
<Layout>
  <OuterWrapper>

    <ContainerWrapper>

    <h1>Services Offered</h1>
    <br />
    <article>

      <h2>
        Individuals,
        Couples & Families
      </h2>
      <p>
        Specializing in:
      </p>
      <p>
        LGBTQ,
        Somatic Practice,
        Psychological studies,
        Multicultural Adaptation,
        </p>
        <p>
        Gender Identity and Expression
      </p>
      <p>
        All services offered in Tagolog & English
      </p>

    </article>

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
            fluid={data.single.fluid} 
        />
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
         fluid={data.couple.fluid} 
        />
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
         fluid={data.family.fluid} 
        />
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
        
     {/* <BtnStyle>
      <a href="https://sunny-donaire.appointlet.com" target="_blank" rel="noopener noreferrer" >Book Now</a>
    </BtnStyle>    */}


    <br/>
    <br/>
    <hr/>
    <div>
      <Link to="#">Go back to the top</Link>
    </div>

    </ContainerWrapper>
  </OuterWrapper>
</Layout>
);

export default Services;

export const query = graphql`
  query servicesPage {
    site {
      siteMetadata {
        title
      }
    }
    single: imageSharp(fluid: {originalName: {eq: "single-card.jpg" } } ) {
			fluid(maxWidth: 1120) {
      ...GatsbyImageSharpFluid
      }
    }
    couple: imageSharp(fluid: {originalName: {eq: "couple-card1.jpg" } } ) {
			fluid(maxWidth: 1120) {
      ...GatsbyImageSharpFluid
      }
    }
    family: imageSharp(fluid: {originalName: {eq: "family-card.jpg" } } ) {
			fluid(maxWidth: 1120) {
      ...GatsbyImageSharpFluid
      }
    }
  }
`