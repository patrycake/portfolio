import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faLinkedinIn,
  faInstagram,
  faFacebookF,
  faGithub,
  faCodepen,
  faDiscord,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function HeaderSocials() {
  return (
    <Container>
      <Link href="http://medium.com/@patriciarbird">
        <FontAwesomeIcon icon={faMedium} />
      </Link>
      {/* <Link href="">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link> */}
      <Link href="http://github.com/patrycake">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href="mailto:patriciarbird@gmail.com">
        <FontAwesomeIcon icon={faGoogle} />
      </Link>
      {/* <Link href="">
        <FontAwesomeIcon icon={faCodepen} />
      </Link> */}
      {/* <Link href="">
        <FontAwesomeIcon icon={faDiscord} />
      </Link> */}
    </Container>
  );
}

export default HeaderSocials;

const Container = styled.div`
  display: flex;
  column-gap: 1.75rem;
  margin-bottom: 1.5rem;
`;
const Link = styled.a`
  color: var(--main-blue);
  font-size: 1.3rem;
  transition: 0.3s;

  &:hover {
    color: var(--secondary-green);
  }
`;
