import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCake,
  faHouse,
  faUser,
  faPen,
  faAddressCard,
  faCodeFork,
  faWrench,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

function Sidebar() {
  const listItems = [
    { name: "home", icon: faHouse },
    { name: "about", icon: faUser },
    // { name: "blog", icon: faPen },

    { name: "projects", icon: faCodeFork },
    { name: "services", icon: faWrench },
    { name: "resume", icon: faFileLines },
    // { name: "contact", icon: faAddressCard },
  ];
  return (
    <Aside>
      <NavLogo href="#home">
        <FontAwesomeIcon icon={faCake} size="2x" color="var(--main-blue)" />
      </NavLogo>
      <Nav>
        <Menu>
          <List>
            {listItems.map((item) => (
              <Item key={uuid()}>
                <Link href={`#${item.name}`}>
                  <FontAwesomeIcon icon={item.icon} />
                </Link>
              </Item>
            ))}
          </List>
        </Menu>
      </Nav>
      <Footer>
        <Copyright>&copy; 2022 - 2023</Copyright>
      </Footer>
    </Aside>
  );
}

export default Sidebar;
const Aside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  background: var(--body-color);
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  padding: 2.5rem;
  width: 110px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
const NavLogo = styled.a``;
const Nav = styled.nav``;
const Menu = styled.div``;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
const Item = styled.li``;
const Link = styled.a`
  font-size: 1.15rem;
  color: var(--text-color);
  transition: 0.5s;
  &:hover {
    color: var(--secondary-green);
  }
`;
const Footer = styled.div``;
const Copyright = styled.span`
  color: hsl(245, 15%, 65%);
  font-size: var(--small-font-size);
  transform: rotate(-180deg);
  writing-mode: vertical-rl;
`;
