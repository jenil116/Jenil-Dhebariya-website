const reviews = [
  {
    initials: "SM",
    name: "Sarah M.",
    country: "United States",
    text: "Jenil did an amazing job on our Shopify store. The design, functionality and attention to detail were outstanding. Highly recommend!",
  },
  {
    initials: "DR",
    name: "David R.",
    country: "United Kingdom",
    text: "Great communication, fast delivery and really understands eCommerce. Our conversion rate improved significantly after the changes.",
  },
  {
    initials: "EK",
    name: "Emily K.",
    country: "Australia",
    text: "Professional, skilled and reliable. Jenil helped us build a beautiful store and also gave us valuable CRO suggestions.",
  },
];

export default function Reviews() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="w">
        <div className="row">
          <div>
            <p className="kick">CLIENT REVIEWS</p>
            <h2>Trusted by Amazing Clients</h2>
            <p className="sub">
              Don’t just take my word for it. Here’s what clients say about working with me.
            </p>
          </div>
          <a className="btn out" href="#">
            View All Reviews →
          </a>
        </div>
        <div className="rv">
          {reviews.map((r) => (
            <article className="rc" key={r.initials}>
              <span className="st">★★★★★</span>
              <p>{r.text}</p>
              <div>
                <em>{r.initials}</em>
                <span>
                  {r.name}
                  <small>{r.country}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
