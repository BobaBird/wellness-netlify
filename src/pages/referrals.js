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
  // text-shadow: 2px 2px 20px rgba(2, 2, 2, 0.9), -2px -2px 20px rgba(2, 2, 2, 0.9);
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
    // font-weight: 300;
    // font-size: 1.5rem;
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


const Refferals = ({ data }) => (
  <OuterWrapper>

    {/* <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '200vh',
        opacity: 0.8,
      }}
      sizes={data.background.sizes}
    >
    
    </Img> */}

    <ContainerWrapper>

      <h1>Refferals</h1>
      <br />
      <p style={{ fontSize: '16px' }}>
        <em>
          The confidentiality agreement helps keep an individual or business’s proprietary information
          confidential by preventing a recipient from disclosing such information to others.
        </em>
      </p>
      <br />
      <p>
        <q>
        The reason I would refer Sunny because he is first and foremost, compassionate. When speaking
        , feel free to talk about anything without feeling ashamed or feeling judged. I'm right at
        ease when we talk and I think that empathy is the most important quality for a life coach
        to have. It makes me feel safe and cared for. Anyone would be lucky to have Sunny as their
        life coach.
        </q>
        <cite>- JG</cite>
      </p>

      <hr/>

      <p>
        <q>
        Sunny’s sensitivity to his clients’ diverse needs, and skillfulness in supporting and
        co-creatively journeying with—rather than directing—them, allows clients to tap into the
        wellspring of their own internal resources while simultaneously acquiring new,
        transformational skills with which to overcome life challenges and achieve personal,
        professional, and relationship goals.
        </q>
        <cite>- A.C.</cite>
      </p>

      <hr/>

      <p>
        <q>
        Sunny is distinguished by his warmth of heart, generosity of spirit, non-binary view of life
        and individual experience, commitment to authenticity, multiculturalism, and to social
        justice-fighting racism, homophobia, trans-phobia, able-ism, and all forms of prejudice born
        of systemic oppression. Sunny is the real deal, with a wisdom born of transformed pain that
        you can't fake. His strength as a healer is deepened by a willingness to be vulnerable, his
        technical skills set balanced by a fearlessness to go with you to the heart of your deepest
        suffering, and then travel outward with you, at your own pace, and on your own terms, into a
        new expansiveness and celebration of life.
        </q>
        <cite>- Hyejo K. Somaticdream</cite>
      </p>

      <hr/>

      <Link to="#">Go back to the top</Link>

    </ContainerWrapper>
  </OuterWrapper>
);

export default Refferals;

export const query = graphql`
  query refSite {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: {regex: "/refferals/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;