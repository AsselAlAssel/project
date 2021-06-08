import React from "react";
import "../style/contact-us.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-text">
        <h1>
          Contact <span>Us</span>
        </h1>
        <br />
        <br />

        <h2>Now Started <br/> Download<br/> Free Landing page</h2>
      <br />
      <button className="contact-btn">Download</button>
      </div>
      <div className="form">
          <form method="post">
              <input type="text" placeholder="Full Name" required />
              <br />
              <input type="email" placeholder="Email" required/>
              <br />
              <input type="Phone" placeholder="Phone" required/>
              <br />
              <input type="text" placeholder="Message" required />
              <br />
              <input type="submit" value="Send"/>
 

          </form>
      </div>
    </div>
  );
};
export default Contact;
