import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: green;
`;

const Wrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  background: #212334;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const ContactMe = () => {
  return (
    <Container>
      <Wrapper>ContactMe</Wrapper>
    </Container>
  );
};

export default ContactMe;
