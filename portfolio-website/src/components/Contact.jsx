import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend API here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold text-primary">Get In Touch</h2>
          <div className="underline mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#007bff', margin: '20px auto' }}></div>
          <p className="lead text-white">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4" data-aos="fade-right">
            <h4 className="text-primary mb-4">Contact Information</h4>
            <div className="contact-item d-flex align-items-center mb-3 p-3 bg-light rounded">
              <FaEnvelope className="text-primary me-3" size={20} />
              <div>
                <h6 className="mb-1">Email</h6>
                <a href="mailto:shashanksamala77@gmail.com" className="text-decoration-none">
                  shashanksamala77@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item d-flex align-items-center mb-3 p-3 bg-light rounded">
              <FaPhone className="text-primary me-3" size={20} />
              <div>
                <h6 className="mb-1">Phone</h6>
                <a href="tel:9652685002" className="text-decoration-none">
                  +91 9652685002
                </a>
              </div>
            </div>
            <div className="contact-item d-flex align-items-center mb-3 p-3 bg-light rounded">
              <FaMapMarkerAlt className="text-primary me-3" size={20} />
              <div>
                <h6 className="mb-1">Location</h6>
                <span className="text-muted">Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left">
            <div className="contact-form bg-light p-4 rounded shadow-sm">
              <h4 className="text-primary mb-4">Send Me a Message</h4>
              
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <FaPaperPlane className="me-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
