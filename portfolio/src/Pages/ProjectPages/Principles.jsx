import { NavLink } from "react-router-dom"

function Principles() {
  return (
    <>
      <div className="explore-title">Working style</div>
      <div className="explore-text">
        Working with the agile mindset means development can continue at a rapid pace
        and also be informed by developments in other areas of the projects. It allows
        responsive intuitive decisions. This mostly manifests as individuals or smaller
        teams working on their own small sections of a project and allocating what they
        feel is the appropriate time for each task. This keeps progress fast and roles
        flexible, and means practical decisions can be made about when and where to focus
        most intensity into a project. This leads on to why correct version control is so
        important. With such quick change it is vital to keep the main project up and
        running with clear commit comments showing what changes were made and why. In
        terms of getting through large and ever changing workloads using a Kanban board is
        incredibly effective. 

      </div>
      <div className="explore-title">Design</div>
      <div className="explore-text">
        There are so many factors that come into good design but what and who it is for should
        stay in mind throughout the planning and building process. Good UI and UX is so virtual
        to how software is received and how we can, as coders, connect with the user on an
        emotional level. But design choices must be user-focused. Dazzling aesthetics may come
        at the cost of a clear interface and may reduce users interaction, it may even cause
        accessibility issues. Understanding these tradeoffs and their weight is what leads to a
        great product. Design must be considered and deliberate and the same is true when designing
        the structure of backend systems. 

      </div>
      <div className="explore-title">Building for maintenance</div>
      <div className="explore-text">
        Architecture should be built with adaptability to accommodate for future growth and change.
        It must be clear and logically organised for others who are working on the project and correct
        error handling procedures will help save time fixing any unexpected bugs. Building a good
        backend involves seeing potential weaknesses and addressing them before they become a problem.
        This is why it is always valuable testing for edge cases. 
      </div>
      <div className="explore-title">Trade offs</div>
      <div className="explore-text">
        Making good choices is what makes great code. As mentioned, coding is full of tradeoffs. One
        might, in an effort to reduce the size of a code base, remove all helpful markers that another
        programmer might use to understand how the code is functioning. The level of security should
        be appropriate, a user could easily be put off by having to jump through too many hoops. Certain
        organising structures, frameworks and libraries might offer impressive advantages but have a huge
        effect on speed and efficiency. And, of course, speed of production vs quality of product, is a
        constant reality. These examples show that there is no definite right way, there is only optimising
        for your specific needs. 

      </div>
      <div className="explore-title">Secruity</div>
      <div className="explore-text">
        Security is always a thing to consider and in a changing tech environment it is essential to remain
        vigilant, recent security breaches have shown even the most commonly used and trusted resources are
        vulnerable and therefore a risk to the anyone using them. Especially with the use of AI in attacks
        it is likely the types of security risks will change and it is important to stay informed. A good
        programmer will always consider potential weak points in code and build in appropriate measures.

      </div>
      <div className="explore-title">Using AI</div>
      <div className="explore-text">
        The use of AI in coding is here and its role in the future building software will be enormous.
        It has the power to greatly improve productivity and change the shape of every work model currently
        used. Although I do use AI for many areas of my work, for me, I intend to have a long and constructive
        career in tech, which means developing the type of understanding that can only be acquired from getting
        your hands dirty and writing code for yourself. This is how you acquire real knowledge and gain a deep
        conceptual understanding of how systems operate. Which is, though it is often overlooked, a prerequisite
        to using AI effectively. Only if you approach it with the right knowledge and insight can you get useful
        results. As things currently stand, AI does incredible things but in all serious cases its work has to be
        checked. I intend to be the one who has the discernment to know what is good and what is not, and why.
      </div>
      <div className="explore-text">
        Of course using AI is its own particular skill. I have used it to retrieve and format data and to generate
        specific code. I am skilled at engineering prompts for the best results, and have experience using the RAG
        method. 
      </div>
      <div className="explore-text">
        I came across a post that I felt held an important sentiment for my current situation. “Are you using it
        (AI) to move faster and more efficiently, or are you using it to avoid learning? The moment something
        breaks or needs customising beyond what the AI gave you, you either know how it works or you're stuck.”
      </div>
      
      <div className="project-links">
        <NavLink to="/work/spring" className="project-link">
          Spring
        </NavLink>
        <NavLink to="/work/greciandb" className="project-link">
          Grecian Database
        </NavLink>
        <NavLink to="/work/sceneit" className="project-link">
          Scene It
        </NavLink>
        <NavLink to="/work/eatthefrog" className="project-link">
          Eat the frog
        </NavLink>
        
      </div>
    </>

  )
}

export default Principles