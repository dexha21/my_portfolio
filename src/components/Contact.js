import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the methods below:</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:Akugbed2@gmail.com">Akugbed2@gmail.com</a>
            </p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>
              <a href="tel:+2349038692680">+2349038692680</a>
            </p>
          </div>
          <div className="contact-item">
            <h3>WhatsApp</h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/2349038692680?text=Hi%20my%20name%20is"
              >
                +2349038692680
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
