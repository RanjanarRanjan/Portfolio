import React from 'react';
import img1 from '../assets/img1.jpeg'; // Replace with your image

const Home = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      id='home'
      style={{ height: '80vh' }} // Reduced height
    >
      <div
        className="row bg-white shadow-lg rounded overflow-hidden"
        style={{ width: '74%', height: '100%' }} // Control size
      >
        {/* Left Section - Text */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <h6 className="text-secondary">HI THERE!</h6>
          <h1 className="fw-bold">
            I'M <span className="text-warning">RANJANA</span>
          </h1>
          <h6 className="text-warning fw-bold mb-3">FULL-STACK Developer</h6>
          <p className="text-muted">
            I am a full-stack developer skilled in both front-end and back-end technologies, creating responsive applications with seamless user experiences.
          </p>

          <a
            className="btn btn-warning text-white mt-5 py-2 rounded-pill"
            aria-label="Learn more about me"
            href="#about"
          >
              MORE ABOUT ME
          </a>
        </div>

        {/* Right Section - Full Size Image with Vertical Nav */}
        <div className="col-md-6 p-0 position-relative" style={{ height: '100%' }}>
          <img
            src={img1}
            alt="Ranjana"
            className="w-100 h-100"
            style={{ objectFit: 'cover', display: 'block' }}
            aria-hidden="true"
          />

          
        </div>
      </div>
    </div>
  );
};

export default Home;
