import Reveal from './Reveal.jsx';

export default function EducationProfiles({ education }) {
  return (
    <section id="more">
      <div className="wrap">
        <div className="split-grid">
          <Reveal className="info-card">
            <h3>🎓 Education</h3>
            <div className="stat-row"><span>Institute</span><span>{education.institute}</span></div>
            <div className="stat-row"><span>Degree</span><span>{education.degree}</span></div>
            <div className="stat-row"><span>Duration</span><span>{education.duration}</span></div>
          </Reveal>
          <Reveal className="info-card">
            <h3>💻 Coding Profiles</h3>
            <div className="stat-row"><span>LeetCode</span><span>{education.coding.leetcode}</span></div>
            <div className="stat-row"><span>Codeforces</span><span>{education.coding.codeforces}</span></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
