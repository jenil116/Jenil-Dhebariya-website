import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="hero" id="home">
      <div className="w">
        <nav>
          <a className="logo" href="#home">
            <b>JD</b>
            <span>
              Jenil Dhebariya
              <small>Shopify Expert</small>
            </span>
          </a>
          <NavLinks />
          <a
            className="btn out"
            href="#contact"
            style={{ color: "#fff", borderColor: "#fff" }}
          >
            Let’s Talk
          </a>
        </nav>
        <div className="hg">
          <div>
            <span className="tag">
              SHOPIFY EXPERT • CRO CONSULTANT • E-COMMERCE SPECIALIST
            </span>
            <h1>
              Shopify Expert &amp; <span>CRO Consultant</span>
            </h1>
            <p>
              I build high-converting Shopify stores, optimize for growth and help
              eCommerce brands scale with better design, performance and conversion
              strategies.
            </p>
            <div className="cta">
              <a className="btn y" href="#contact">
                Schedule a Call →
              </a>
              <a className="btn o" href="#portfolio">
                View Work →
              </a>
            </div>
            <div className="stats">
              <span>
                <b>4+ Years</b>
                Experience
              </span>
              <span>
                <b>100+</b>
                Projects Completed
              </span>
              <span>
                <b>Global Clients</b>
                US, UK, AU &amp; more
              </span>
            </div>
          </div>
          <div
            className="photo"
            role="img"
            aria-label="Photo placeholder – replace with your portrait"
          >
            JD
            <i>
              Shopify
              <br />
              Development
              <br />
              Conversion
              <br />
              Design Strategy
            </i>
          </div>
        </div>
      </div>
    </header>
  );
}
