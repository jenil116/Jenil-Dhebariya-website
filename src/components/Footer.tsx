import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="row">
          <a className="logo" href="#home">
            <b>JD</b>
            <span>
              Jenil Dhebariya
              <small>Shopify Expert &amp; CRO Consultant</small>
            </span>
          </a>
          <nav>
            <NavLinks />
          </nav>
        </div>
        <p style={{ margin: "18px 0 0" }}>© 2026 Jenil Dhebariya. All rights reserved.</p>
      </div>
    </footer>
  );
}
