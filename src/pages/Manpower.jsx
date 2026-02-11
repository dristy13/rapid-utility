import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/service-page.css";

const Manpower = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const heroImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";
  const detailImage =
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80";

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
              <span className="ru-eyebrow">Manpower</span>
              <h1>Skilled and Unskilled Manpower Supply</h1>
              <p>
                Reliable manpower deployment for facilities, projects, and
                operational teams with fast onboarding.
              </p>
              <div className="service-hero-actions">
                <a href="/#contact" className="ru-btn ru-btn-primary">
                  Request Staffing
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
                <h2>Manpower categories</h2>
                <p>
                  Rapid Utility Private Limited supplies trained teams for
                  general operations, project work, and facility services.
                </p>
                <ul className="service-list">
                  <li>Skilled, semi-skilled, and unskilled workers</li>
                  <li>Site supervisors and shift in-charges</li>
                  <li>Housekeeping and hospitality staff</li>
                  <li>Warehouse and logistics teams</li>
                  <li>Construction and plant support labor</li>
                </ul>
              </div>
              <div className="service-card">
                <img src={detailImage} alt="Manpower deployment" />
                <div className="service-card-body">
                  <h3>Deployment model</h3>
                  <p>
                    Screening, onboarding, and supervisor-led deployment to
                    meet timelines and service requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="service-section">
            <div className="service-pill-grid">
              <div className="service-pill">
                <strong>Verification</strong>
                Background checks and ID verification for staff.
              </div>
              <div className="service-pill">
                <strong>Fast Onboarding</strong>
                Quick mobilization for urgent requirements.
              </div>
              <div className="service-pill">
                <strong>Shift Coverage</strong>
                Day/night staffing with supervisor oversight.
              </div>
              <div className="service-pill">
                <strong>Compliance</strong>
                Attendance, reporting, and basic documentation support.
              </div>
            </div>
          </section>

          <section className="service-cta">
            <h3>Need reliable manpower?</h3>
            <p>
              Tell us the numbers, skills, and shift schedule and we will
              prepare a staffing plan.
            </p>
            <a href="/#contact" className="ru-btn ru-btn-primary">
              Speak to our team
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Manpower;
