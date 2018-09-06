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
  h2 {
    margin: 60px;
    font-weight: 200;
    font-size: 2.5rem;
  }
  p {
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  a {
    margin-left: 10px;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #4d4d4d;
    &:hover {
      color: orange;
      border-bottom: 2px solid;
    }
  }
  #mailLink {
    color: #7aceff;
`;

const Contact = () => (
  <OuterWrapper>
    <ContainerWrapper>

      <h1>Contact</h1>
      <h2>Thank you for visiting</h2>
      <p>If you have any questions or would like more information about scheduling an appointment you can reach me here.</p>
      <p>Tel: (510) 289-0397​</p>
      <p>Email:
        <a id="mailLink"
            href="mailto: lifewellnessfirst@gmail.com?subject=Information request" 
        >
           lifewellnessfirst@gmail.com
        </a>
      </p>


      {/* <Link to="#" style={{ visibility: "hidden" }} id="topNav">Go back to the top</Link> */}

    </ContainerWrapper>
  </OuterWrapper>
);

export default Contact;
