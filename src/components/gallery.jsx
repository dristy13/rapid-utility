import "../styles/gallery.css";

const Gallery = () => {
  const steps = [
    {
      title: "Assess",
      desc: "Site visit, requirement capture, and scope mapping.",
    },
    {
      title: "Deploy",
      desc: "Trained teams onboarded with SOPs and supervision.",
    },
    {
      title: "Monitor",
      desc: "Daily tracking, attendance, and quality checks.",
    },
    {
      title: "Report",
      desc: "Clear updates and performance summaries.",
    },
  ];

  const highlights = [
    {
      title: "Rapid Mobilization",
      desc: "Quick staffing for urgent operational needs.",
    },
    {
      title: "Compliance Ready",
      desc: "Safety and documentation support built-in.",
    },
    {
      title: "Multi-Site Coverage",
      desc: "Consistent service delivery across locations.",
    },
  ];

  return (
    <section id="gallery" className="ru-section ru-ops">
      <div className="ru-container ru-ops-grid">
        <div className="ru-ops-copy">
          <span className="ru-eyebrow">Operations Snapshot</span>
          <h2>Structured delivery with visible outcomes.</h2>
          <p>
            We follow a simple, disciplined process to keep every service line
            aligned with your expectations.
          </p>
          <div className="ru-ops-steps">
            {steps.map((step) => (
              <div key={step.title} className="ru-ops-step">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ru-ops-visual">
          <div className="ru-ops-image" />
          <div className="ru-ops-cards">
            {highlights.map((item) => (
              <div key={item.title} className="ru-ops-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
