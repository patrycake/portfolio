import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
`;

export const Section = styled.div`
  padding-top: 7rem;
  padding-bottom: 2rem;
`;

export const SectionTitle = css`
  /* font-size: var(--h1-font-size);
  margin-left: 0.875rem;
  font-weight: var(--font-weight-bold);
  position: relative;
  margin-bottom: 3.75rem;

  &:before {
    content: "";
  } */
`;
const buttonPush = keyframes`
  from {
    transform: scale(.8);
  }
  to{
    transform: scale(1);
  }
`;

export const Button = styled.button`
  padding: 0.75rem 2rem;
  line-height: 1;
  border-radius: 1.875rem;
  box-shadow: 0 0 1px rgb(0 0 0 / 0%);
  border: 1px solid transparent;
  color: #fff;
  display: inline-block;
  background-color: var(--accent-blush);
  font-weight: var(--font-bold);
  transition: 0.3s;
  &:hover {
    animation: ${buttonPush} 1s linear 1;
  }
`;
