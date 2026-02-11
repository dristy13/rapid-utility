import { useState } from "react";
import "../styles/contact.css";

const ContactSection = () => {
  const contactGroups = [
    {
      title: "Contact Lines",
      items: [
        { label: "Phone", value: "7044273918", link: "tel:7044273918" },
        { label: "Call On", value: "9162518329", link: "tel:9162518329" },
        {
          label: "Email",
          value: "rapidutilitypl@gmail.com",
          link: "mailto:rapidutilitypl@gmail.com",
        },
        {
          label: "Alt Email",
          value: "hpabrajid@gmail.com",
          link: "mailto:hpabrajid@gmail.com",
        },
        {
          label: "Alt Email",
          value: "rncrapid@gmail.com",
          link: "mailto:rncrapid@gmail.com",
        },
      ],
    },
    {
      title: "Company Details",
      items: [
        { label: "General Manager", value: "Kumar Sangram" },
        { label: "GST", value: "20AAJCR6055N1Z4" },
        {
          label: "Regd. Office",
          value:
            "Flat No 203, Shivam Enclave Phase 2, Behind Metas School, Bargain More, Ranchi, Jharkhand - 834009",
          wide: true,
        },
      ],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    if (!endpoint) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 2500);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const out = await res.json();
      if (out.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 2500);
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Server error!");
    }
  };

  return (
    <section id="contact" className="ru-section ru-contact">
      <div className="ru-container ru-contact-grid">
        <div className="ru-contact-copy">
          <span className="ru-eyebrow">Contact</span>
          <h2>Connect with Rapid Utility Private Limited.</h2>
          <p>
            Reach out for service enquiries, project coordination, and
            partnership opportunities.
          </p>

          <div className="ru-contact-panels">
            {contactGroups.map((group) => (
              <div key={group.title} className="ru-contact-panel">
                <h4>{group.title}</h4>
                <div className="ru-contact-list">
                  {group.items.map((item, index) => {
                    const Tag = item.link ? "a" : "div";
                    const linkProps = item.link ? { href: item.link } : {};
                    return (
                      <Tag
                        key={`${group.title}-${index}`}
                        {...linkProps}
                        className={`ru-contact-item ${
                          item.wide ? "is-wide" : ""
                        }`}
                      >
                        <span className="ru-contact-label">{item.label}</span>
                        <span className="ru-contact-value">{item.value}</span>
                      </Tag>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="ru-contact-form" onSubmit={handleSubmit}>
          <div className="ru-form-hero">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Contact Rapid Utility"
            />
          </div>
          <div className="ru-form-header">
            <h3>Request a call</h3>
            <p>Share your requirements and we will follow up.</p>
          </div>

          <div className="ru-form-row">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Work Email"
              required
            />
          </div>

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Service Requirement"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about scope, timelines, and priorities"
            rows="5"
            required
          />

          <button type="submit" className="ru-btn ru-btn-primary ru-form-btn">
            Send Request
          </button>

          {submitted && (
            <div className="ru-form-success">
              Thanks, your request has been received.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
