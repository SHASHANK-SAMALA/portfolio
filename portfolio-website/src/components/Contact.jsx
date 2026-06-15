import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>// Get in Touch</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Let's build something<br />
            <span className="gradient-text">extraordinary together.</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} style={{ marginBottom: '3rem' }}>
            Open to full-time opportunities, collaborations, and interesting conversations about AI, distributed systems, and the future of software.
          </motion.p>

          <motion.div className="contact-grid" variants={fadeUp}>
            {/* Left — Contact Info */}
            <div>
              <div className="contact-info-item">
                <div className="contact-icon"><Mail size={18} /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <a href="mailto:shashanksamala77@gmail.com" className="contact-info-value" style={{ color: 'var(--text-primary)' }}>
                    shashanksamala77@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon"><Phone size={18} /></div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <a href="tel:9652685002" className="contact-info-value" style={{ color: 'var(--text-primary)' }}>
                    +91 9652685002
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon"><MapPin size={18} /></div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <span className="contact-info-value">Hyderabad, India</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
                {[
                  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/shashank-samala/', label: 'LinkedIn' },
                  { icon: <FaGithub size={18} />, href: 'https://github.com/SHASHANK-SAMALA', label: 'GitHub' },
                  { icon: <SiLeetcode size={18} />, href: 'https://leetcode.com/u/Shashank_samala/', label: 'LeetCode' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <span className="tech-badge green" style={{ fontSize: '0.75rem' }}>
                  🟢 Available for opportunities
                </span>
              </div>
            </div>

            {/* Right — Form */}
            <form className="contact-form glass-card gradient-border-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>
              <button type="submit" className="btn-primary-glow" style={{ width: '100%', justifyContent: 'center' }}>
                {submitted ? '✓ Message Sent!' : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
