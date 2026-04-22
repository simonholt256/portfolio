function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <h2>Send me a message and I'll back to you as soon as I can</h2>
      <form action="#" method="post" className="form-box">
        <label className="label" htmlFor="contact-name">Name:* </label>
        <input type="text" id="contact-name" required/> 
        <label className="label" htmlFor="contact-email">Email:* </label>
        <input type="email" id="contact-email" required/>
        <label className="label" htmlFor="contact-telephone">Telephone: </label>
        <input type="tel" id="contact-telephone"/>
        <label className="label" htmlFor="contact-message">Message:* </label>
        <textarea maxlength="240" id="contact-message" required></textarea>
        <input type="submit" value="Send message" className="submit-button"/>
  
      </form>
      <div>Or reach out to me on GitHub or LinkdIn</div>
      <div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Contact