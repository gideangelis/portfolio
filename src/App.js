import React from "react";
import "./app.css";
import About from "./Components/AboutSection/About";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/HomeSection/Home';
import Projects from "./Components/ProjectsSection/Projects";
import Skills from "./Components/SkillsSection/Skills";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/ContactSection/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
