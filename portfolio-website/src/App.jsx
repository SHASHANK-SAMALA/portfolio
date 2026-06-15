import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import ParticleField from './components/ParticleField';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="app-wrapper">
          <div className="aurora-bg" />
          
          {/* Ambient lighting orbs */}
          <div className="ambient-orb orb-cyan" />
          <div className="ambient-orb orb-purple" />
          <div className="ambient-orb orb-magenta" />

          {/* Grid background & Particles */}
          <div className="grid-bg" />
          <ParticleField />

          {/* Main content */}
          <div className="main-content">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
