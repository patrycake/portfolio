import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Common";
import me from "../assets/images/cute-avatar.svg";
import HeaderSocials from "../components/HeaderSocials";
import { Button } from "../components/Common";
import ScrollDown from "../components/ScrollDown";
import ShapesBG from "../components/ShapesBG";

function Home() {
  const [deg, setDeg] = useState("0");
  function parallax(event) {
    // event.pageX event.pageY
    // console.log(event.pageX);
    setDeg((event.pageX + event.pageY) / 10);
  }
  return (
    <HomeCont onMouseMove={parallax} id="home">
      <Intro>
        <AvatarCircle>
          <Avatar src={me}></Avatar>
        </AvatarCircle>
        <Name>Patricia Bird</Name>
        <Position>I'm a Full Stack Developer</Position>
        <HeaderSocials />
        {/* <HireMeButt href="#contact">Hire Me</HireMeButt> */}
        <ScrollDown />
      </Intro>
      <ShapesBG deg={deg} />
    </HomeCont>
  );
}

export default Home;

const HomeCont = styled.div`
  margin-top: 0 !important;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Intro = styled.div`
  max-width: 540px;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  align-items: center;
`;
const AvatarCircle = styled.div`
  width: 150px;
  background-color: var(--main-blue);
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;
const Avatar = styled.img`
  width: 200px;
`;
const Name = styled.h1`
  font-size: var(--h1-font-size);
  font-weight: var(--font-bold);
  margin-bottom: 0.5rem;
`;
const Position = styled.span`
  margin-bottom: 1.5rem;
`;
const HireMeButt = styled(Button)``;
