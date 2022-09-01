import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Container, Grid } from "../components/Common";
import me from "../assets/images/cute-avatar.svg";
import AboutSkills from "../components/AboutSkills";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import resume from "../assets/files/PatriciaBirdResume.pdf";
import { tablet } from "../features/responsive";

function About() {
  const growDev = { true: { width: "90%" }, false: { width: "0" } };
  const growU = { true: { width: "60%" }, false: { width: "0" } };
  const growA = { true: { width: "30%" }, false: { width: "0" } };
  const growImg = { true: { width: "59%" }, false: { width: "0" } };

  const data = [
    {
      name: "Development",
      percent: "90%",
      color: "var( --puff-red)",
      motion: growDev,
    },
    { name: "UX/UI", percent: "60%", color: "var(--puff-blue)", motion: growU },
    {
      name: "Assets",
      percent: "30%",
      color: "var(--puff-orange)",
      motion: growA,
    },
  ];
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <AboutCont id="about">
        <Title>About Me</Title>
        <AboutGrid>
          <AvatarCircle>
            <Avatar src={me} />
          </AvatarCircle>
          <DataGrid>
            <Info>
              <Description>
                I am Patricia Bird I am an Electrical Engineer turned Software
                Developer. I have worked as a NASA contractor and love smart
                intutive design and clean code. Looking forward to getting to
                know you! Check out my resume to learn more about me.
              </Description>
              <Button target="_blank" rel="noopener noreferrer" href={resume}>
                Download Resume
              </Button>
            </Info>
            {/* <Skills>
              {data.map((item) => (
                <SkillsData>
                  <SkillsTitles>
                    <SkillsName>{item.name}</SkillsName>
                    <SkillsNum>{item.percent}</SkillsNum>
                  </SkillsTitles>
                  <SkillsBar>
                    <SkillsPer
                      as={motion.span}
                      width={item.percent}
                      color={item.color}
                      variants={item.motion}
                      animate={`${elementIsVisible}`}
                      transition={{ duration: 2, type: "ease-out" }}
                    ></SkillsPer>
                  </SkillsBar>
                </SkillsData>
              ))}
            </Skills> */}
          </DataGrid>
        </AboutGrid>
        <AboutSkills />
      </AboutCont>
    </VisibilitySensor>
  );
}

export default About;
const AboutCont = styled(Container)``;
const Title = styled.h2``;
const AboutGrid = styled(Grid)`
  grid-template-columns: 3fr 9fr;
  column-gap: 1.875rem;
  ${tablet({ gridTemplateColumns: ".5fr 7fr" })}
`;
const buttonPush = keyframes`
  from {
    transform: scale(.8);
  }
  to{
    transform: scale(1);
  }
`;
const Button = styled.a`
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
const AvatarCircle = styled.div`
  width: 150px;
  height: 150px;
  background-color: var(--secondary-green);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  ${tablet({
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
  })}
`;
const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;
const DataGrid = styled(Grid)`
  padding: 1.875rem;
  background-color: var(--container-color);
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);
  grid-template-columns: repeat(1, 1fr);
  column-gap: 1.875rem;
  align-items: flex-start;
  position: relative;

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid var(--container-color);
    position: absolute;
    left: -0.93rem;
    top: 20%;
  }
`;
const Info = styled.div``;
const Description = styled.p`
  margin-bottom: 1rem;
  text-align: justify;
`;
const Skills = styled(Grid)`
  row-gap: 1.25rem;
`;
const SkillsData = styled.div``;
const SkillsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const SkillsName = styled.h3`
  font-size: var(--base-font-size);
  font-weight: var(--font-medium);
`;
const SkillsNum = styled.span`
  line-height: 1.2;
`;
const SkillsBar = styled.div`
  height: 7px;
  border-radius: 0.25rem;
  background-color: #f1f1f1;
`;
const SkillsPer = styled(motion.span)`
  height: 7px;
  border-radius: 0.25rem;
  display: block;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
`;
