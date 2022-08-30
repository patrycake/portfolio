import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";

function Card({ year, title, desc, icon }) {
  return (
    <TimelineItem>
      <FontAwesomeIcon icon={icon} />
      <TimelineDate>{year}</TimelineDate>
      <TimelineTitle>{title}</TimelineTitle>
      <TimelineDesc>{desc}</TimelineDesc>
    </TimelineItem>
  );
}

export default Card;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 3.125rem;
  padding-bottom: 3.125rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: "";
    width: 1px;
    position: absolute;
    left: 0.25rem;
    top: 0;
    height: 100%;
    background-color: var(--main-blue);
  }

  .svg-inline--fa,
  svg,
  path {
    position: absolute;
    left: -5px;
    top: 0;
    font-size: var(--h4-font-size);
    color: var(--main-blue);
    background-color: var(--container-color);
    padding: 0.437rem 0;
  }
`;
const TimelineDate = styled.span`
  color: "#8b88b";
  font-size: var(--small-font-size);
`;
const TimelineTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin: 0.5rem 0;
  text-transform: capitalize;
`;
const TimelineDesc = styled.p`
  font-size: var(--base-font-size);
`;
