import { useState } from "react";
import "../styles/navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="ru-nav">
      <div className="ru-container ru-nav-inner">
        <a href="#home" className="ru-brand">
          <span className="ru-brand-mark">
            <img src={Logo} alt="Rapid Utility logo" className="ru-logo" />
          </span>
          <span className="ru-brand-text">
            <span className="ru-brand-name">Rapid Utility Private Limited</span>
            <span className="ru-brand-tagline">
              Facility, Manpower, and Utility Services
            </span>
          </span>
        </a>

        <div className="ru-nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ru-btn ru-btn-primary ru-nav-cta">
            Request Quote
          </a>
        </div>

        <button
          className={`ru-menu-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen && (
        <div className="ru-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ru-btn ru-btn-primary">
            Request Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
