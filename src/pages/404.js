import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 1.0875rem 1.45rem;
  text-align: center;
`;


const NotFoundPage = () => (
  <Wrapper>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Wrapper>
)

export default NotFoundPage
