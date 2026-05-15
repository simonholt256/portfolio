
import { NavLink } from "react-router-dom"

import Profilepic from "../../assets/profile/profilepicnobackground.png"
import CommunicationIcon from "../../assets/icons/indicators/communication.png"

import Chat from "../../assets/icons/indicators/chat.png"
import Idea from "../../assets/icons/indicators/idea.png"
import Setting from "../../assets/icons/indicators/setting.png"

import CreativeStock from "../../assets/design/creative-stock.png"

import { motion } from "framer-motion";

function Home() {
  return (
    <>
    <div className="tech-block-marquee">
      <div className="tech-block-track">
        <div className="tech-block-content">
          <div className="marquee-item">React JS</div>
          <div className="marquee-item">Python</div>
          <div className="marquee-item">PostgreSQL</div>
          <div className="marquee-item">HTML</div>
          <div className="marquee-item">Fast API</div>
          <div className="marquee-item">CSS</div>
          <div className="marquee-item">React JS</div>
          <div className="marquee-item">Python</div>
          <div className="marquee-item">PostgreSQL</div>
          <div className="marquee-item">HTML</div>
          <div className="marquee-item">Fast API</div>
          <div className="marquee-item">CSS</div>
        </div>
        <div className="tech-block-content">
          <div className="marquee-item">React JS</div>
          <div className="marquee-item">Python</div>
          <div className="marquee-item">PostgreSQL</div>
          <div className="marquee-item">HTML</div>
          <div className="marquee-item">Fast API</div>
          <div className="marquee-item">CSS</div>
          <div className="marquee-item">React JS</div>
          <div className="marquee-item">Python</div>
          <div className="marquee-item">PostgreSQL</div>
          <div className="marquee-item">HTML</div>
          <div className="marquee-item">Fast API</div>
          <div className="marquee-item">CSS</div>
        </div>
      </div>
    </div> 
    <div className="intro-box">
      
      <div className="tech-info-box">
        <div className="intro-title-box">Hi, I'm Simon,<br></br> what can I do for you?</div>
        
          <div className="intro-text-box">
            I’m a self taught full-stack software developer looking
            for an opportunity to start my career in the field.
            <br></br>
            <br></br>
            Having an understanding of all the working parts that create a fully
            functioning application means that whichever area I am focusing my attention
            on, I will always keep in mind the big pictures and how that specific element
            will interact with those around it.
            <div className="orange-border"></div>
          </div>

        
      </div>
      <div className="profile-picture-box">
        <div className="yellow-pattern">
          <img className="profile-pic" src={Profilepic}/>
        </div>
      </div>
    </div>
    <div className="phone-intro-box">
      {/* <div className="phone-tech-block">python etc</div> */}
      <div className="phone-title">Hi, I'm Simon,<br></br> what can I do for you?</div>
      <div className="phone-profile-picture-box">
        <div className="yellow-pattern">
          <img className="profile-pic" src={Profilepic}/>
        </div>
      </div>
      <div className="phone-text">
        I’m a self taught full-stack software developer looking
        for an opportunity to start my career in the field.
        <br></br>
        <br></br>
        Having an understanding of all the working parts that create a fully
        functioning application means that whichever area I am focusing my attention
        on, I will always keep in mind the big pictures and how that specific element
        will interact with those around it.
      </div>
    </div>
      
      <div className='divider-home'>
      </div>

      <div className="view-projects-box">
        <div className="view-projects-display">
          <NavLink to="/work" className="view-projects-button">
            View Projects
          </NavLink>
        </div>
      </div>
      <div className="key-principles-text">
        There are a few key principles I think are vital for a project to reach its best form.
      </div>
      <div className="principle-anchor-box">
        <div className="principle-anchor-box__item"><a className="principle-anchor" href="#communication">Communication</a></div>
        <div className="principle-anchor-box__item"><a className="principle-anchor" href="#maintainability">Maintainability</a></div>
        <div className="principle-anchor-box__item"><a className="principle-anchor" href="#creativity">Creativity</a></div>
      </div>
      <motion.div
        className="text-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        viewport={{ once: true, amount: 0.2 }}
      >
          <h3 id="communication">Communication</h3>
          <div className="communication-box__text-icon-split">
            <p>
              Communication amongst the team and communication with a client. In a work
              environment with many moving parts, knowing what one's role is, what others
              are working on, and knowing exactly what is desired is invaluable. Everywhere
              I have worked, communication, or the lack of it, was the thing that could make
              or break an initiative. 
            </p>
            <img className="comm-icon" src={Chat}></img>
            
          </div>
      </motion.div>
      <div className="blue-divider-home"></div>
      <motion.div
        className="text-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 id="maintainability">Maintainability</h3>
        <div className="maintain-box__text-icon-split">
          <p>
            Readable code that is understood at a glance, helps work done today and in the future.
            Conscious and deliberate decisions about system architecture allow for potential scaling
            and reduce headaches when changes inevitably have to be made. Clear and precise notes are
            a must. Be kind to your future self (or those who come after you). 
          </p>
          <img className="comm-icon" src={Setting}></img>
        </div>
      </motion.div>
      <div className="yellow-divider-home"></div>
      <motion.div
        className="text-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 id="creativity">Creativity</h3>
        <div className="creative-box__text-icon-split">
          <p>
            Creative thinking creates solutions. Whether that happens through tailoring an algorithm to
            sort data in the most efficient way, or through finding a new design style that captures a user's
            imagination in a unique way. It is creativity and the passion it fuels that gets good work done.
            Used well, creativity is what shifts the ordinary from the mundane to the spectacular.
          </p>
          <img className="comm-icon" src={Idea}></img>
        </div>
      </motion.div>
      {/* <img className="creative-stock" src={CreativeStock}></img> */}
    </>
  )
}

export default Home