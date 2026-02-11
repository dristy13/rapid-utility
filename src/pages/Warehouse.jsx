import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/service-page.css";

const Warehouse = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const heroImage =
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80";
  const detailImage =
    "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80";

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
              <span className="ru-eyebrow">Warehouse</span>
              <h1>Warehouse Operations</h1>
              <p>
                Inventory handling, storage management, and loading support for
                smooth warehouse operations.
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
                <h2>Operational coverage</h2>
                <p>
                  Rapid Utility Private Limited supplies trained warehouse
                  teams focused on accuracy, safety, and operational speed.
                </p>
                <ul className="service-list">
                  <li>Loading, unloading, and material handling</li>
                  <li>Inventory movement and stock rotation</li>
                  <li>Picking, packing, and dispatch preparation</li>
                  <li>Storage, racking, and aisle upkeep</li>
                  <li>Safety compliance and SOP supervision</li>
                </ul>
              </div>
              <div className="service-card">
                <img src={detailImage} alt="Warehouse support team" />
                <div className="service-card-body">
                  <h3>Process discipline</h3>
                  <p>
                    Clear SOPs, attendance tracking, and supervisor oversight
                    keep operations consistent.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section">
            <div className="service-pill-grid">
              <div className="service-pill">
                <strong>Accuracy</strong>
                Inventory checks and cycle count support.
              </div>
              <div className="service-pill">
                <strong>Safety</strong>
                PPE compliance and safe material movement.
              </div>
              <div className="service-pill">
                <strong>Shift Teams</strong>
                Coverage for day and night operations.
              </div>
              <div className="service-pill">
                <strong>Reporting</strong>
                Daily productivity and attendance summaries.
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h3>Need warehouse support?</h3>
            <p>
              Share your volume, location, and shift plan to build a tailored
              warehouse staffing solution.
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

export default Warehouse;
