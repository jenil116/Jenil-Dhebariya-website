const services = [
  {
    icon: "⚙️",
    title: "Store Setup & Configuration",
    desc: "Complete Shopify setup with essential configurations.",
  },
  {
    icon: "🖥️",
    title: "Theme Customization",
    desc: "Pixel-perfect, responsive and brand-focused design.",
  },
  {
    icon: "📈",
    title: "Conversion Rate Optimization",
    desc: "Data-driven CRO to increase sales and revenue.",
  },
  {
    icon: "🧩",
    title: "Custom Features & Integrations",
    desc: "Tailored solutions for unique business needs.",
  },
  {
    icon: "⚡",
    title: "Speed Optimization",
    desc: "Faster, better performing stores for higher conversions.",
  },
  {
    icon: "🎧",
    title: "Ongoing Support",
    desc: "Reliable support and maintenance.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ paddingTop: 0 }}>
      <div className="w">
        <p className="kick">SERVICES</p>
        <h2>Shopify Development Services</h2>
        <p className="sub">
          End-to-end Shopify solutions to help you build, optimize and scale your
          eCommerce brand.
        </p>
        <div className="sv">
          <div className="big">
            <h3>Custom Shopify Development</h3>
            <p>
              High-performing, scalable and conversion-focused Shopify stores
              tailored to your brand.
            </p>
            <a className="btn y" href="#contact">
              Get Started →
            </a>
          </div>
          <div className="sg">
            {services.map((s) => (
              <div className="sc" key={s.title}>
                <span>{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
