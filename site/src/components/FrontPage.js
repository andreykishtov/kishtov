import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: blue;
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

const Title = styled.h1`
  font-size: 1.8em;
  background: white;
`;

const Clickable = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Projects = styled.a`
  font-size: 1.3em;
  background: white;
  cursor: pointer;
`;

const ContactMe = styled.a`
  font-size: 1.3em;
  background: white;
  cursor: pointer;
`;

const AboutMe = styled.p`
  background: white;
`;

const FrontPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Andrey Kishtov</Title>
        <AboutMe>Here I will write about me and my life</AboutMe>
        <Clickable>
          <Projects>Projects</Projects>
          <ContactMe>ContactMe</ContactMe>
        </Clickable>
      </Wrapper>
    </Container>
  );
};

export default FrontPage;
