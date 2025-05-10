import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImg from './assets/background.jpg';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Internship from './components/Internship';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    alignItems: 'stretch', // Make components stretch to same height
    justifyContent: 'center',
    gap: '20px', // Optional spacing between components
    padding: '20px', // Optional padding
  };

  return (
    <div style={backgroundStyle}>
      <Home />
      <About />
      <Skills />
      <Project />
      <Internship />
      <Certificate />
      <Contact />
    </div>
  );
};

export default App;
