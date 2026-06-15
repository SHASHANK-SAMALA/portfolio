import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  { type: 'command', prompt: '~', text: 'whoami' },
  { type: 'output', text: 'shashank_samala // AI & Full-Stack Engineer' },
  { type: 'command', prompt: '~', text: 'cat skills.txt' },
  { type: 'output', text: 'LangGraph · MCP · FastAPI · React · Docker · AWS' },
  { type: 'command', prompt: '~', text: 'ls projects/' },
  { type: 'output', text: '6 production-grade systems loaded.' },
  { type: 'command', prompt: '~', text: './launch_portfolio.sh' },
  { type: 'output', text: '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100% — Ready.' },
];

const Intro = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) {
      const delay = BOOT_LINES[visibleLines]?.type === 'command' ? 350 : 250;
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => setIsExiting(true), 800);
      const completeTimer = setTimeout(() => onComplete(), 1400);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [visibleLines, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => onComplete(), 500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="intro-screen"
          onClick={handleSkip}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="intro-terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="terminal-header">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
            </div>

            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                className="terminal-line"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line.type === 'command' ? (
                  <>
                    <span className="prompt">❯ </span>
                    <span className="path">{line.prompt}</span>
                    <span className="command"> {line.text}</span>
                  </>
                ) : (
                  <span className="output">  {line.text}</span>
                )}
              </motion.div>
            ))}

            {visibleLines < BOOT_LINES.length && (
              <motion.span
                className="terminal-line"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                style={{ display: 'inline-block', color: 'var(--accent-cyan)' }}
              >
                ▋
              </motion.span>
            )}
          </motion.div>

          <motion.p
            className="intro-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            click anywhere to skip →
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
