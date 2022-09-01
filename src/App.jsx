import styled from "styled-components";
import SideBar from "./components/Sidebar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { tablet } from "./features/responsive";

function App() {
  return (
    <Container>
      <SideBar />
      <Main>
        <Home />
        <About />
        <Projects />
        <Services />
        <Resume />
        {/* <Blog /> */}
        {/* <Contact /> */}
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Main = styled.main`
  margin-left: 110px;
  margin-bottom: 100px;

  > * {
    margin-top: 100px;
  }
  ${tablet({ marginLeft: "0" })}
`;
