import { NavLink } from "react-router-dom"

function GrecianDB() {
  return (
    <>
      <div className="explore-title">Grecian DataBase</div>
      <div className="explore-text">
        An Rest API designed to become a public resource that can be accessed by anyone if they are given a key. The main
        focus of this project was the dataBase and the API, with a very simple frontend designed to show how the data can
        be searched for and displayed. 
      </div>
      <div className="explore-text">Tech Used: React js, fast API, Python, Postgresql</div>
      <div className="explore-title">Features</div>
      <div className="explore-text"></div>
      <div className="explore-title">Challenges faced</div>
      <div className="explore-text">Generating information: I used chatgpt for generating data. Databases of information
        take a long time to fill out, often with contributions from lots of people. Using AI to generate information requires
        that all information produced is checked. AI was an incredibly useful time saving tool for writing and formatting data
        so it can be easier injected into a database, though it needs to be carefully steered to stop it making mistakes, and
        checks need to be thorough. Also dealing with a data set which has very inconsistent information, and different style
        of catergorisation requires a lot of planning and forethought.</div>
      <div className="explore-title">Highlight on a challenges</div>
      <div className="explore-text"></div>
      <div className="explore-title">To be improved</div>
      <div className="explore-text">Would like images, and keywords to be links to other entity profiles</div>
      <div className="explore-title">Impact</div>
      <div className="explore-text"></div>
      <div className="explore-title">Key Words</div>
      <div className="explore-text">UI, UX, API Requests, Database management, schemas, models, routers, Error handling</div>
      <div className="project-links">
        <NavLink to="/work/spring" className="project-link">
          Spring
        </NavLink>
        <NavLink to="/work/sceneit" className="project-link">
          Scene it
        </NavLink>
        <NavLink to="/work/eatthefrog" className="project-link">
          Eat the frog
        </NavLink>
        <NavLink to="/work/principles" className="project-link">
          Key principles
        </NavLink>
      </div>
    </>
  )
}

export default GrecianDB