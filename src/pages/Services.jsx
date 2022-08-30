import React from "react";
import styled from "styled-components";
import { Container, Section, Grid, Button } from "../components/Common";
import { services } from "../data";
import { v4 as uuid } from "uuid";

function Services() {
  return (
    <SerContainer id="services">
      <SerTitle>Skills</SerTitle>
      <SerGrid>
        {services.map(({ image, title, description, color }) => {
          return (
            <Card key={uuid()} color={color}>
              <CardImg src={image} />
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Card>
          );
        })}
      </SerGrid>
    </SerContainer>
  );
}

export default Services;
const SerContainer = styled(Container)``;
const SerTitle = styled.h2``;
const SerGrid = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.875rem;
  row-gap: 2rem;
`;
const Card = styled.div`
  text-align: center;
  border-radius: var(--border-radius);
  background-color: ${(props) => props.color};
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
  box-shadow: 0px 5px 20px 0px ${(props) => props.color};
  transition: 0.25s ease-in-out;
  &:hover {
    box-shadow: none;
    transform: translateY(-10px);
  }
`;
const CardImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
const Title = styled.h3`
  color: var(--text-color);
`;
const Description = styled.p`
  /* color: white; */
  font-size: var(--small-font-size);
`;
