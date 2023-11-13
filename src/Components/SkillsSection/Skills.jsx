import React from 'react';
import './skills.css';
import { TbBrandReactNative, TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandBootstrap } from 'react-icons/tb';
import { FaSass, FaGitSquare } from 'react-icons/fa';
import { SiWebpack } from 'react-icons/si';
import { BiLogoGithub } from 'react-icons/bi';

const Skills = () =>  {
  return (
    <section id="skill" className='skills container section'>
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      {/* Skills container */}
      <div className="skillsContainer grid">
        {/* Single group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
          </div>

          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandHtml5 className='icon' />
              </div>
              <span className="skillName">HTML</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandCss3 className='icon' />
              </div>
              <span className="skillName">CSS</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandJavascript className='icon' />
              </div>
              <span className="skillName">JavaScript</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className='icon' />
              </div>
              <span className="skillName">React</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaSass className='icon' />
              </div>
              <span className="skillName">Sass</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandBootstrap className='icon' />
              </div>
              <span className="skillName">Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Another group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other skills</h2>
          </div>

          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <BiLogoGithub className='icon' />
              </div>
              <span className="skillName">Github</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className='icon' />
              </div>
              <span className="skillName">GIT</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiWebpack className='icon' />
              </div>
              <span className="skillName">Webpack</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills
