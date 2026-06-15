import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHARS = '!<>-_\\\\/[]{}—=+*^?#________';

export const ScrambleText = ({ text }) => {
  const [output, setOutput] = useState('');
  
  useEffect(() => {
    let frame = 0;
    const queue = [];
    for (let i = 0; i < text.length; i++) {
      const from = CHARS[Math.floor(Math.random() * CHARS.length)];
      const to = text[i];
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end, char: '' });
    }

    let rafId;
    const update = () => {
      let complete = 0;
      let result = '';
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          result += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = CHARS[Math.floor(Math.random() * CHARS.length)];
            queue[i].char = char;
          }
          result += `<span class="scramble-char">${char}</span>`;
        } else {
          result += from;
        }
      }
      setOutput(result);
      if (complete === queue.length) {
        cancelAnimationFrame(rafId);
      } else {
        frame++;
        rafId = requestAnimationFrame(update);
      }
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [text]);

  return <span dangerouslySetInnerHTML={{ __html: output }} />;
};

export const RotatingText = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <span style={{ position: 'relative', display: 'inline-block', minWidth: '180px', color: 'var(--accent-cyan)' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ position: 'absolute', left: 0, whiteSpace: 'nowrap' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* invisible span with the longest word forces the container to take enough width */}
      <span style={{ opacity: 0, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
        {words.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </span>
  );
};

export const TiltCard = ({ children, className, onClick }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation is 10 degrees
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    setRotateX(0);
    setRotateY(0);
    e.currentTarget.style.setProperty('--mouse-x', `-1000px`);
    e.currentTarget.style.setProperty('--mouse-y', `-1000px`);
  };

  return (
    <motion.div
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};

export const Magnetic = ({ children }) => {
  const ref = React.useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export const TerminalLog = ({ logs, delay = 0 }) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine >= logs.length) return;
    const timeout = setTimeout(() => {
      setCurrentLine(c => c + 1);
    }, delay + Math.random() * 800 + 400);
    return () => clearTimeout(timeout);
  }, [currentLine, logs, delay]);

  return (
    <div className="mini-terminal">
      <div className="mini-terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">live_logs.sh</span>
      </div>
      <div className="mini-terminal-body">
        {logs.slice(0, currentLine).map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="terminal-log-line"
          >
            <span className="log-time">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" })}]</span>
            <span className="log-text" dangerouslySetInnerHTML={{ __html: log }} />
          </motion.div>
        ))}
        {currentLine < logs.length && (
          <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="log-cursor">█</motion.div>
        )}
      </div>
    </div>
  );
};

export const AnimatedFlow = ({ nodes, color = 'var(--accent-cyan)' }) => {
  return (
    <div className="animated-flow-container">
      {nodes.map((node, index) => (
        <React.Fragment key={node + index}>
          <div className="flow-node" style={{ borderColor: color, boxShadow: `0 0 10px ${color}33` }}>
            {node}
          </div>
          {index < nodes.length - 1 && (
            <div className="flow-svg-container">
              <svg width="40" height="20" viewBox="0 0 40 20" className="flow-svg">
                <motion.line
                  x1="0" y1="10" x2="40" y2="10"
                  stroke={color}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ strokeDashoffset: 20 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                />
                <motion.circle
                  cx="0" cy="10" r="3" fill="#fff"
                  initial={{ cx: 0 }}
                  animate={{ cx: 40 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: index * 0.2 }}
                  style={{ filter: `drop-shadow(0 0 4px #fff)` }}
                />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
