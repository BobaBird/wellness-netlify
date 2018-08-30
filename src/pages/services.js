import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

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
      
  }
  a {
    color: #4d4d4d;
    &:hover {
      color: orange;
      border-bottom: 2px solid;
    }
  }
`;

const Services = () => (
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

    <div>
      <div>
        <p>
          It is my privilege to accompany you in one-on-one on a journey to excavate and heal pain of body and mind, unlock potential, and build toward empowered, integrated embodiment.
          Book Online
          Individual Counseling
          1 hr
          $50-$75
        </p>
        <button>Book Now</button>
      </div>

      <div>
        <p>
          Couples coaching creates a safe space in which to shine the light of awareness on unaddressed resentment, fear, and avoidance, clarify boundaries, needs and agreements, overcome painful patterns, build or rebuild trust, and co-create a vibrant new relationship vision.
          Book Online
          Couples Coaching
          1 hr
          $80-$120
        </p>
        <button>Book Now</button>
      </div>

      <div>
        <p>
          Family coaching creates a safe space to bring old and new wounds out into the light to be healed, untangle misunderstanding, break down and release judgments, and bridge differences. Every family is unique. Some families are better suited to group sessions. In other cases, a single family member  hiring a coach may be more appropriate and can still have a powerful ripple effect on all parties involved.
          Book Online
          Families
          1 hr
          $100-$150
        </p>
        <button>Book Now</button>
      </div>
    </div>

    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>

    </ContainerWrapper>
  </OuterWrapper>
);

export default Services;
