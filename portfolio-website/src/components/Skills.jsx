import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaReact, FaDocker, FaAws, FaGitAlt, FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiFastapi, SiFlask, SiNodedotjs, SiExpress,
  SiPostgresql, SiMongodb, SiRedis, SiSqlite, SiNginx, SiGrafana,
  SiPrometheus, SiApachekafka, SiGitlab,
} from 'react-icons/si';
import { Brain, Bot, Layers, Cpu, Eye, GitBranch, Server, Workflow } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <FaPython size={14} /> },
      { name: 'JavaScript', icon: <SiJavascript size={13} /> },
      { name: 'TypeScript', icon: <SiTypescript size={13} /> },
      { name: 'Java', icon: <FaJava size={14} /> },
      { name: 'SQL', icon: <FaDatabase size={13} /> },
    ],
  },
  {
    title: 'AI & Agents',
    skills: [
      { name: 'LangGraph', icon: <Workflow size={13} /> },
      { name: 'LangChain', icon: <Layers size={13} /> },
      { name: 'MCP', icon: <Bot size={13} /> },
      { name: 'RAG', icon: <Brain size={13} /> },
      { name: 'OpenAI', icon: <Cpu size={13} /> },
      { name: 'Gemini Pro', icon: <Cpu size={13} /> },
      { name: 'Mem0', icon: <Brain size={13} /> },
      { name: 'DeepEval', icon: <Eye size={13} /> },
    ],
    accentClass: 'purple',
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React 19', icon: <FaReact size={14} /> },
      { name: 'Zustand', icon: <Layers size={13} /> },
      { name: 'Framer Motion', icon: <Layers size={13} /> },
      { name: 'TailwindCSS', icon: <Layers size={13} /> },
      { name: 'Vite', icon: <Layers size={13} /> },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi size={14} /> },
      { name: 'Flask', icon: <SiFlask size={14} /> },
      { name: 'Express.js', icon: <SiExpress size={14} /> },
      { name: 'Node.js', icon: <SiNodedotjs size={14} /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={14} /> },
      { name: 'pgvector', icon: <FaDatabase size={13} /> },
      { name: 'MongoDB', icon: <SiMongodb size={14} /> },
      { name: 'Redis', icon: <SiRedis size={14} /> },
      { name: 'SQLite', icon: <SiSqlite size={14} /> },
      { name: 'Meilisearch', icon: <FaDatabase size={13} /> },
    ],
  },
  {
    title: 'DevOps & Infra',
    skills: [
      { name: 'Docker', icon: <FaDocker size={14} /> },
      { name: 'Docker Compose', icon: <FaDocker size={14} /> },
      { name: 'Nginx', icon: <SiNginx size={14} /> },
      { name: 'AWS', icon: <FaAws size={14} /> },
      { name: 'GitLab CI/CD', icon: <SiGitlab size={14} /> },
      { name: 'GitHub Actions', icon: <FaGitAlt size={14} /> },
    ],
    accentClass: 'magenta',
  },
  {
    title: 'Observability',
    skills: [
      { name: 'OpenTelemetry', icon: <Eye size={13} /> },
      { name: 'Prometheus', icon: <SiPrometheus size={14} /> },
      { name: 'Grafana', icon: <SiGrafana size={14} /> },
      { name: 'LangSmith', icon: <Eye size={13} /> },
    ],
    accentClass: 'green',
  },
  {
    title: 'Architecture',
    skills: [
      { name: 'Microservices', icon: <Server size={13} /> },
      { name: 'Event-Driven', icon: <SiApachekafka size={13} /> },
      { name: 'WebSocket', icon: <Layers size={13} /> },
      { name: 'RBAC', icon: <GitBranch size={13} /> },
      { name: 'Repository Pattern', icon: <Layers size={13} /> },
      { name: 'Factory', icon: <Layers size={13} /> },
      { name: 'Strategy', icon: <Workflow size={13} /> },
      { name: 'Observer', icon: <Eye size={13} /> },
    ],
    accentClass: 'purple',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>// Tech Stack</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Tools I wield<br />
            <span className="gradient-text">to ship production code.</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} style={{ marginBottom: '3rem' }}>
            From agentic AI orchestration to microservice infrastructure — here's everything in my arsenal.
          </motion.p>

          <div className="skills-categories">
            {CATEGORIES.map((cat, catIndex) => (
              <motion.div
                key={cat.title}
                className="skill-category glass-card gradient-border-card"
                variants={fadeUp}
                custom={catIndex}
              >
                <div className="skill-category-title">{cat.title}</div>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`tech-badge ${cat.accentClass || ''}`}
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
