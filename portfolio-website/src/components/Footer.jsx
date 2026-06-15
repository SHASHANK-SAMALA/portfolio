import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ArrowUp, Mail } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            © {new Date().getFullYear()} · Shashank Samala
          </div>

          <div className="footer-social">
            {[
              { icon: <Mail size={16} />, href: 'mailto:shashanksamala77@gmail.com', label: 'Email' },
              { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/shashank-samala/', label: 'LinkedIn' },
              { icon: <FaGithub size={16} />, href: 'https://github.com/SHASHANK-SAMALA', label: 'GitHub' },
              { icon: <SiLeetcode size={16} />, href: 'https://leetcode.com/u/Shashank_samala/', label: 'LeetCode' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label === 'Email' ? undefined : '_blank'}
                rel={s.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="footer-social-link"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="footer-social-link"
              aria-label="Back to top"
              style={{ cursor: 'pointer' }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-tag">🎓 CSE @ KMIT</span>
          <span className="footer-tag">📍 Hyderabad</span>
          <span className="footer-tag">💼 Open to opportunities</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
