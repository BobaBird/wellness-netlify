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

const Contact = () => (
  <OuterWrapper>
    <ContainerWrapper>

      <h1>Contact</h1>
      <p>Tel: (510) 289-0397​</p>
      <p>Email: lifewellnessfirst@gmail.com</p>
      <Link to="/">Go back to the homepage</Link>

    </ContainerWrapper>
  </OuterWrapper>
);

export default Contact;
