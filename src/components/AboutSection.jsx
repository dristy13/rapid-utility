import "../styles/about.css";
import AboutImage from "../assets/about.jpeg";

const AboutSection = () => {
  const highlights = [
    "Supervised teams with daily reporting",
    "Rapid deployment for urgent requirements",
    "Safety-first SOPs and compliance checks",
    "Trained manpower and on-site leadership",
  ];

  return (
    <section id="about" className="ru-section ru-about">
      <div className="ru-container ru-about-grid">
        <div className="ru-about-visual">
          <div className="ru-about-image">
            <img src={AboutImage} alt="Rapid Utility operations" />
          </div>
          <div className="ru-about-card">
            <h3>Registered & Reliable</h3>
            <p>
              Rapid Utility Private Limited delivers professional services with
              disciplined execution and transparent coordination.
            </p>
          </div>
        </div>

        <div className="ru-about-copy">
          <span className="ru-eyebrow">About Us</span>
          <h2>We align people, process, and performance.</h2>
          <p>
            Rapid Utility Private Limited is a multi-service company providing
            construction, hospitality, warehouse operations, plant work,
            manpower, and housekeeping support for organizations and projects.
          </p>
          <ul className="ru-about-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#contact" className="ru-btn ru-btn-primary">
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
