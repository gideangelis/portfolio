import React from "react";
import "./contact.css";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiArrowRightLine } from "react-icons/ri";

// EmailJS
import { useRef } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm("service_172pxkd", "template_j5lknpn", form.current, '4v0AulWitijsB47p2')
      e.target.reset() //the form will reset after submit
  };

  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className="icon" />
              </div>
              <h4>Instagram</h4>
              <span className="username">@gideangelis_</span>

              <div>
                <a
                  href="https://www.instagram.com/gideangelis_/"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send message <RiArrowRightLine className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <BsLinkedin className="icon" />
              </div>
              <h4>LinkedIn</h4>
              <span className="username">Giorgia De Angelis</span>

              <div>
                <a
                  href="https://www.linkedin.com/in/giorgia-de-angelis-webdev/"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send message <RiArrowRightLine className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <BsTwitter className="icon" />
              </div>
              <h4>Twitter</h4>
              <span className="username">@gideangelis_</span>

              <div>
                <a
                  href="https://twitter.com/gideangelis_"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send message <RiArrowRightLine className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter your name" name="name" />
            <input type="text" placeholder="Enter your email" name="email" />
            <textarea
              name="message"
              placeholder="Enter your message"
            ></textarea>
            <button className="formBtn" type="submit">
              Send email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
