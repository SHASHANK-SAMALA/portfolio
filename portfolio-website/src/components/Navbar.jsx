import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      left: 0,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#about" style={{scrollBehavior: 'smooth'}}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills" style={{scrollBehavior: 'smooth'}}>Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects" style={{scrollBehavior: 'smooth'}}>Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" style={{scrollBehavior: 'smooth'}}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
