import "../styles/footer.css";
import Logo from "../assets/logo.png";

const Footer = () => {
  const services = [
    "Construction",
    "Hospitality",
    "Warehouse",
    "Plant Work",
    "Manpower",
    "House Keeping",
  ];

  return (
    <footer className="ru-footer">
      <div className="ru-container ru-footer-grid">
        <div className="ru-footer-brand">
          <div className="ru-footer-logo">
            <img src={Logo} alt="Rapid Utility logo" />
          </div>
          <h2>Rapid Utility Private Limited</h2>
          <p>
            Regd. Office: Flat No 203, Shivam Enclave Phase 2, Behind Metas
            School, Bargain More, Ranchi, Jharkhand - 834009.
          </p>
          <p>GST: 20AAJCR6055N1Z4</p>
        </div>

        <div className="ru-footer-column">
          <h3>Services</h3>
          <ul>
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="ru-footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Phone: 7044273918</li>
            <li>Call On: 9162518329</li>
            <li>rapidutilitypl@gmail.com</li>
            <li>hpabrajid@gmail.com</li>
            <li>rncrapid@gmail.com</li>
          </ul>
        </div>

        <div className="ru-footer-column">
          <h3>Leadership</h3>
          <ul>
            <li>General Manager</li>
            <li>Kumar Sangram</li>
          </ul>
        </div>
      </div>

      <div className="ru-footer-bottom">
        <p>© {new Date().getFullYear()} Rapid Utility Private Limited.</p>
        <p>Reliable service delivery with trained teams and clear reporting.</p>
      </div>
    </footer>
  );
};

export default Footer;
