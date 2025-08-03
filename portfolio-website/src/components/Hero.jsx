import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Hero() {
  return (
    <section className="hero-section" style={{
      background: 'radial-gradient(ellipse at center, #090a0f 0%, #1b2735 100%)',
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 2,
      margin: 0,
      padding: 0
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span style={{color: '#ffd700'}}>Shashank Samala</span>
              </h1>
              <h2 className="h4 mb-4 text-light">MERN Stack & ML Engineer</h2>
              <p className="lead mb-4">
                Passionate about building innovative web applications and machine learning solutions. 
                Currently pursuing CSE at Keshav Memorial Institute of Technology.
              </p>
              <div className="social-links mb-4">
                <a href="mailto:shashanksamala77@gmail.com" className="btn btn-outline-light me-3">
                  <FaEnvelope className="me-2" />
                  Email
                </a>
                <a href="tel:9652685002" className="btn btn-outline-light me-3">
                  <FaPhone className="me-2" />
                  Call
                </a>
                <a href="/assets/SHASHANK_SAMALA.pdf" download className="btn btn-outline-light me-3">
                  <FaEnvelope className="me-2" />
                  Download Resume
                </a>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/shashank-samala/" className="text-white me-3 fs-3" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/SHASHANK-SAMALA" className="text-white me-3 fs-3" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/Shashank_samala/" className="text-white me-3 fs-3" aria-label="LeetCode">
                  <SiLeetcode />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="hero-image text-center">
              <div className="profile-placeholder" style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <img
  src="/assets/IMG_7900.jpg"
  alt="Profile"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%'
  }}
/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
