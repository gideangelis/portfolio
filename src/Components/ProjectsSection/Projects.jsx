import React from "react";
import "./projects.css";
import { MdWebAsset } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
// Images
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";

const data = [
  {
    id: 1,
    image: img1,
    demo: "https://counter-js-basics.netlify.app/",
    github: "https://github.com/gideangelis/counter-javascript-basics",
    title: "Counter",
    desc: "This is a basic counter, with increment, decrement and reset buttons.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 2,
    image: img2,
    demo: "https://gideangelis.github.io/country-guide-app/",
    github: "https://github.com/gideangelis/country-guide-app/tree/main",
    title: "Country guide",
    desc: "A country guide app that allows the user to search for a particular country and then displays information related to the searched country.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 3,
    image: img3,
    demo: "https://gideangelis.github.io/pokemon-card-generator/",
    github: "https://github.com/gideangelis/pokemon-card-generator",
    title: "Pokémon card generator",
    desc: "A Pokémon card generator built with HTML, CSS & JavaScript. I used this project for learning APIs and improve my skills with Vanilla Javascript. Whenever the button 'generate' is clicked, a new Pokémon card is create.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 4,
    image: img4,
    demo: "https://start2impact-lifescanner.netlify.app/",
    github: "https://github.com/gideangelis/javascript-advanced",
    title: "LifeScanner",
    desc: "This is a basic counter, with increment, decrement and reset buttons.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({ id, github, image, desc, demo, title, tech1, tech2, tech3, tech4 }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="websiteIcon">
                    <a href={demo} target="_blank" rel="noreferrer">
                      <MdWebAsset className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank" rel="noreferrer">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                    <img src={image} alt={title} />
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};




export default Projects;
