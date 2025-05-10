import React from 'react';
import Sidebar from './Sidebar';
import { FaEnvelope, FaPhone, FaLocationArrow, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div id='contacts' className="container-fluid py-5">
      <div className="row mx-3 shadow-lg bg-white rounded overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Contact Content */}
        <div className="col-md-9 pt-5">
          <h2 className="fw-bold mb-4 text-uppercase text-center">Contact Information</h2>

          <div className="row">
            {/* Email */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 p-4">
                <div className="d-flex align-items-center">
                  <FaEnvelope size={30} className="text-primary me-3" />
                  <div>
                    <h5>Email:</h5>
                    <p>
                      <a href="mailto:ranjanranjana509@gmail.com" className="text-decoration-none text-dark">
                        ranjanranjana509@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 p-4">
                <div className="d-flex align-items-center">
                  <FaPhone size={30} className="text-primary me-3" />
                  <div>
                    <h5>Phone:</h5>
                    <p>
                      <a href="tel:+919048192237" className="text-decoration-none text-dark">
                        9048192237
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 p-4">
                <div className="d-flex align-items-center">
                  <FaLocationArrow size={30} className="text-primary me-3" />
                  <div>
                    <h5>Location:</h5>
                    <p>Ernakulam, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 p-4">
                <div className="d-flex align-items-center">
                  <FaLinkedin size={30} className="text-primary me-3" />
                  <div>
                    <h5>LinkedIn:</h5>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/ranjana-ranjan-a7713b2b3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                      >
                        Ranjana's LinkedIn Profile
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 p-4">
                <div className="d-flex align-items-center">
                  <FaGithub size={30} className="text-primary me-3" />
                  <div>
                    <h5>GitHub:</h5>
                    <p>
                      <a
                        href="https://github.com/RanjanarRanjan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                      >
                        Ranjana's GitHub Profile
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
