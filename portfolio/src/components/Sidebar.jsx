// Sidebar.js
import React from 'react';
import profilePic from '../assets/img2.jpeg'; // Update the path as necessary

const Sidebar = () => {
  return (
    <div className="col-md-3 bg-warning text-center py-5 text-white">
      <img
        src={profilePic}
        alt="Ranjana"
        className="rounded-2"
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <h5 className="fw-bold">Ranjana</h5>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <a className="nav-link text-white" href="#home">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#skills">SKILLS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#projects">PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#internships">INTERNSHIP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#certificates">CERTIFICATES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contacts">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
