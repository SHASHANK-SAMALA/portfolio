import React from 'react';
import { FaGraduationCap, FaCode, FaAws } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold text-primary">About Me</h2>
          <div className="underline mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#007bff', margin: '20px auto' }}></div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4" data-aos="fade-right">
            <h3 className="h4 mb-3 text-primary">MERN Stack & Machine Learning Engineer</h3>
            <ul className="list-unstyled">
              <li className="mb-2">🎓 Computer Science Engineering student at <strong>Keshav Memorial Institute of Technology</strong> (CGPA: 8.8).</li>
              <li className="mb-2">💻 Expertise in full-stack web development (MERN stack) and machine learning applications.</li>
              <li className="mb-2">🌟 Experience in healthcare, education, hospitality, and e-commerce domains.</li>
            </ul>
          </div>

          <div className="col-lg-6 mb-4" data-aos="fade-left">
            <div className="card p-4 shadow-sm">
              <h4 className="text-primary mb-3">Key Stats</h4>
              <div className="row text-center">
                <div className="col-4">
                  <h5 className="text-primary fw-bold">10+</h5>
                  <small className="text-muted">Skills</small>
                </div>
                <div className="col-4">
                  <h5 className="text-primary fw-bold">3</h5>
                  <small className="text-muted">Projects</small>
                </div>
                <div className="col-4">
                  <h5 className="text-primary fw-bold">8.8</h5>
                  <small className="text-muted">CGPA</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h5 className="text-primary mb-3">Development Tools</h5>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <span className="badge bg-light text-dark p-2 shadow-sm">VS Code</span>
              <span className="badge bg-light text-dark p-2 shadow-sm">Cursor</span>
              <span className="badge bg-light text-dark p-2 shadow-sm">Warp Terminal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
