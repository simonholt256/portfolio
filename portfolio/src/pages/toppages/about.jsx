/* art images import */

import Scratchcard from "../../assets/art/paintings/scratchcard.jpg"
import Josh from "../../assets/art/paintings/josh.jpg"
import House from "../../assets/art/paintings/house.jpg"
import Shrimp from "../../assets/art/paintings/shrimp.jpg"




/* blender img import */

import Brooch from "../../assets/art/blender/brooch.png"
import Satellite from "../../assets/art/blender/Satellite.mp4"
import Chair from "../../assets/art/blender/Chair.jpg"
import Rhino from "../../assets/art/blender/rhino.png"
import Bowling from "../../assets/art/blender/bowling.mp4"
import Sword from "../../assets/art/blender/sword.mp4"

function About() {
  return (
    <>
      <h1 className="about-title">About</h1>
      <p className="about-description">My passion for coding was born from an unquenchable
        desire to understand how things work and a love of problem solving. I love learning
        new things and in a field where new technologies are always emerging, and there are
        endless avenues to explore, it will always be intellectually stimulating. I enjoy the
        struggle of working away at a problem for hours to eventually find the solution. And,
        of course, it's such a huge part of our world and can do so much to help people's
        quality of life. I am most interested in making software that works <em className="about-description-italic">for</em> people.
      </p>

      <p className="about-description">I have always been passionate about people, this
        passion led me to study Anthropology
        at University, joint Social and Biological. This gave an enlightening mixture of
        learning about the vast varieties of cultures on our planet, what we share and what
        unique in peoples behaviours and perspectives, and examining the raw scientific data
        about origins of our species. This interest in people's ways of life, mixed with an
        analytical mindset, remains present in everything I do. I have always valued having
        a deep understanding of the concepts and structures around the particular area I am
        working on.
      </p>

      <p className="about-description">I have spent many years as a freelance artist working in
        many mediums, including oil,
        gouache and clay. Throughout this time I have also worked in various hospitality roles,
        where my friendly nature, ability to work at speed under pressure, and strong work ethic
        has been vital. These customer facing roles also require the confidence to face and deal
        with any and all types of people. Anyone who has worked at a bar in a coastal town at
        the height of summer knows that that is where resilience is forged. 
      </p>

      <div className="chrome-box-outer about__artist">
        <div className="chrome-box-inner">As an artist...
          <p>Over the years the style of art I have created has changed and developed. Though
            there is always a constant in what creating art demands. An almost obsessive attention
            to detail, an ability to find an issue and figure out how to fix it, and a desire to
            create the best end result possible. Making and selling art of course requires an eye
            for aesthetics and good design but there is so much more. The majority of my sold work
            has been commissions. This means working with customers to understand what they really
            want even if they don't have a clear idea or don’t know how to explain it. Often it is
            as much about understanding people and building relationships as it is about the painting
            itself. See examples of my work below.</p>
        </div>
        
      </div>
      <div className="about__painting-grid">
          
          <img className="painting-img" src={Scratchcard}/>
          
          <img className="painting-img" src={Josh}/>
          <img className="painting-img" src={House}/>
          <img className="painting-img" src={Shrimp}/>
      </div>
      <div className="chrome-box-outer about__artist">
        <div className="chrome-box-inner">Digital Artist
          <p>My exploration into digital art began much more recently, and is more so a testament to my
          ability to learn quickly using freely available resources. I use blender which is itself a
          free software. It demands the use of creative technical solutions and being able to identify
          when and where to apply specific techniques. It also requires an optimising mindset. There are
          expensive (in terms of computer power and render times) ways of creating things, and cheap ways,
          meaning you are always calculating the value of making trade-offs as you work. It also demands
          an adherence to a structured workflow and highly organised documents. </p>
        </div>
        
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
      <p className="about-personal">
        I'm also an avid reader and enjoy creative writing. Some of my favourite authors
        include Kafka, Terry Pratchett, John Berger, and Kazuo Ishiguro. But for all these pursuits
        what I really enjoy the most, though it might sound cliche, is spending quality time with
        my wife and son. 
      </p>
      {/* <div className="pics-of-me">pictures of me</div> */}
    </>
  )
}

export default About