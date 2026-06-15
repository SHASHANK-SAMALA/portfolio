import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Brain, Code2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const STATS = [
  { icon: <Rocket size={20} />, value: '6+', label: 'Production Projects', color: 'var(--accent-cyan)' },
  { icon: <Code2 size={20} />, value: '20+', label: 'Technologies', color: 'var(--accent-purple)' },
  { icon: <GraduationCap size={20} />, value: '8.8', label: 'CGPA', color: 'var(--accent-magenta)' },
  { icon: <Brain size={20} />, value: '5+', label: 'AI/Agent Systems', color: 'var(--accent-green)' },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>// About Me</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Engineering the future,<br />
            <span className="gradient-text">one agent at a time.</span>
          </motion.h2>

          <div className="about-grid" style={{ marginTop: '3rem' }}>
            <motion.div className="about-text" variants={fadeUp}>
              <p>
                I'm a <span className="about-highlight">Computer Science Engineering</span> student at{' '}
                <strong>Keshav Memorial Institute of Technology</strong>, Hyderabad — obsessed with building
                systems that are production-grade from day one.
              </p>
              <p>
                My sweet spot is the intersection of{' '}
                <span className="about-highlight">agentic AI</span> and{' '}
                <span className="about-highlight">distributed systems</span>. I don't just build chatbots — I architect
                multi-agent orchestrations with LangGraph, wire them to real-world tools via MCP, and deploy them
                behind FastAPI microservices with full observability stacks.
              </p>
              <p>
                When I'm not building AI agents, I'm designing microservice platforms with Docker, Redis Streams,
                PostgreSQL, and CI/CD pipelines that ship to AWS. Every project I build could go to production tomorrow.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                <span className="tech-badge green">🔍 Open to FAANG & top-tier opportunities</span>
              </p>
            </motion.div>

            <motion.div className="about-stats-grid" variants={fadeUp}>
              {STATS.map((stat) => (
                <div key={stat.label} className="about-stat-card glass-card">
                  <div style={{ color: stat.color, marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
