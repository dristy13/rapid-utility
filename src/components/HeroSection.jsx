import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section id="home" className="ru-hero">
      <div className="ru-container ru-hero-grid">
        <div className="ru-hero-copy">
          <span className="ru-eyebrow">Rapid Utility Private Limited</span>
          <h1>Reliable service teams for facilities, sites, and projects.</h1>
          <p>
            From construction and plant work to housekeeping and manpower, we
            deliver trained teams with consistent supervision, clear SOPs, and
            dependable reporting.
          </p>

          <div className="ru-hero-actions">
            <a href="#contact" className="ru-btn ru-btn-primary">
              Request a Quote
            </a>
            <a href="#services" className="ru-btn ru-btn-ghost">
              View Services
            </a>
          </div>

          <div className="ru-hero-metrics">
            <div>
              <h3>Construction</h3>
              <p>Project execution with quality control</p>
            </div>
            <div>
              <h3>Plant Work</h3>
              <p>Operations support and safety checks</p>
            </div>
            <div>
              <h3>House Keeping</h3>
              <p>Clean, safe, and audit-ready facilities</p>
            </div>
          </div>
        </div>

        <div className="ru-hero-visual">
          <div className="ru-hero-image" />
          <div className="ru-hero-card">
            <h4>Service Coverage</h4>
            <p>
              Multi-industry teams ready for construction, hospitality,
              warehouse, plant work, manpower, and housekeeping requirements.
            </p>
            <div className="ru-hero-tags">
              <span>Site Ready</span>
              <span>Trained Crews</span>
              <span>Fast Deployment</span>
            </div>
          </div>
          <div className="ru-hero-chip ru-chip-one">Trusted Partner</div>
          <div className="ru-hero-chip ru-chip-two">On-Time Delivery</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
