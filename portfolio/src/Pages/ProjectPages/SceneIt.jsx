import { NavLink } from "react-router-dom"

function SceneIt() {
  return (
    <>
      <div className="explore-title">Scene it</div>
      <div className="explore-text">
        A web application that allows users to search a movie database and select movies
        that they have seen and that they would like to see. These are then added to their
        "to watch" and "watched" list.
      </div>
      {/* <div className="explore-text">Tech Used: React js</div> */}
      <div className="explore-title">Features</div>
      <div className="explore-text">The app is built in React, it makes requests to an online movie database and retrieves infomation about the choosen film include name, genre and cover art. </div>
      <div className="explore-title">Challenges faced</div>
      <div className="explore-text">Using an online API requires requesting information having the right passcode and being able to target the appropriate infomation.
        This means working through the documentation provided and tailoring the code accordingly.</div>
      {/* <div className="explore-title">Highlight on a challenges</div>
      <div className="explore-text">Data request delays is a reality for this type of application. To create a system
        where the user feels as though everything they do is instant the UI must change
        instantly while the actual backend opperations are loading. </div> */}
      <div className="explore-title">To be improved</div>
      <div className="explore-text">Ideally this app would have an option to rate and rank the films that have been seen.</div>
      {/* <div className="explore-title">Impact</div>
      <div className="explore-text"></div> */}
      <div className="explore-title">Key Words</div>
      <div className="explore-text">UI, UX, API Requests, Error handling</div>
      <div>
        <div></div>
      </div>
      <div className="project-links">
        <NavLink to="/work/spring" className="project-link">
          Spring
        </NavLink>
        <NavLink to="/work/greciandb" className="project-link">
          Grecian Database
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

export default SceneIt