import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Mail, ArrowDown } from 'lucide-react';
import profileImg from '../assets/1770734242596.jpg';
import { ScrambleText, RotatingText, Magnetic } from './Effects';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero-grid"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div>
            <motion.div className="hero-eyebrow" variants={fadeUp}>
              Available for opportunities
            </motion.div>

            <motion.h1 className="hero-name" variants={fadeUp}>
              Hi, I'm{' '}
              <span className="gradient-text">
                <ScrambleText text="Shashank" />
              </span>
              <br />
              <span className="gradient-text">Samala</span>
            </motion.h1>

            <motion.p className="hero-tagline" variants={fadeUp}>
              I build <strong style={{ color: 'var(--accent-cyan)' }}><RotatingText words={['agentic AI systems', 'microservice platforms', 'production architectures', 'scalable backends']} /></strong>. 
              Currently engineering multi-agent orchestrations with LangGraph & MCP — 
              where AI agents don't just answer, they <em>act</em>.
            </motion.p>

            <motion.div className="hero-cta" variants={fadeUp}>
              <Magnetic>
                <a href="#projects" className="btn-primary-glow" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  View My Work
                  <ArrowDown size={16} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="mailto:shashanksamala77@gmail.com" className="btn-outline-glow">
                  <Mail size={16} />
                  Get in Touch
                </a>
              </Magnetic>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp}>
              <div className="hero-stat">
                <div className="hero-stat-value">6+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">20+</div>
                <div className="hero-stat-label">Technologies</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">8.8</div>
                <div className="hero-stat-label">CGPA</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div className="hero-visual" variants={fadeUp}>
            <div className="hero-image-wrapper">
              <div className="hero-image-glow" />
              <img
                src={profileImg}
                alt="Shashank Samala"
                className="hero-image"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Social strip */}
        <motion.div
          style={{ display: 'flex', gap: '1rem', marginTop: '3rem', justifyContent: 'flex-start' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/shashank-samala/', label: 'LinkedIn' },
            { icon: <FaGithub size={18} />, href: 'https://github.com/SHASHANK-SAMALA', label: 'GitHub' },
            { icon: <SiLeetcode size={18} />, href: 'https://leetcode.com/u/Shashank_samala/', label: 'LeetCode' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} style={{ color: 'var(--text-muted)' }} />
      </motion.div>
    </section>
  );
}

export default Hero;
