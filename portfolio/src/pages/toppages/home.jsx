

import Profilepic from "../../assets/profile/profilepicnobackground.png"
import CommunicationIcon from "../../assets/icons/indicators/communication.png"

import Chat from "../../assets/icons/indicators/chat.png"
import Idea from "../../assets/icons/indicators/idea.png"
import Setting from "../../assets/icons/indicators/setting.png"

import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <h1 className="home-title">Welcome</h1>
      <div className="pic-small-box">
        <img className="profile-pic-small" src={Profilepic}/>
      </div>
      <div className='tech-divider-home'>
        <div className="tech-divider-home__text">
          Tech Used: HTML - CSS - JavaScript - React js - Python
        </div>
        
      </div>
      <div className='chrome-box-outer intro-box'>
        <div className='chrome-box-inner'>
          Hello, I’m Simon. I’m a self taught full-stack software developer looking
          for an opportunity to start my career in the field.
          <br></br>
          <br></br>
          Having an understanding of all the working parts that create a fully
          functioning application means that whichever area I am focusing my attention
          on, I will always keep in mind the big pictures and how that specific element
          will interact with those around it.
        </div>
      </div>
      
      <div className='orange-divider-home'>
        <img className="guy-pic" src={Profilepic}/>
      </div>
      <div className="key-principles-text">
        There are a few key principles I think are vital for a project to reach its best form. Communication. Maintainability. Creativity.
      </div>
      <motion.div
        className='chrome-box-outer intro-box'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="chrome-box-inner">
          <h3>Communication</h3>
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
          
        </div>
      </motion.div>
      <div className="blue-divider-home"></div>
      <motion.div
        className='chrome-box-outer intro-box'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="chrome-box-inner">
          <h3>Maintainability</h3>
          <div className="maintain-box__text-icon-split">
            <p>
              Readable code that is understood at a glance, helps work done today and in the future.
              Conscious and deliberate decisions about system architecture allow for potential scaling
              and reduce headaches when changes inevitably have to be made. Clear and precise notes are
              a must. Be kind to your future self (or those who come after you). 
            </p>
            <img className="comm-icon" src={Setting}></img>
          </div>
          
        </div>
      </motion.div>
      <div className="yellow-divider-home"></div>
      <motion.div
        className='chrome-box-outer intro-box'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="chrome-box-inner">
          <h3>Creativity</h3>
          <div className="creative-box__text-icon-split">
            <p>
              Creative thinking creates solutions. Whether that happens through tailoring an algorithm to
              sort data in the most efficient way, or through finding a new design style that captures a user's
              imagination in a unique way. It is creativity and the passion it fuels that gets good work done.
              Used well, creativity is what shifts the ordinary from the mundane to the spectacular.
            </p>
            <img className="comm-icon" src={Idea}></img>
          </div>
          
        </div>
      </motion.div>
    </>
  )
}

export default Home