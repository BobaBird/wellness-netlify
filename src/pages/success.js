import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 5rem;
  height: 80vh;
`;

const SuccessPage = () => (
  <Wrapper>
    <h1>Form sent successfully!</h1>
    <p></p>
    <Link to="/contact">Go Back</Link>
  </Wrapper>
)

export default SuccessPage
