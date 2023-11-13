import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  // Toggle on and off the navbar at small width
  const [active, setActive] = useState('navbar');

  // Show the navbar and bring it from the top
  const showNavbar = () => {
    setActive('navbar activeNavbar');
  }

  // Hide the navbar again
  const removeNavbar = () => {
    setActive('navbar');
  }

  // Add bg color to the header
  const [activeHeader, setActiveHeader] = useState('header');
  const addBg = () => {
    if(window.scrollY >= 10) {
      setActiveHeader('header activeHeader');
    } else {
      setActiveHeader('header');
    }
  }

  window.addEventListener('scroll', addBg);

  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">MoonyDev</a>
        </h1>
      </div>

      <div className={active}>
        <ul onClick={removeNavbar} className="navLists">
          <li className="navItem">
            <a href="#about" className="navLink">
              <span className="headerNumber">1. </span>About
            </a>
          </li>
          <li className="navItem">
            <a href="#skill" className="navLink">
              <span className="headerNumber">2. </span>Skills
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              <span className="headerNumber">3. </span>Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              <span className="headerNumber">4. </span>Contact
            </a>
          </li>
          <button className="btn">
            <a href="cv-giorgiadeangelis.pdf" download='cv-giorgiadeangelis.pdf'>Resume</a>
          </button>
        </ul>

        <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavbar} className="toggleNavbar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
