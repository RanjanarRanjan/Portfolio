import React from 'react';
import Sidebar from './Sidebar';

const projects = [
  {
    name: "Hospital Management System",
    description:
      "A web application for hospital operations, enabling appointment booking and admin control. Built with the MERN stack for efficient healthcare management.",
    objectives: [
      "Enhance hospital appointment management",
      "Reduce manual work for hospital staff",
      "Improve patient experience",
      "Provide an intuitive admin dashboard"
    ],
    features: [
      "User: Register, Login, Book/Cancel Appointments, View Profile",
      "Admin: Manage Doctors, View Users, View Appointments"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    repo: "https://github.com/RanjanarRanjan/Hospital-Management-System"
  },
  {
    name: "Library Management System",
    description:
      "A web-based system to manage library books. Users can view books and check availability. Admins can manage books securely with authentication.",
    objectives: [
      "Browse books without login",
      "Admin panel for book management",
      "Secure admin authentication"
    ],
    features: [
      "User: View Books, Check Availability",
      "Admin: Add/Edit Books, Manage Availability"
    ],
    technologies: [
      "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS",
      "Multer", "JWT", "dotenv"
    ],
    repo: "https://github.com/RanjanarRanjan/Library-Management-System-"
  },
  {
    name: "KBA Course Management System",
    description:
      "A MERN stack application to manage courses. Users can register, log in, and view courses. Admins manage course details efficiently.",
    objectives: [
      "Streamline course enrollment",
      "Intuitive interface for course exploration",
      "Efficient admin control"
    ],
    features: [
      "User: Register, Login, View Courses",
      "Admin: Add/Update/View Courses"
    ],
    technologies: [
      "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS",
      "Multer", "JWT"
    ],
    repo: "https://github.com/RanjanarRanjan/KBA-Course"
  },
  {
    name: "Certificate Management System",
    description:
      "Web app for creating and verifying certificates. Users can log in, issue certificates, and search by certificate ID.",
    objectives: [
      "Secure login",
      "Certificate issuance",
      "Search via Certificate ID"
    ],
    features: [
      "User: Login, Issue & View Certificates"
    ],
    technologies: [
      "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS",
      "Docker", "JWT", "Mongoose"
    ],
    repo: "https://github.com/RanjanarRanjan/Certiapp"
  },
  {
    name: "Student Management System (Admin)",
    description:
      "A mobile admin app built using React Native and NestJS to manage student records. Admins can add, update, delete, and view student data.",
    objectives: [],
    features: [
      "Admin: Login, Add/Update/Delete/View Students"
    ],
    technologies: ["React Native (Expo)", "NestJS (TypeScript)", "MongoDB", "CSS"],
    repo: "https://github.com/RanjanarRanjan/Student_Management_System"
  }
];

const ProjectCard = ({ project, index }) => (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-body">
        <h4 className="fw-bold">{index + 1}. {project.name}</h4>
        <p className="text-muted">{project.description}</p>
  
        {project.objectives.length > 0 && (
          <>
            <h6 className="fw-bold">🎯 Objectives:</h6>
            <ul>
              {project.objectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </>
        )}
  
        <h6 className="fw-bold">✨ Features:</h6>
        <ul>
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
  
        <h6 className="fw-bold">🛠 Technologies Used:</h6>
        <p>{project.technologies.join(", ")}</p>
  
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-sm">
          🔗 View Repository
        </a>
      </div>
    </div>
  );
  
const Projects = () => {
  return (
    <div id="projects" className="container-fluid py-5">
      <div className="row mx-3 shadow-lg bg-white rounded overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Project Content with Scroll */}
        <div className="col-md-9 p-5">
          <h2 className="fw-bold mb-4 text-uppercase text-center">Projects</h2>
          <p className="text-muted text-center mb-5">
            A showcase of major applications I have developed using modern web and mobile technologies.
          </p>

          <div style={{ height: '450px', overflowY: 'auto' }}>
          {projects.map((project, idx) => (
  <ProjectCard key={idx} index={idx} project={project} />
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
