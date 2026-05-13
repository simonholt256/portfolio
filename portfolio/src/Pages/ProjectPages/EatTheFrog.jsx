import { NavLink } from "react-router-dom"

function EatTheFrog() {
  return (
    <>
      <div className="explore-title">Eat The Frog</div>
      <div className="explore-text">
        A to-do app with plays on the expression "eat the frog" meaning if there is something
        you are dreading you should do it first thing. A user can input tasks and rank them in
        difficulty, tedium, and time to complete. They can also make one task, that they dread
        the most, their "Frog". From their the select from a series of option how to order their
        tasks. including eat the frog (most dreaded first), snowball (quickest through to longest),
        one for me one for them (one fun then one hard and boring then then back and forth between
        the two)
      </div>
      <div className="explore-text">Tach used: HTML, CSS, JavaScript</div>
      <div className="explore-title">Features</div>
      <div className="explore-text">Algorithms that reorganise tasks depending on ratings made
        but the user and the method the user wants to approach their tasks. To keep the project
        as simple possible the choice was made to avoid having. The obstacle of user accounts,
        so instead the user input is stored in local browser</div>
      {/* <div className="explore-title">Challenges faced</div>
      <div className="explore-text"></div> */}
      <div className="explore-title">Highlight on a challenges</div>
      <div className="explore-text"> For each task three data points are taken, difficultly, tedium, time it
        takes. The user can also make one task they're "frog". One of the challenges was deciding how to organise
        data to rearrange the tasks. This was solved but using different arrays into which items can be pushed and
        spliced, and then brought back together into one list when reordered.</div>
      <div className="explore-title">To be improved</div>
      <div className="explore-text">An issue with using vanilla javascript is that the page cannot re-render specific
        elements. The page has to be refreshed to see the changes made. Currently in this app a refresh is forced to
        allow knew input to be see. It would be alot better to build it on react where live re-rendering is possible.</div>
      <div className="explore-title">Impact</div>
      <div className="explore-text">I always start a project thinking about what is wanted and what the main objective
        is. What is the most useful thing for the user? For a to do app what the user wants is to get the list done.
        And so the question is how can a simple app help that happen more easily? The order in which you do things can
        result in failure or success. But again, so often the reality is that people are different and need different
        things, this is why customisability is so important, but tailored within restrictions. A user can see the different
        ways to approach their tasks and choose what works for them.</div>
      <div className="explore-title">Key Words</div>
      <div className="explore-text">Advanced html and css for user input, caching, local storage, Algorithms for sorting tasks</div>
      <div className="github-project-link">
        <a className="github-link-button" href="https://github.com/simonholt256/EatTheFrog" target="_blank">See project on GitHub</a>
      </div>
      <div className="project-links">
        <NavLink to="/work/spring" className="project-link">
          Spring
        </NavLink>
        <NavLink to="/work/greciandb" className="project-link">
          Grecian Database
        </NavLink>
        <NavLink to="/work/sceneit" className="project-link">
          Scene it
        </NavLink>
        <NavLink to="/work/principles" className="project-link">
          Key principles
        </NavLink>
      </div>
    </>
  )
}

export default EatTheFrog