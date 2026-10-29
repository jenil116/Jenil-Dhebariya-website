export default function Testimonials() {
  return (
    <section id="testimonials" style={{ paddingTop: 0 }}>
      <div className="w">
        <div className="row">
          <div>
            <p className="kick">VIDEO TESTIMONIALS</p>
            <h2>What Clients Say</h2>
            <p className="sub">
              Real feedback from real clients who have worked with me.
            </p>
          </div>
          <a className="btn out" href="#testimonials">
            More Testimonials →
          </a>
        </div>
        <div className="vg" role="list">
          <div className="v" role="listitem" />
          <div className="v" role="listitem" />
          <div className="v" role="listitem" />
          <div className="v" role="listitem" />
          <div className="v" role="listitem" />
          <div className="v" role="listitem" />
        </div>
      </div>
    </section>
  );
}
