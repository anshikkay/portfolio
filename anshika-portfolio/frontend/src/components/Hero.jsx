export default function Hero({ profile }) {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow-tape">✦ {profile.eyebrow}</span>
          <h1>
            {profile.headlineTop}
            <br />
            <em>{profile.headlineEm}</em> {profile.headlineRest}
          </h1>
          <p className="lede">{profile.lede}</p>
          <div className="chip-row">
            {profile.chips.map((chip) => (
              <span className="chip" key={chip}>{chip}</span>
            ))}
          </div>
          <div className="cta-row">
            <a href="#experience" className="btn btn-primary">See my work ↓</a>
            <a href="#contact" className="btn btn-secondary">Get in touch</a>
          </div>
        </div>

        <div className="doodle-panel">
          <div className="doodle-card doodle-1">
            <div className="mono-label">// appstore_load_test.py</div>
            <div className="code-line w1"></div>
            <div className="code-line w2"></div>
            <div className="code-line w3"></div>
            <div className="code-line w4"></div>
          </div>
          <div className="doodle-card doodle-2">
            <div className="moon">🌙</div>
            <p>scorpio sun,<br />builds in silence</p>
          </div>
          <div className="doodle-card doodle-3">
            <div className="badge-title">CvT-13 Classifier</div>
            <div className="badge-sub">98.54% accuracy</div>
            <div className="stars">★ ★ ★</div>
          </div>
        </div>
      </div>
    </header>
  );
}
