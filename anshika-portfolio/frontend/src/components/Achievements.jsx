import Reveal from './Reveal.jsx';

export default function Achievements({ achievements }) {
  return (
    <section id="achievements">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-tag">04 — achievements</span>
          <h2>proof of work</h2>
        </Reveal>
        <div className="badge-grid">
          {achievements.map((item) => (
            <Reveal className={`badge-card ${item.accent}`} key={item.title}>
              <div className="badge-emoji">{item.emoji}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
