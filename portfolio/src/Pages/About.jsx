/* art images import */

import Scratchcard from "../assets/paintings/scratchcard.jpg"
import Josh from "../assets/paintings/josh.jpg"
import House from "../assets/paintings/house.jpg"
import Shrimp from "../assets/paintings/shrimp.jpg"




/* blender img import */

import Brooch from "../assets/BlenderImages/brooch.png"
import Satellite from "../assets/BlenderImages/Satellite.mp4"
import Chair from "../assets/BlenderImages/Chair.jpg"
import Rhino from "../assets/BlenderImages/rhino.png"
import Bowling from "../assets/BlenderImages/bowling.mp4"
import Sword from "../assets/BlenderImages/sword.mp4"

function About() {
  return (
    <>
      <h1 className="about-title">About</h1>
      <p className="about-description">Passionate about working in the world of software. Keen to make
        software that works for people, helps them make their life better.
        Studied anthropology at university and have always be fascinated by
        people and how they live. My journey so far and what change my direction.
        Ability to learn, self taught lots.
      </p>

      <div className="chrome-box-outer about__artist">
        <div className="chrome-box-inner">Artist</div>
      </div>
      <div className="about__painting-grid">
          
          <img className="painting-img" src={Scratchcard}/>
          
          <img className="painting-img" src={Josh}/>
          <img className="painting-img" src={House}/>
          <img className="painting-img" src={Shrimp}/>
      </div>
      <div className="chrome-box-outer about__artist">
        <div className="chrome-box-inner">Digital Artist</div>
      </div>
      <div className="about__painting-grid">
          <div className="painting">
            <img className="painting-img" src={Brooch}/>
          </div>
          <div className="painting satellite-box">
            <video className="satellite-vid" controls>
              <source src={Satellite} type="video/mp4" />
            </video>
          </div>
          <div className="painting">
            <img className="painting-img" src={Chair}/>
          </div>
          <div className="painting">
            <img className="painting-img" src={Rhino}/>
          </div>
          <div className="painting satellite-box">
            <video className="satellite-vid" controls>
              <source src={Bowling} type="video/mp4" />
            </video>
          </div>
          <div className="painting satellite-box">
            <video className="satellite-vid" controls>
              <source src={Sword} type="video/mp4" />
            </video>
          </div>
      </div>
      <p className="about-personal">Reader, inspired by books maybe, something like that, have a family</p>
      <div className="pics-of-me">pictures of me</div>
    </>
  )
}

export default About