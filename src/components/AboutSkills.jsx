import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faNodeJs,
  faJs,
  faGit,
  faFigma,
  faGulp,
  faLinux,
  faNpm,
  faWordpress,
  faPhp,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

function AboutSkills() {
  return (
    <Container>
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faCss3} />
      <FontAwesomeIcon icon={faHtml5} />
      <FontAwesomeIcon icon={faNodeJs} />
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faGit} />
      <FontAwesomeIcon icon={faFigma} />
      <FontAwesomeIcon icon={faGulp} />
      <FontAwesomeIcon icon={faLinux} />
      <FontAwesomeIcon icon={faNpm} />
      <FontAwesomeIcon icon={faYarn} />
      <FontAwesomeIcon icon={faWordpress} />
      <FontAwesomeIcon icon={faPhp} />
    </Container>
  );
}

export default AboutSkills;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0;
  svg {
    color: var(--secondary-green);
    font-size: 2rem;
  }
`;
