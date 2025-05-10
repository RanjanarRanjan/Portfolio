// Skills.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { FaCode, FaTools, FaPaintBrush } from 'react-icons/fa';

const skills = {
  "Frontend": ["HTML5", "CSS", "Tailwind", "Bootstrap", "JavaScript", "TypeScript", "React.js", "React Native"],
  "Backend": ["Node.js", "NestJS", "Express", "MongoDB", "Postman", "Python", "Django"],
  "Tools & Design": ["Figma"]
};

const SkillCard = ({ icon, title, skillList }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <div className="me-3 fs-3 text-warning">{icon}</div>
          <h5 className="card-title mb-0 fw-bold">{title}</h5>
        </div>
        <div className="d-flex flex-wrap gap-2">
          {skillList.map((skill, idx) => (
           <span key={idx} className="badge bg-warning text-dark px-3 py-2" style={{ width: '100px' }}>
           {skill}
         </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div id="skills" className="container-fluid py-5">
      <div className="row mx-3 shadow-lg bg-white rounded overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Skills Content */}
        <div className="col-md-9 p-5">
          <h2 className="fw-bold mb-4 text-uppercase text-center">My Skills</h2>
          <p className="text-muted text-center mb-5">
            Here are some of the key technologies and tools I work with across frontend, backend, and design.
          </p>
          <div className="row">
            <SkillCard icon={<FaCode />} title="Frontend" skillList={skills.Frontend} />
            <SkillCard icon={<FaTools />} title="Backend & Dev Tools" skillList={skills.Backend} />
            <SkillCard icon={<FaPaintBrush />} title="Design & Prototyping" skillList={skills["Tools & Design"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
