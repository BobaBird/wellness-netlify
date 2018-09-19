import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

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
  max-width: 960px;
  min-height: 80vh;
  color: #4d4d4d;
  p {
    line-height: 2.5rem;
  }
  a {
    color: #4d4d4d;
    &:hover {
      color: orange;
      border-bottom: 2px solid;
    }
  }
`;

const myPractice = ({ data }) => (
  <OuterWrapper style={{ minHeight: '45vh' }}>

    {/* <Img 
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '130vh',
        opacity: 0.8,
      }}
      sizes={data.background.sizes}
    >
    </Img> */}

    <ContainerWrapper>

      <h1>Somatic Practice</h1>
      <p>
        Somatic methodology is a pathway to individual and collective transformation and integration
        , a holistic approach to creating healing shifts in embodied experience that nourish us over
        time and translate not only into new ways of being and perceiving, but into new depths of
        connection and empowered action.
      </p>
      <br />
      <hr/>
      <br />
      <h1 style={{ textAlign: '' }}>Gender Identity</h1>
      <p>
        Gender Identity is the innermost concept of self as male, female, a blend of both, or neither
        , regardless of sex assigned at birth. Imposing rigid gender expectations on a baby can be
        damaging to the psycho-social development of the child from infancy to adulthood, restricting
        the degree to which they feel free to define, declare, and present gender as they experience
        it. Often erroneously discussed as a dysfunction, gender dysphoria may be experienced by
        anyone at any phase of life. Discarding the toxic messaging of socially-sanctioned,
        arbitrarily prescribed, gender norms in favor of authentic self-determination opens the way
        to harmonizing the inward and outward experience of gender, instead of suffering from
        dissonance between the two.
      </p>

      <br />
      <hr/>
      <br />
      <h1 style={{ textAlign: '' }}>Multicultural Adaptation</h1>

      <p>
        Living in a new culture can be very confusing and difficult to process, especially when that
        culture is drastically different from your own. How does it feel not to be able to read
        street signs because they are written in an unfamiliar language? Or to have an outfit you are
        wearing deemed unacceptable by your peers? Building a strong foundational skillset with which
        to navigate the small and large, acute and persistent, stresses of cultural adaptation is not
        a quick and easy process. A person being introduced into a new culture may experience a
        variety of responses, including frustration at not being able to communicate and anger when
        confronted with cultural norms that seem to make no sense. For instance, in Filipino culture,
        burping after eating is a complement, while in certain other cultures it may be considered
        the opposite. These differences can be extremely uncomfortable! Cultural adaptation theory
        helps to contextualize and ground coaching work supporting you   through these difficult
        emotions.
      </p>

      <hr/>

      <Link to="#">Go back to the top</Link>

    </ContainerWrapper>
  </OuterWrapper>
);

export default myPractice;

export const query = graphql`
  query myPracticeSite {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: {regex: "/butterfly/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
