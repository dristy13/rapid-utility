import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/service-page.css";

const PlantWork = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const heroImage =
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80";
  const detailImage =
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80";

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
              <span className="ru-eyebrow">Plant Work</span>
              <h1>Plant Operations Support</h1>
              <p>
                Plant work teams to support operations, maintenance
                coordination, and safety compliance across industrial sites.
              </p>
              <div className="service-hero-actions">
                <a href="/#contact" className="ru-btn ru-btn-primary">
                  Request Support
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
                <h2>Operational assistance</h2>
                <p>
                  Rapid Utility Private Limited provides plant support crews
                  trained to follow safety protocols and operational SOPs.
                </p>
                <ul className="service-list">
                  <li>Shift-based operations support</li>
                  <li>Equipment monitoring and log keeping</li>
                  <li>Preventive maintenance coordination</li>
                  <li>Utility checks and housekeeping support</li>
                  <li>Shutdown and restart assistance</li>
                </ul>
              </div>
              <div className="service-card">
                <img src={detailImage} alt="Plant operations support" />
                <div className="service-card-body">
                  <h3>Operational readiness</h3>
                  <p>
                    Teams work with site supervisors to keep plant operations
                    safe, compliant, and uninterrupted.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section">
            <div className="service-pill-grid">
              <div className="service-pill">
                <strong>Shift Coverage</strong>
                Day and night support teams as required.
              </div>
              <div className="service-pill">
                <strong>Safety Compliance</strong>
                PPE, permits, and SOP adherence.
              </div>
              <div className="service-pill">
                <strong>Maintenance</strong>
                Preventive checks and coordination.
              </div>
              <div className="service-pill">
                <strong>Documentation</strong>
                Logs, checklists, and reporting.
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h3>Need plant support teams?</h3>
            <p>
              Share your plant operations schedule and requirements for a
              custom support plan.
            </p>
            <a href="/#contact" className="ru-btn ru-btn-primary">
              Contact Rapid Utility
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PlantWork;
