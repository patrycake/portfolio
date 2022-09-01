import React, { useState } from "react";
import styled from "styled-components";
import { Container, Grid } from "../components/Common";
import { FilterMenu } from "../data";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { tablet } from "../features/responsive";

function Projects() {
  const [items, setItems] = useState(FilterMenu);
  const [filterSelect, setFilterSelect] = useState("All");

  const filterItem = (categoryItem) => {
    setFilterSelect(categoryItem);
    if (categoryItem === "All") {
      setItems(FilterMenu);
      return;
    }
    const updatedItems = FilterMenu.filter((curElem) => {
      return curElem.category.some((itemCat) => {
        // console.log(itemCat, categoryItem);
        return itemCat === categoryItem;
      });
    });

    setItems(updatedItems);
  };
  return (
    <WorkContainer id="projects">
      <Title>Recent Works</Title>
      <Filter>
        <Item color={filterSelect === "All"} onClick={() => filterItem("All")}>
          All
        </Item>
        <Item
          color={filterSelect === "React"}
          onClick={() => filterItem("React")}
        >
          React
        </Item>
        <Item
          color={filterSelect === "Firebase"}
          onClick={() => filterItem("Firebase")}
        >
          Firebase
        </Item>
        <Item
          color={filterSelect === "MongoDB"}
          onClick={() => filterItem("MongoDB")}
        >
          MongoDB
        </Item>
        <Item
          color={filterSelect === "Styled Components"}
          onClick={() => filterItem("Styled Components")}
        >
          Styled Components
        </Item>
        <Item
          color={filterSelect === "Webpack"}
          onClick={() => filterItem("Webpack")}
        >
          Webpack
        </Item>
        <Item
          color={filterSelect === "Redux"}
          onClick={() => filterItem("Redux")}
        >
          Redux
        </Item>
        <Item color={filterSelect === "Api"} onClick={() => filterItem("Api")}>
          Api
        </Item>
      </Filter>
      <WorkGrid>
        {items.map((ele) => {
          const { image, title, category, live, code } = ele;
          return (
            <Card key={uuid()}>
              <Thumbnail>
                <Image src={image} />
                <Mask></Mask>
              </Thumbnail>
              <Category>{category + " "}</Category>
              <CardTitle>{title}</CardTitle>
              <Live href={live}>
                <FontAwesomeIcon icon={faLink} />
              </Live>
              |
              <Code href={code}>
                <FontAwesomeIcon icon={faGithub} />
              </Code>
            </Card>
          );
        })}
      </WorkGrid>
    </WorkContainer>
  );
}

export default Projects;

const WorkContainer = styled(Container)``;
const Title = styled.h2``;
const Filter = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.875rem;
  margin-bottom: 2.5rem;
  ${tablet({ display: "flex", flexWrap: "wrap", gap: "20px 20px" })}
`;
const Item = styled.span`
  cursor: pointer;
  font-weight: var(--font-bold);
  transition: 0.3s;
  color: ${(props) => (props.color ? "var(--main-blue)" : "var(--text-color)")};

  &:hover {
    color: var(--main-blue);
  }
`;
const WorkGrid = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  gap: 1.875rem;
  ${tablet({ display: "flex", flexDirection: "column" })}
`;
const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;
const Thumbnail = styled.div``;
const Image = styled.img``;
const Mask = styled.div`
  background: var(--secondary-green);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: 0.3s;
  opacity: 0;
  ${Card}:hover & {
    opacity: 0.9;
  }
`;
const Category = styled.span`
  color: #fff;
  background-color: var(--main-blue);
  border-bottom-left-radius: 0.98rem;
  border-bottom-right-radius: 0.98rem;
  position: absolute;
  top: 0;
  left: 1.5rem;
  font-size: var(--small-font-size);
  display: inline-block;
  padding: 0.19rem 0.625rem;
  transform: translateY(-50px);
  transition: 0.3s;
  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;
const CardTitle = styled.h3`
  color: #fff;
  font-size: var(--h3-font-size);
  margin: 0 0 0.98rem;
  padding: 0 1.25rem;
  position: absolute;
  top: 3.75rem;
  transform: translateY(30px);
  transition: 0.3s;
  opacity: 0;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Live = styled.a`
  color: #fff;
  position: absolute;
  bottom: 1.5rem;
  left: 4.5rem;
  font-size: var(--h3-font-size);
  display: block;
  background-color: #ffd15c;
  /* var(--puff-neon) */
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  transition: 0.3s;
  opacity: 0;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Code = styled.a`
  color: #fff;
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  font-size: var(--h3-font-size);
  display: block;
  background-color: #ffd15c;
  /* var(--puff-neon) */
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  transition: 0.3s;
  opacity: 0;
  ${Card}:hover & {
    opacity: 1;
  }
`;
