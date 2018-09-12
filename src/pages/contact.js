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
  button {
    outline: none;
    color: #fff;
    background-color: orange;
    border-radius: 5px;
    padding:  0 20px;
    text-shadow: 3px 3px 8px gray;
  }
`;

const FormWrapper = styled.div`
  margin: 50px auto;

  label {
    font-size: 1rem;
    font-weight: 300;
  }
  input {
    height: 1.7rem;
    padding: 11px 0;
  }
  textarea {
    width: 600px;
    height: 200px;
    line-height: 1.4rem;
  } 
  .g-recaptcha {
    margin: 2rem;
  }
  
  @media only screen and (max-width: 413px) {
    line-height: 1rem;
    font-size: 1rem;
    textarea {
      max-width: 350px;
    }
  }

`;

const Contact = () => (
  <OuterWrapper>
    <ContainerWrapper>

      <h1>Contact</h1>
      <h2>Thank you for visiting</h2>
      <p>If you have any questions or would like more information about scheduling an appointment you can reach me here.</p>
      <p>Tel: (510) 289-0397​</p>
      {/* <p>Email:
        <a id="mailLink"
            href="mailto: lifewellnessfirst@gmail.com?subject=Information request" 
        >
           lifewellnessfirst@gmail.com
        </a>
      </p> */}
      <p>Or send me a message</p>

      <FormWrapper>
        <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Email: <input type="email" name="email" /></label>
            </p>
            
            <p>
              <label>Message: <textarea name="message" ></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
        </form>
      </FormWrapper>

    </ContainerWrapper>
    {/* <script src='https://www.google.com/recaptcha/api.js'></script> */}
  </OuterWrapper>
);

export default Contact;
