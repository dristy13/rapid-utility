import "../styles/services.css";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Construction",
      description:
        "Civil construction, renovation, and project execution with quality control.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      tags: ["Civil Works", "Site Supervision"],
      path: "/service/construction",
    },
    {
      title: "Hospitality",
      description:
        "Guest services, front desk staffing, and property support teams.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      tags: ["Front Desk", "Service Staff"],
      path: "/service/hospitality",
    },
    {
      title: "Warehouse",
      description:
        "Inventory handling, loading-unloading, and warehouse support teams.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Inventory", "Safety SOPs"],
      path: "/service/warehouse",
    },
    {
      title: "Plant Work",
      description:
        "Plant operations support, maintenance coordination, and safety checks.",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      tags: ["Shift Teams", "Preventive Care"],
      path: "/service/plant-work",
    },
    {
      title: "Manpower",
      description:
        "Skilled and unskilled manpower deployment for projects and facilities.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Skilled Crews", "Fast Deployment"],
      path: "/service/manpower",
    },
    {
      title: "House Keeping",
      description:
        "Professional housekeeping and hygiene services across facilities.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      tags: ["Daily Upkeep", "Quality Audits"],
      path: "/service/housekeeping",
    },
  ];

  return (
    <section id="services" className="ru-section ru-services">
      <div className="ru-container">
        <div className="ru-services-header">
          <span className="ru-eyebrow">Services</span>
          <h2>Core services designed for reliable operations.</h2>
          <p>
            We deliver multi-industry service teams with supervision,
            documentation, and consistent reporting.
          </p>
        </div>

        <div className="ru-services-grid">
          {services.map((service) => (
            <article
              key={service.title}
              className="ru-service-card"
              onClick={() => navigate(service.path)}
            >
              <div className="ru-service-media">
                <img src={service.image} alt={service.title} />
                <span>{service.title}</span>
              </div>
              <div className="ru-service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="ru-service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
