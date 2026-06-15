import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { X, ArrowRight } from 'lucide-react';
import { TiltCard, AnimatedFlow } from './Effects';

const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'E-Commerce AI Operations Brain',
    description:
      'A multi-agent agentic AI system that serves as an intelligent operations layer for e-commerce — handling customer queries, order management, product recommendations, and incident response through autonomous AI agents.',
    fullDescription:
      'Enterprise-grade multi-agent system built on LangGraph with stateful graph orchestration. Features autonomous agents for customer support, order tracking, product recommendations, and operational analytics. Includes semantic memory via Mem0 for long-term user context, pgvector for similarity search, and a full observability stack with OpenTelemetry → Prometheus → Grafana. Agent quality is continuously validated using DeepEval evaluation pipelines.',
    technologies: ['LangGraph', 'LangChain', 'MCP', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Mem0', 'DeepEval', 'Docker'],
    features: [
      'Multi-agent graph orchestration via LangGraph StateGraph',
      'Semantic memory with Mem0 for persistent user context',
      'Vector search using pgvector for product similarity',
      'Full observability: OpenTelemetry → Prometheus → Grafana',
      'AI evaluation pipeline with DeepEval',
      'Guardrails for safe agent behavior',
    ],
    logs: [
      "INFO: Orchestrator node active",
      "Agent -> CustomerSupport started",
      "RAG Query: pgvector similarity search...",
      "Metric: Trace sent to Grafana",
      'AWS Route 53 domain routing',
    ],
    architecture: ['User', 'FastAPI', 'LangGraph', 'Agents', 'MCP Tools', 'PostgreSQL + pgvector', 'Redis Cache', 'Prometheus/Grafana'],
    github: 'https://github.com/SHASHANK-SAMALA',
    status: 'Completed',
    accentColor: 'var(--accent-purple)',
  },
  {
    id: 2,
    number: '02',
    title: 'Multi-Agent AI Assistant',
    description:
      'A production-ready, enterprise-grade multi-agent AI assistant built with LangGraph for orchestration and MCP (Model Context Protocol) for standardized tool integration — featuring CI/CD, Productivity, and Market agents.',
    fullDescription:
      'Supervisor agent classifies user intent using structured output and routes to specialist agents. The CI/CD Agent is self-healing — reads GitHub workflow logs, searches for fixes via Tavily, generates patches, validates in sandbox, pauses for human approval (HITL via LangGraph interrupt()), and creates PRs. Productivity Agent manages Gmail and Google Calendar via MCP. Market Agent provides live stock data via a custom MCP server wrapping yfinance. An Evaluator agent scores every response on accuracy, completeness, and actionability — retrying up to 2x if quality is below threshold.',
    technologies: ['LangGraph', 'MCP', 'FastAPI', 'SSE', 'GitHub MCP', 'Gmail MCP', 'Calendar MCP', 'Tavily', 'yfinance', 'LangSmith', 'Node.js', 'React'],
    features: [
      'Supervisor → specialist agent routing with structured output',
      'Self-healing CI/CD agent: logs → search → patch → validate → PR',
      'Human-in-the-loop (HITL) via LangGraph interrupt() + checkpointer',
      'Custom MCP server for live market data (yfinance)',
      'Evaluator agent with quality scoring and retry cycles',
      '5 MCP servers: GitHub, Gmail, Calendar, Tavily, Market Data',
    ],
    logs: [
      "Supervisor: Intent = 'Fix CI/CD pipeline'",
      "Routing to -> DeveloperAgent",
      "MCP Request: GitHub Tools -> read_logs()",
      "TavilySearch: 'React hook exhaustive-deps fix'",
      "HITL: Waiting for human approval..."
    ],
    architecture: ['User', 'FastAPI (SSE)', 'Supervisor', '{CI/CD | Productivity | Market}', 'Evaluator', 'MCP Servers'],
    github: 'https://github.com/SHASHANK-SAMALA',
    status: 'Completed',
    accentColor: 'var(--accent-cyan)',
  },
  {
    id: 3,
    number: '03',
    title: 'Discussion Forum Platform',
    description:
      'A production-ready microservices discussion forum with 8 Docker containers, 3 isolated PostgreSQL databases, real-time WebSocket notifications, and full RBAC — designed with enterprise design patterns.',
    fullDescription:
      'Full-stack discussion platform built from scratch using microservice architecture. Auth Service handles JWT-based authentication with bcrypt hashing, refresh tokens, and role-based access control (Admin/Moderator/Member). Forum Service manages posts, nested comments (self-referential), votes (with idempotent upsert), and full-text search with pluggable strategy pattern. Notification Service delivers real-time notifications via WebSocket with Redis Streams (upgraded from Pub/Sub). All services are behind Nginx reverse proxy, each with its own PostgreSQL database, and orchestrated via Docker Compose.',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis Streams', 'WebSocket', 'React', 'Zustand', 'Docker', 'Docker Compose', 'Nginx', 'SQLAlchemy', 'Alembic', 'HTTPX'],
    features: [
      '8-container Docker architecture with 3 isolated databases',
      'JWT auth with RBAC (Admin/Moderator/Member permissions)',
      'Real-time WebSocket notifications via Redis Streams',
      'Nested comment trees with recursive rendering',
      'Pluggable search strategies (keyword, tag, date)',
      'Design patterns: Singleton, Factory, Strategy, Repository, Observer',
      'Nginx reverse proxy for routing',
    ],
    logs: [
      "[AuthService] Validating JWT token...",
      "[ForumService] Upserting post ID: 94a2",
      "[NotificationService] Connecting to Redis Stream...",
      "[WebSocket] Broadcast -> clients: 12",
      "[Nginx] Request processed in 45ms"
    ],
    architecture: ['Nginx', 'Auth Service', 'Forum Service', 'Notification Service', 'Frontend', 'PostgreSQL ×3', 'Redis'],
    github: 'https://github.com/SHASHANK-SAMALA',
    status: 'Completed',
    accentColor: 'var(--accent-magenta)',
  },
  {
    id: 4,
    number: '04',
    title: 'Project Management Platform',
    description:
      'An enterprise issue tracking and project management system with FastAPI microservices, full CI/CD pipeline from GitLab to AWS EC2, and real-time collaboration features.',
    fullDescription:
      'Team collaboration platform enabling project organization, issue tracking, full-text search via Meilisearch, and real-time notifications. Built with React 19 + TypeScript frontend using Zustand for state management. Backend consists of Python FastAPI microservices (Project, User, Search, Notification) with PostgreSQL 16 databases. Features a complete CI/CD pipeline: GitLab CI → ruff/biome quality gates → pytest → Docker build → ECR publish → EC2 deployment via SSH. Event-driven architecture using Redis and Kafka for inter-service communication.',
    technologies: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL 16', 'Meilisearch', 'Redis', 'Kafka', 'Docker', 'AWS ECR', 'AWS EC2', 'GitLab CI/CD', 'Zustand', 'TailwindCSS', 'Vite'],
    features: [
      'Full CI/CD: GitLab → lint → test → Docker → ECR → EC2 deploy',
      'FastAPI microservices (User, Project, Search, Notification)',
      'Full-text search powered by Meilisearch',
      'Role-based access with hierarchical project structure',
      'Event-driven inter-service communication (Redis + Kafka)',
      'Quality gates: ruff (Python) + biome (TypeScript) + pre-commit',
    ],
    logs: [
      "Webhook received: GitLab push event",
      "Docker build -t backend:latest",
      "Running Pytest suite... 42/42 PASSED",
      "Deploying to AWS EC2...",
      "Deployment SUCCESS. Status: 200 OK"
    ],
    architecture: ['Frontend (React)', 'Caddy', 'User Service', 'Project Service', 'Search Service', 'Notification Service', 'PostgreSQL', 'Meilisearch', 'Redis/Kafka'],
    github: 'https://github.com/SHASHANK-SAMALA',
    status: 'Completed',
    accentColor: 'var(--accent-green)',
  },
  {
    id: 5,
    number: '05',
    title: 'Domain-Specific ChatBot',
    description:
      'A domain-specific chatbot for SMEs built using Gemini Pro API to answer user queries from uploaded PDFs using RAG (Retrieval-Augmented Generation) for real-time, accurate interactions.',
    fullDescription:
      'An intelligent chatbot designed for small and medium enterprises that allows users to upload domain-specific PDF documents and get accurate answers through Retrieval-Augmented Generation. Uses Gemini Pro API for language understanding, extracts and chunks PDF content into a searchable vector store, and retrieves relevant context for each query to generate grounded, factual responses. Designed for scalability across different SME verticals.',
    technologies: ['Python', 'Gemini Pro API', 'RAG', 'PDF Processing', 'Vector Store'],
    features: [
      'PDF document upload and information extraction',
      'Retrieval-Augmented Generation for grounded responses',
      'Real-time query answering with context awareness',
      'Scalable architecture for multiple SME domains',
    ],
    logs: [
      "Initializing Gemini Pro model...",
      "Ingesting domain documents via LangChain...",
      "User Query: 'How do I reset my password?'",
      "RAG Match found. Generating response...",
      "Response streamed to client."
    ],
    architecture: ['User', 'Chat Interface', 'Gemini Pro API', 'RAG Pipeline', 'Vector Store', 'PDF Processor'],
    github: 'https://github.com/SHASHANK-SAMALA/DSC-BACKEND',
    demo: 'https://github.com/SHASHANK-SAMALA/DSC-BACKEND',
    status: 'Completed',
    accentColor: 'var(--accent-amber)',
  },
  {
    id: 6,
    number: '06',
    title: 'Media Review System',
    description:
      'A production-style backend system for reviewing and discovering media — demonstrating service-layer architecture, hybrid recommendation engine, concurrent processing, and cache abstraction in pure Python.',
    fullDescription:
      'Backend-focused Python application built without external web frameworks to demonstrate production engineering fundamentals. Features include user authentication with SHA-256 hashing, media CRUD with review system (1.0-5.0 ratings), a hybrid recommendation engine combining content-based and collaborative filtering with popularity fallback, concurrent bulk review processing via ThreadPoolExecutor with retry/backoff, and optional Redis caching with graceful degradation. Architecture follows strict separation: CLI → Service → Repository → Data layers.',
    technologies: ['Python', 'SQLite (WAL mode)', 'Redis', 'ThreadPoolExecutor', 'SHA-256'],
    features: [
      'Hybrid recommendation engine (collaborative + content-based)',
      'Concurrent bulk processing with ThreadPoolExecutor',
      'Redis caching with graceful degradation fallback',
      'Design patterns: Factory, Observer, Repository',
      'Pure Python — no external web frameworks',
      'SQLite WAL mode for concurrent read/write',
    ],
    logs: [
      "Starting Hybrid Recommendation Engine...",
      "Collaborative Filtering: User-Item matrix built",
      "Content-Based: Cosine similarity calculated",
      "Redis Cache: MISS. Computing...",
      "ThreadPoolExecutor: 8 tasks completed",
      "Redis Cache: SET. TTL: 3600s"
    ],
    architecture: ['CLI', 'Service Layer', 'Repository Layer', 'SQLite (WAL)', 'Redis Cache', 'ThreadPoolExecutor'],
    github: 'https://github.com/SHASHANK-SAMALA',
    status: 'Completed',
    accentColor: 'var(--accent-cyan)',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>// Featured Work</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Projects that could go<br />
            <span className="gradient-text">to production tomorrow.</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} style={{ marginBottom: '3rem' }}>
            Each project is a real system — not a tutorial clone. Microservices, AI agents, CI/CD pipelines, and observability stacks included.
          </motion.p>

          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <motion.div key={project.id} variants={fadeUp}>
                <TiltCard
                  className="project-card glass-card gradient-border-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-card-header">
                  <span className="project-card-number" style={{ color: project.accentColor }}>
                    {project.number}
                  </span>
                  <span className="project-card-status">
                    <span className={`status-dot ${project.status === 'Completed' ? 'completed' : 'in-progress'}`} />
                    {project.status}
                  </span>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                </div>

                <div className="project-card-features">
                  {project.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="project-feature-item">{feature}</div>
                  ))}
                  {project.features.length > 3 && (
                    <div className="project-feature-item" style={{ color: 'var(--accent-cyan)' }}>
                      +{project.features.length - 3} more features
                    </div>
                  )}
                </div>

                <div className="project-card-tech">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-badge" style={{ opacity: 0.6 }}>
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <div className="project-card-footer">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={14} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={12} /> Demo
                    </a>
                  )}
                  <span
                    className="project-link"
                    style={{ marginLeft: 'auto', cursor: 'pointer' }}
                  >
                    Details <ArrowRight size={14} />
                  </span>
                </div>
              </TiltCard>
            </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            variants={fadeUp}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <a
              href="https://github.com/SHASHANK-SAMALA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow"
            >
              <FaGithub size={16} />
              View All on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative' }}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close detail"
              >
                <X size={20} />
              </button>

              <span className="section-label" style={{ color: selectedProject.accentColor }}>
                Project {selectedProject.number}
              </span>
              <h2 style={{ marginTop: '0.5rem' }}>{selectedProject.title}</h2>
              <p className="project-modal-desc">{selectedProject.fullDescription}</p>

              {/* Architecture Flow */}
              <div className="project-modal-section" style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
                <h4>Architecture</h4>
                <AnimatedFlow nodes={selectedProject.architecture} color={selectedProject.accentColor} />
              </div>

              {/* Features */}
              <div className="project-modal-section">
                <h4>Key Features</h4>
                {selectedProject.features.map((f) => (
                  <div key={f} className="project-feature-item">{f}</div>
                ))}
              </div>

              {/* Tech */}
              <div className="project-modal-section">
                <h4>Technologies</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-glow"
                >
                  <FaGithub size={16} /> View Code
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-glow"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
