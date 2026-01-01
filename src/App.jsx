import { useContext } from "react";
import { context } from "./context/AppContext";
import Navbar from "./components/Navbar";
import NavbarOriginal from "./components/original/NavbarOriginal";
import Hero from "./components/Hero";
import HeroOriginal from "./components/original/HeroOriginal";
import About from "./components/About";
import AboutOriginal from "./components/original/AboutOriginal";
import Skills from "./components/Skills";
import SkillsOriginal from "./components/original/SkillsOriginal";
import Footer from "./components/Footer";
import FooterOriginal from "./components/original/FooterOriginal";
import Projects from "./components/Projects";
import ProjectsOriginal from "./components/original/ProjectsOriginal";
import ScrollProgress from "./components/ScrollProgress";
import CursorTrail from "./components/CursorTrail";
import SectionDivider from "./components/SectionDivider";

function App() {
  const { theme, mode } = useContext(context);
  const isAIMode = mode === "ai";

  return (
    <div data-theme={theme} className="w-full min-h-screen overflow-x-hidden relative">
      {isAIMode && <CursorTrail />}
      {isAIMode && <ScrollProgress />}
      {isAIMode ? <Navbar /> : <NavbarOriginal />}
      {isAIMode ? <Hero /> : <HeroOriginal />}
      {isAIMode && <SectionDivider />}
      {isAIMode ? <About /> : <AboutOriginal />}
      {isAIMode && <SectionDivider />}
      {isAIMode ? <Skills /> : <SkillsOriginal />}
      {isAIMode && <SectionDivider />}
      {isAIMode ? <Projects /> : <ProjectsOriginal />}
      {isAIMode && <SectionDivider />}
      {isAIMode ? <Footer /> : <FooterOriginal />}
    </div>
  );
}

export default App;
