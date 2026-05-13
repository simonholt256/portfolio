import { NavLink } from "react-router-dom"

/* Project images import */

import SpringPic from "../../assets/projects/spring/springplaceholder.png"
import GreekPic from "../../assets/projects/greekapi/greek-pic.png"
import ScenePic from "../../assets/projects/sceneit/scene-pic.png"
import EatthefrogPic from "../../assets/projects/eatthefrog/eatthefrog-pic.png"

/* Tech icons import */

import Vscode from "../../assets/icons/tech/vscode.png"
import Github from "../../assets/icons/tech/github.png"

import Html from "../../assets/icons/tech/html.png"
import Css from "../../assets/icons/tech/css.png"
import Js from "../../assets/icons/tech/js.png"
import ReactIcon from "../../assets/icons/tech/react.png"
import Python from "../../assets/icons/tech/python.png"

import Nodejs from "../../assets/icons/tech/nodejs.png"
import Fastapi from "../../assets/icons/tech/fastapi.png"
import Postgresql from "../../assets/icons/tech/Postgresql.png"

function Work() {
  return (
    <>
      <h1 className="projects-title">Projects</h1>
      {/* <p className="projects-keywords">Key words: APIs, etc etc etc</p> */}
      <div className="project-box">
        <div className="chrome-box-project">
          <img className="work__project-pic" src={SpringPic}/>
          <div className="work__project-description__title">Spring</div>
          <div className="work__project-description"><b>A fullstack habit tracker web app</b> which allows users to set themselves intentions, and earn trophies when they set and complete challenges.
          </div>
          <div className="work__project-key-features"><u>Key features:</u> CRUD intentions and challenges. State management. Engaging data visualisation gamification elements.</div>
          <div className="work__project-tech-highlights"><u>Tech highlights:</u> JWT Tokens, axios API requests, cloud based database.</div>
          <div className="work__project-tech-stack"><u>Stack:</u> <div className="stack-item">React</div> ↔ <div className="stack-item">Fast Api</div> ↔ <div className="stack-item">Postgresql</div></div>
          {/* <div className="work__project-title"> SPRING </div> */}
          {/* <button className="work__project-explore"> Explore </button> */}
          <NavLink to="/work/spring" className="work__project-explore">
            Explore
          </NavLink>
        </div>
        <div className="chrome-box-project">
          <img className="work__project-pic" src={GreekPic}/>
          <div className="work__project-description__title">Grecian DataBase</div>
          <div className="work__project-description"><b>A RESTful API</b> connected to a database of characters from Grecian mythology. A simple front end allows users to search the database for info about different entities.

          </div>
          <div className="work__project-key-features"><u>Key features:</u> Data validation, Asynchronous request handling and data fetching, structured routing.
          </div>
          <div className="work__project-tech-highlights"><u>Tech highlights:</u>  Data model and schema design, ORM integration, Pydantic validation
          </div>
          <div className="work__project-tech-stack"><u>Stack:</u> <div className="stack-item">React</div> ↔ <div className="stack-item">Fast Api</div> ↔ <div className="stack-item">Postgresql</div></div>
          {/* <div className="work__project-title"> SPRING </div> */}
          {/* <button className="work__project-explore"> Explore </button> */}
          <NavLink to="/work/greciandb" className="work__project-explore">
            Explore
          </NavLink> 
        </div>
        <div className="chrome-box-project">
          <img className="work__project-pic scene-pic" src={ScenePic}/>
          <div className="work__project-description__title">Scene it</div>
          <div className="work__project-description"><b>A web app for saving movies</b> the user wants to watch and films they have watched, by excessing an online movie database.
          </div>
          <div className="work__project-key-features"><u>Key features:</u> Search for movies, view detailed movie information, responsive UI
          </div>
          <div className="work__project-tech-highlights"><u>Tech highlights:</u> Integrated third-party API, reusable UI components, handling loading and error states.</div>
          <div className="work__project-tech-stack"><u>Stack:</u> <div className="stack-item">React</div></div>
          {/* <div className="work__project-title"> SPRING </div> */}
          {/* <button className="work__project-explore"> Explore </button> */}
          <NavLink to="/work/sceneit" className="work__project-explore">
            Explore
          </NavLink>
        </div>
        <div className="chrome-box-project">
          <img className="work__project-pic eatthefrog-pic" src={EatthefrogPic}/>
          <div className="work__project-description__title">Eat the frog</div>
          <div className="work__project-description"><b>An elevated to-do app</b> which sorts items into different orders depending on how the user wishes to approach their challenges.
          </div>
          <div className="work__project-key-features">Key features: CRUD, Uses friendly input UI</div>
          <div className="work__project-tech-highlights">Tech highlights: Sorting algorithms, local storage and cache.</div>
          <div className="work__project-tech-stack">Stack: <div className="stack-item">HTML</div> ↔ <div className="stack-item">CSS</div> ↔ <div className="stack-item">JavaScript</div></div>
          {/* <div className="work__project-title"> SPRING </div> */}
          {/* <button className="work__project-explore"> Explore </button> */}
          <NavLink to="/work/eatthefrog" className="work__project-explore">
            Explore
          </NavLink>
        </div>
      </div>
      <div className=" chrome-box-principles">
        <div className="core-principles-title">Core Principles</div>
        <div className="core-principles-text">While working on projects there are certain things to keep in mind, such as working styles,
          like using the using the agile method. Also preparing for a projects future by extentsive planning
          of architecture and secruity needs. As well as what to consider when using technologies like AI.
        </div>
        <NavLink to="/work/principles" className="work__project-explore">
          Explore
        </NavLink> 
      </div>
      <h1 className="projects__tech-used-title">Tech Used</h1>
      <div className="projects__tech-used-grid">
        <img className="tech-icon" src={Html}/>
        <img className="tech-icon" src={Css}/>
        <img className="tech-icon" src={Js}/>
        <img className="tech-icon" src={ReactIcon}/>
        <img className="tech-icon" src={Nodejs}/>
        <img className="tech-icon" src={Python}/>
        <img className="tech-icon" src={Fastapi}/>
        <img className="tech-icon" src={Postgresql}/>
        <img className="tech-icon" src={Vscode}/>
        <img className="tech-icon" src={Github}/>
      </div>
    </>
  )
}

export default Work