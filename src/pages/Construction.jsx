import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/service-page.css";

const Construction = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const heroImage =
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80";
  const detailImage =
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80";

  return (
    <>
      <Navbar />
      <main className="service-page">
        <div className="ru-container">
          <section
            className="service-hero"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="service-hero-content">
              <span className="ru-eyebrow">Construction</span>
              <h1>Construction Services</h1>
              <p>
                Civil construction, renovation, and site execution delivered
                with quality assurance and safety compliance.
              </p>
              <div className="service-hero-actions">
                <a href="/#contact" className="ru-btn ru-btn-primary">
                  Start a Project
                </a>
                <a href="/#services" className="ru-btn ru-btn-ghost">
                  All Services
                </a>
              </div>
            </div>
          </section>

          <section className="service-section">
            <div className="service-grid">
              <div className="service-copy">
                <h2>End-to-end execution</h2>
                <p>
                  Rapid Utility Private Limited handles planning, site setup,
                  execution, and supervision for civil and structural work.
                </p>
                <ul className="service-list">
                  <li>Residential and commercial construction</li>
                  <li>Civil and structural works</li>
                  <li>Renovation, repair, and maintenance</li>
                  <li>Government and institutional contracts</li>
                  <li>Skilled manpower and on-site supervision</li>
                </ul>
              </div>
              <div className="service-card">
                <img src={detailImage} alt="Construction site supervision" />
                <div className="service-card-body">
                  <h3>Quality focus</h3>
                  <p>
                    Site inspections, material checks, and documentation ensure
                    compliance with approved standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section">
            <div className="service-pill-grid">
              <div className="service-pill">
                <strong>Safety</strong>
                PPE and site safety protocols enforced.
              </div>
              <div className="service-pill">
                <strong>Planning</strong>
                Project schedules with milestone tracking.
              </div>
              <div className="service-pill">
                <strong>Quality</strong>
                Structured checks at every phase.
              </div>
              <div className="service-pill">
                <strong>Reporting</strong>
                Transparent progress updates and logs.
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h3>Planning a construction project?</h3>
            <p>
              Share your scope, timeline, and site location to receive a
              structured execution plan.
            </p>
            <a href="/#contact" className="ru-btn ru-btn-primary">
              Talk to our team
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Construction;
