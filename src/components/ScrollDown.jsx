import React from "react";
import styled, { keyframes } from "styled-components";

function ScrollDown() {
  return (
    <Container>
      <ScrollName>Scroll Down</ScrollName>
      <WrapperMouse href="#about">
        <Wheel></Wheel>
      </WrapperMouse>
    </Container>
  );
}

export default ScrollDown;

const Container = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  width: 100%;
`;
const WrapperMouse = styled.a`
  border: 2px solid var(--text-color);
  display: block;
  height: 1.6rem;
  width: 1.25rem;
  margin: auto;
  margin-top: 0.75rem;
  border-radius: 1rem;
  position: relative;
`;
const ScrollName = styled.span`
  font-size: var(--small-font-size);
  color: var(--secondary-green);
  transition: 0.5s;
  &:hover {
    color: var(--main-blue);
  }
`;

const aniMouse = keyframes`
0%{
  top: 29%;
}
15%{
  top: 50%;
}
50%{
  top: 50%;
}
100%{
  top: 29%;
}`;
const Wheel = styled.div`
  background-color: var(--text-color);
  border-radius: 100%;
  width: 0.25rem;
  height: 0.25rem;
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${aniMouse} 0.7s linear infinite;
`;
