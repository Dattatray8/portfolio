import { useContext } from "react";
import Navbar from "./components/Navbar";
import { context } from "./context/AppContext";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  let { theme } = useContext(context);
  return (
    <div data-theme={theme} className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
