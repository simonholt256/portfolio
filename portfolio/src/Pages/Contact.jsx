import LinkedIn from "../assets/icons/linkedin.svg"
import GitHub from "../assets/icons/github.svg"

import ChromeHoop from "../assets/chromehoop.png"


function Contact() {
  return (
    <>
      <h1 className="home-title">Contact</h1>
      <div className="contact-page-box">
        <h2>Send me a message and I'll back to you as soon as I can</h2>
        <form action="https://formspree.io/f/mojygzqn"  method="post" className="form-box">
          <label className="label" htmlFor="contact-name" >Name:* </label>
          <input type="text" name="name" id="contact-name" required/> 
          <label className="label" htmlFor="contact-email">Email:* </label>
          <input type="email" name="email" id="contact-email" required/>
          <label className="label" htmlFor="contact-telephone">Telephone: </label>
          <input type="tel" name="telephone" id="contact-telephone"/>
          <label className="label" htmlFor="contact-message">Message:* </label>
          <textarea name="message" maxLength="240" id="contact-message" required></textarea>
          <input type="submit" value="Send message" className="submit-button"/>
    
        </form>
        <div>Or reach out to me on GitHub or LinkdIn</div>
        <div className="contact__social-box">
          <div>
            <a href="https://github.com/simonholt256" target="_blank"><img className="contact__social-link" src={GitHub}/></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/simon-holt-763282385/" target="_blank"><img className="contact__social-link" src={LinkedIn}/></a>
          </div>
        </div>
      </div>
      
      
      
      <div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Contact