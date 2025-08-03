import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot, FaHospital } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiTensorflow } from 'react-icons/si';

function Projects() {
 const projects = [
  {
    id: 1,
    title: "Domain-Specific ChatBot",
    description: "A domain-specific chatbot for SMEs built using Gemini Pro API to answer user queries from uploaded PDFs using RAG (Retrieval-Augmented Generation) for real-time, accurate interactions.",
    technologies: [
      { name: "Python", icon: SiPython, color: "text-warning" },
      { name: "Gemini Pro API", icon: FaRobot, color: "text-danger" },
    ],
    features: [
      "PDF Information Extraction",
      "Retrieval-Augmented Generation",
      "Real-time Responses",
      "Scalable for SME Use"
    ],
    github: "https://github.com/SHASHANK-SAMALA/DSC-BACKEND",  // Add GitHub link if available
    demo: "https://github.com/SHASHANK-SAMALA/DSC-BACKEND",    // Add live demo if hosted
    icon: FaRobot,
    status: "Completed"
  },
  {
    id: 2,
    title: "ATS Resume Parser & Job Evaluator",
    description: "A full-stack platform that parses resumes using NLP and matches them semantically with job descriptions, providing interactive mock evaluations with real-time scoring and visual feedback.",
    technologies: [
      { name: "React.js", icon: SiReact, color: "text-info" },
      { name: "Flask", icon: FaCode, color: "text-danger" },
      { name: "MongoDB", icon: SiMongodb, color: "text-success" },
    ],
    features: [
      "NLP-based Resume Parsing",
      "Semantic Role Matching",
      "Real-time Visualizations",
      "Feedback Modals"
    ],
    github: "https://github.com/rithesh10/InterviewPreparationBot",
    demo: "https://github.com/rithesh10/InterviewPreparationBot",
    icon: FaCode,
    status: "Completed"
  },
  {
    id: 3,
    title: "Product Review Sentiment Analyzer",
    description: "A sentiment analysis tool that scrapes product reviews from e-commerce sites in real time, classifies them using VADER, and visualizes polarity through interactive charts.",
    technologies: [
      { name: "React.js", icon: SiReact, color: "text-info" },
      { name: "Flask", icon: FaCode, color: "text-danger" },
      { name: "NLTK (VADER)", icon: SiPython, color: "text-warning" },
    ],
    features: [
      "Live Review Scraping",
      "VADER Sentiment Analysis",
      "Pie/Bar Chart Visualization",
      "Real-time Insights"
    ],
    github: "https://github.com/SHASHANK-SAMALA/ProductReview-backend",
    demo: "https://opinionpulse.vercel.app/",
    icon: FaCode,
    status: "Completed"
  },

];


  return (
    <section id="projects" className="py-5" style={{
      background: 'radial-gradient(ellipse at center, #090a0f 0%, #1b2735 100%)',
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      boxSizing: 'border-box',
      margin: 0,
      padding: 0
    }}>
      <div style={{width: '100%', padding: 0, margin: 0}}>
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-primary">My Projects</h2>
            <div className="underline mx-auto" style={{
              width: '100px',
              height: '3px',
              backgroundColor: '#007bff',
              margin: '20px auto'
            }}></div>
            <p className="lead text-white">Here are some of my recent projects that showcase my skills and expertise</p>
          </div>
        </div>
        
        <div className="row">
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="card h-100 border-0 shadow-sm hover-card" style={{transition: 'transform 0.3s ease'}}>
                <div className="card-header bg-primary text-white text-center py-3">
                  <project.icon size={30} className="mb-2" />
                  <h5 className="card-title mb-0">{project.title}</h5>
                  <span className={`badge ${project.status === 'Completed' ? 'bg-success' : 'bg-warning'} mt-2`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="card-body">
                  <p className="card-text text-muted mb-3">{project.description}</p>
                  
                  <div className="technologies mb-3">
                    <h6 className="text-primary mb-2">Technologies Used:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="d-flex align-items-center bg-light px-2 py-1 rounded">
                          <tech.icon className={`me-1 ${tech.color}`} size={16} />
                          <small>{tech.name}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="features mb-3">
                    <h6 className="text-primary mb-2">Key Features:</h6>
                    <ul className="list-unstyled">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="mb-1">
                          <small className="text-muted">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {feature}
                          </small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="card-footer bg-transparent border-0 d-flex gap-2">
                  <a 
                    href={project.github} 
                    className="btn btn-outline-primary flex-fill"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="me-2" />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    className="btn btn-primary flex-fill"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <p className="text-white mb-3 ">Want to see more of my work?</p>
            <a href="https://github.com/SHASHANK-SAMALA" className="btn btn-outline-primary btn-lg">
              <FaGithub className="me-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
