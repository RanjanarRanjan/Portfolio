// Internship.jsx
import React from 'react';
import Sidebar from './Sidebar';
import certificateImg from '../assets/internship-certificate.jpg'; // Adjust the path as needed

const Internship = () => {
  return (
    <div id="internships" className="container-fluid py-5">
      <div className="row mx-3 shadow-lg bg-white rounded overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Internship Content */}
        <div className="col-md-9 p-5">
          <h2 className="fw-bold mb-4 text-uppercase text-center">Internship Certificate</h2>

          <div className="text-center mb-5">
            <img 
              src={certificateImg} 
              alt="Internship Certificate" 
              className="img-fluid shadow-sm rounded border" 
              style={{ maxHeight: '400px' }} 
            />
          </div>
          <div className="px-3">
  <p>
    <strong>RANJANA RANJAN</strong> completed a 6-month internship as a <strong>Full-stack Developer</strong> at 
    <strong> Ruppells Solutions Private Limited</strong>, Cochin (05/02/2024 – 05/08/2024).
    We wish her continued success and believe this experience provides a solid foundation for her development career.
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Internship;
