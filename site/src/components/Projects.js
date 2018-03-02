import React from 'react';
import styled from 'styled-components';

import Project from './Project';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: red;
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

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </Wrapper>
    </Container>
  );
};

export default Projects;
