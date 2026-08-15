import Reveal from './Reveal.jsx';

const STICKER_CLASSES = ['s-orchid', 's-pink', 's-mint', 's-blue', 's-yellow'];

export default function About({ profile }) {
  const skillGroups = Object.entries(profile.skills);

  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal>
          <span className="section-tag">01 — about</span>
          <h2>a little bit systems,<br />a little bit soft edges.</h2>
          <div className="about-text" style={{ marginTop: '22px' }}>
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          {skillGroups.map(([groupName, skills]) => (
            <div className="skill-group" key={groupName}>
              <h4>{groupName}</h4>
              <div className="sticker-row">
                {skills.map((skill, i) => (
                  <span
                    className={`sticker ${STICKER_CLASSES[i % STICKER_CLASSES.length]}`}
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
