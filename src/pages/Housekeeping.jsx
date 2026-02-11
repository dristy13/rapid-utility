import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/service-page.css";

const Housekeeping = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const heroImage =
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80";
  const detailImage =
    "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80";

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
              <span className="ru-eyebrow">House Keeping</span>
              <h1>House Keeping Services</h1>
              <p>
                Professional housekeeping teams to keep workplaces clean, safe,
                and guest-ready every day.
              </p>
              <div className="service-hero-actions">
                <a href="/#contact" className="ru-btn ru-btn-primary">
                  Request a Quote
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
                <h2>What we deliver</h2>
                <p>
                  Rapid Utility Private Limited provides trained housekeeping
                  staff, modern tools, and supervisory support to maintain
                  hygiene standards across facilities.
                </p>
                <ul className="service-list">
                  <li>Daily and deep cleaning schedules</li>
                  <li>Washroom sanitation and hygiene control</li>
                  <li>Floor care, glass cleaning, and polishing</li>
                  <li>Waste handling and disposal support</li>
                  <li>Pantry, lobby, and common area upkeep</li>
                </ul>
              </div>
              <div className="service-card">
                <img src={detailImage} alt="Housekeeping team at work" />
                <div className="service-card-body">
                  <h3>Quality supervision</h3>
                  <p>
                    On-site supervisors track checklists, audits, and service
                    feedback to maintain consistent results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section">
            <div className="service-pill-grid">
              <div className="service-pill">
                <strong>Site Coverage</strong>
                Offices, hospitals, schools, and commercial spaces.
              </div>
              <div className="service-pill">
                <strong>Shift Planning</strong>
                Day, evening, and night coverage as required.
              </div>
              <div className="service-pill">
                <strong>Safety First</strong>
                Chemical handling and SOP compliance training.
              </div>
              <div className="service-pill">
                <strong>Reporting</strong>
                Regular audits and checklist reporting for clients.
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h3>Need housekeeping support?</h3>
            <p>
              Share your facility size and schedule, and we will prepare a
              tailored service plan.
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

export default Housekeeping;
