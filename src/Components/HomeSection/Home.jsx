import React from "react";
import "./home.css";
import { AiFillGithub } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiChevronsDown } from "react-icons/fi";

const Home = () => {
  return (
    <section id="home" className="home section">

      {/* This will be only visible at wider screen */}
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/gideangelis" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
          </a>
          <a href="https://twitter.com/gideangelis_" target="_blank" rel="noreferrer">
            <FiTwitter className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/giorgia-de-angelis-webdev/" target="_blank" rel="noreferrer">
            <FiLinkedin className="icon" />
          </a>
          <div className="line"></div>
        </div>
      </div>

      {/* homeContent */}

      <div className="container homeContainer">
        <span className="introText">Hi! My name is</span>

        <h1 className="title">Giorgia De Angelis</h1>

        <span className="subTitle">
          A passionate, results-driven Junior Front-end developer.
        </span>

        <p className="homeParagraph">
        I'm constantly searching ways to transform ideas into beautiful, user-friendly websites that leave a lasting impression.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact me <FiMail className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll down</h6> <FiChevronsDown className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Right div (with email address), visible only at a wider screen*/}

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:giorgiadeangelis96@gmail.com" target="_blank" rel="noreferrer">
              giorgiadeangelis96@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
