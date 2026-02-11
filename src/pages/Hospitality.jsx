import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/service-page.css";

const Hospitality = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const heroImage =
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80";
  const detailImage =
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80";

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
              <span className="ru-eyebrow">Hospitality</span>
              <h1>Hospitality Services</h1>
              <p>
                Guest support, front-desk staffing, and facility assistance for
                hotels, institutions, and service facilities.
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
                <h2>Guest-ready teams</h2>
                <p>
                  Rapid Utility Private Limited supplies trained hospitality
                  staff who understand service etiquette, cleanliness, and
                  guest experience standards.
                </p>
                <ul className="service-list">
                  <li>Front-desk and guest assistance</li>
                  <li>Housekeeping and room upkeep support</li>
                  <li>Banquet and event setup staffing</li>
                  <li>Kitchen stewarding and service helpers</li>
                  <li>Guest experience supervision</li>
                </ul>
              </div>
              <div className="service-card">
                <img src={detailImage} alt="Hospitality support team" />
                <div className="service-card-body">
                  <h3>Service standards</h3>
                  <p>
                    Uniformed staff, shift scheduling, and supervisor-led
                    training for consistent delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section">
            <div className="service-pill-grid">
              <div className="service-pill">
                <strong>Trained Staff</strong>
                Service etiquette and hygiene practices included.
              </div>
              <div className="service-pill">
                <strong>Flexible Shifts</strong>
                Coverage for peak hours and events.
              </div>
              <div className="service-pill">
                <strong>Uniformed Teams</strong>
                Professional presentation for guests.
              </div>
              <div className="service-pill">
                <strong>Supervision</strong>
                On-site oversight and service reporting.
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h3>Need hospitality staffing?</h3>
            <p>
              Tell us about your property and staffing needs and we will set up
              a service plan.
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

export default Hospitality;
