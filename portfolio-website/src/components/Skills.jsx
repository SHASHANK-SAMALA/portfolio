import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="row text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold text-primary">My Skills</h2>
          <div className="underline mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#007bff', margin: '20px auto' }}></div>
        </div>

        <div className="row text-center">
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <FaHtml5 size={40} className="text-white mb-2" />
            <h4 className="text-white">HTML5</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <FaCss3Alt size={40} className="text-white mb-2" />
            <h4 className="text-white">CSS3</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <FaJs size={40} className="text-white mb-2" />
            <h4 className="text-white">JavaScript</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="400">
            <FaReact size={40} className="text-white mb-2" />
            <h4 className="text-white">React.js</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="500">
            <FaPython size={40} className="text-white mb-2" />
            <h4 className="text-white">Python</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="600">
            <FaJava size={40} className="text-white mb-2" />
            <h4 className="text-white">Java</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="700">
            <FaDatabase size={40} className="text-white mb-2" />
            <h4 className="text-white">SQL</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="800">
            <SiMongodb size={40} className="text-white mb-2" />
            <h4 className="text-white">MongoDB</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="900">
            <SiExpress size={40} className="text-white mb-2" />
            <h4 className="text-white">Express.js</h4>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="1000" style={{ marginTop: '30px' }}>
            <h4 className="text-white">AWS</h4>
          </div>
           <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="1000" style={{ marginTop: '30px' }}>
            <h4 className="text-white">Bootstrap</h4>
          </div>
           <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="1000" style={{ marginTop: '30px' }}>
            <h4 className="text-white">Flask</h4>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Skills;

