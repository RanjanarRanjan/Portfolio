import React from 'react';
import Sidebar from './Sidebar';
import certificateImg1 from '../assets/certificateImg1.jpg'; // Adjust the path as needed
import certificateImg2 from '../assets/certificateImg2.jpg'; // Adjust the path as needed

const Certificate = () => {
  return (
    <div id='certificates' className="container-fluid py-5">
      <div className="row mx-3 shadow-lg bg-white rounded overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Certificate Content */}
        <div className="col-md-9 pt-5">
          <h2 className="fw-bold mb-4 text-uppercase text-center"> Certificates</h2>

          <div className="row">
            {/* First Certificate */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 p-3">
                <img 
                  src={certificateImg1} 
                  alt="Certificate 1" 
                  className="card-img-top img-fluid"
                  style={{ objectFit: 'contain', width: '100%', maxHeight: '500px' }} 
                />
              </div>
            </div>

            {/* Second Certificate */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 p-3">
                <img 
                  src={certificateImg2} 
                  alt="Certificate 2" 
                  className="card-img-top img-fluid"
                  style={{ objectFit: 'contain', width: '100%', maxHeight: '500px' }} 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Certificate;
