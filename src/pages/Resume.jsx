import React from "react";
import styled from "styled-components";
import { Container, Section, Grid, Button } from "../components/Common";
import { resume1, resume2 } from "../data";
import { v4 as uuid } from "uuid";
import Card from "../components/Card";
import { tablet } from "../features/responsive";

function Resume() {
  return (
    <ResContainer id="resume">
      <Title>Experience</Title>
      <ResGrid>
        <TimeLine>
          {resume1.map((item) => {
            console.log(item);
            if (item.category === "Education") {
              return (
                <Card
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  desc={item.desc}
                  key={uuid()}
                />
              );
            }
            if (item.category === "Experience") {
              return (
                <Card
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  desc={item.desc}
                  key={uuid()}
                />
              );
            }
          })}
        </TimeLine>
        <TimeLine>
          {resume2.map((item) => {
            console.log(item);
            if (item.category === "Education") {
              return (
                <Card
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  desc={item.desc}
                  key={uuid()}
                />
              );
            }
            if (item.category === "Experience") {
              return (
                <Card
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  desc={item.desc}
                  key={uuid()}
                />
              );
            }
          })}
        </TimeLine>
      </ResGrid>
    </ResContainer>
  );
}

export default Resume;

const ResContainer = styled(Container)``;
const Title = styled.h2``;
const ResGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.875rem;
  ${tablet({ display: "flex", flexDirection: "column", gap: "30px" })}
`;
const TimeLine = styled(Grid)`
  background-color: var(--container-color);
  padding: 1.875rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;
