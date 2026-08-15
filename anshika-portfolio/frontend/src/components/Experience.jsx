import Reveal from './Reveal.jsx';

export default function Experience({ experience }) {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-tag">02 — experience</span>
          <h2>where I've worked</h2>
          <p>Two internships, two continents, one running theme: making systems more reliable.</p>
        </Reveal>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal className="tl-item" key={job.role}>
              <div className="tl-dot"></div>
              <div className="tl-card">
                <div className="tl-top">
                  <div className="tl-role">{job.role}</div>
                  <div className="tl-date">{job.date}</div>
                </div>
                <div className="tl-company">{job.company}</div>
                <ul>
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
