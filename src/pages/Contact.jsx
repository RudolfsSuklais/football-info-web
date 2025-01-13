import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page-headline">
        <h1>We’d Love to Hear from You</h1>
      </div>

      <div className="contact-page-content-wrapper">
        <div className="contact-page-text">
          <p>
            Have questions, feedback, or suggestions? Want to collaborate or
            share your love for football legends? We’re here for you! Reach out
            to us using the options below.
          </p>
        </div>
        <div className="contact-page-form">
          <form>
            <label>Name</label>
            <input type="text" required />
            <label>Email</label>
            <input type="email" required />
            <label>Message</label>
            <textarea rows="5" columns="50" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
