import React from "react";
import "./about.css";
import { TbCloudDownload } from "react-icons/tb";
import img from "../../Assets/avatar.png";

const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm a dedicated junior front-end developer with a love for clean,
            elegant design and a knack for turning ideas into interactive
            websites. <br />
            <br />
            Having spent three enriching years in the dynamic world of digital
            marketing as a freelance copywriter, I found my passion for
            technology and design taking center stage. This transformative
            experience ignited my desire to dive headfirst into the realm of web
            development.<br />
            <br />
            
            Today, I'm on a journey to learn and grow, and I can't wait to
            showcase my skills and creativity through my work.
          </h4>

          <div className="aboutBtn">
            <a
              href="cv-giorgiadeangelis.pdf"
              download="cv-giorgiadeangelis.pdf"
              className="flex"
            >
              Download CV <TbCloudDownload />
            </a>
          </div>
        </div>
        <div className="aboutImgDiv">
          <img src={img} className="aboutImg" alt="Avatar Giorgia De Angelis" />
        </div>
      </div>
    </section>
  );
};

export default About;
