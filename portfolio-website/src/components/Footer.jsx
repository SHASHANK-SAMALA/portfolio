import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Copyright */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © 2024 Made  by{' '}
              <strong className="text-primary">Shashank Samala</strong>
            </p>
            <small className="text-muted">
              MERN Stack & Machine Learning Engineer
            </small>
          </div>

          {/* Social Links */}
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
              <a 
                href="mailto:shashanksamala77@gmail.com" 
                className="text-white hover-primary"
                aria-label="Email"
                style={{transition: 'color 0.3s ease'}}
              >
                <FaEnvelope size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shashank-samala/" 
                className="text-white hover-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{transition: 'color 0.3s ease'}}
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/SHASHANK-SAMALA" 
                className="text-white hover-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{transition: 'color 0.3s ease'}}
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://leetcode.com/u/Shashank_samala/" 
                className="text-white hover-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                style={{transition: 'color 0.3s ease'}}
              >
                <SiLeetcode size={20} />
              </a>
              
              {/* Scroll to Top Button */}
              <button 
                onClick={scrollToTop}
                className="btn btn-outline-light btn-sm ms-3"
                aria-label="Scroll to top"
                style={{transition: 'all 0.3s ease'}}
              >
                <FaArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="row mt-3 pt-3 border-top border-secondary">
          <div className="col-12 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-4 text-muted small">
              <span>🎓 CSE Student at KMIT</span>
              <span>📍 Hyderabad, India</span>
              <span>💼 Available for opportunities</span>
              <span>🚀 CGPA: 8.8/10</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-primary:hover {
          color: #007bff !important;
        }
        
        .btn-outline-light:hover {
          background-color: #007bff;
          border-color: #007bff;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
