// About.js
import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import profilePic from '../assets/img2.jpeg'; // Optional, if you want to use the profile picture in About

const About = () => {
  return (
    <div id="about" className="container-fluid py-5">
      <div className="row mx-3 shadow-lg bg-white rounded overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar /> {/* Reusing Sidebar component */}

        {/* Right Content */}
        <div className="col-md-9 p-5">
          <h2 className="fw-bold">ABOUT ME</h2>
          <p className="text-muted">
            I'm <strong className="text-dark">Ranjana Ranjan</strong>, a <em>Full-Stack Developer</em> As a recent Master of Computer Applications (MCA) graduate, I am a motivated and technically skilled individual with a passion for software development and technology innovation. My academic background has provided me with a solid foundation in programming, database management, and software engineering principles. I am currently pursuing a Postgraduate Diploma in Blockchain Technology, further expanding my expertise in cutting-edge decentralized systems and secure digital solutions. I am eager to bring my knowledge and skills to real-world projects, where I can contribute effectively to a dynamic and forward-thinking organization.
          </p>

          {/* Education Section */}
          <h3 className="fw-bold text-center mb-4">Education</h3>
          <div className="row text-center my-4">
            <div className="col-12 col-md-4 mb-3">
              <h4 className="text-warning fw-bold">PG Diploma in Blockchain</h4>
              <small className="text-muted">KBA | 2024-2025</small>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h4 className="text-warning fw-bold">MCA</h4>
              <small className="text-muted">Calicut University | 2022-2024</small>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h4 className="text-warning fw-bold">BCA</h4>
              <small className="text-muted">MG University | 2019-2022</small>
            </div>
          </div>

          {/* What I Do */}
          <h5 className="fw-bold mt-4 mb-3">What I Do</h5>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>✔ Full-Stack Development</li>
                <li>✔ REST API Integration</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>✔ Mobile App Development</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
