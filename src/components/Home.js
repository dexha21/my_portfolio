import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <div className=".home-container">
        <h1>DESTINY UYI AKUGBE</h1>
        <p>Senior Web Developer specializing in Full-Stack Development</p>
        <p >
          With a strong passion for crafting high-quality, scalable web and mobile applications, I bring a wealth of experience in both front-end and back-end development. My expertise spans across various technologies including React, PHP, Laravel, MySQL, and more. I am committed to delivering solutions that not only meet client expectations but also push the boundaries of innovation in web development.
        </p>
        <div className="buttons">
          <Link to="/projects" className="btn btn-primary" style={{ marginRight: '10px' }}>View Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Contact</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
