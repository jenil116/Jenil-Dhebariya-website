export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="w">
        <div className="row">
          <div>
            <p className="kick">FEATURED WORK</p>
            <h2>Recent Shopify Projects</h2>
            <p className="sub">
              High-performing stores designed and developed for real brands.
            </p>
          </div>
          <a className="btn out" href="#portfolio">
            View All Projects →
          </a>
        </div>
        <div className="work">
          <article className="pc s">
            <div>
              <h3>Seattle Blabber</h3>
              <p>Custom Shopify store with modern design and high conversion flow.</p>
            </div>
            <div className="mock" />
            <a className="btn" href="#">
              View Project →
            </a>
          </article>
          <article className="pc f">
            <div>
              <h3>Sweetflexx</h3>
              <p>Premium eCommerce store with custom features and optimised UX.</p>
            </div>
            <div className="mock" />
            <a className="btn" href="#">
              View Project →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
