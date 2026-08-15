import Reveal from './Reveal.jsx';

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-tag">03 — projects</span>
          <h2>things I've built for fun (mostly)</h2>
          <p>A couple of side projects that turned into national-stage finishes.</p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project) => (
            <Reveal className={`project-card ${project.accent}`} key={project.name}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.name}</h3>
              <div className="project-tagline">{project.tagline}</div>
              <p className="desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
