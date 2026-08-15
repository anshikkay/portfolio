import { useEffect, useState } from 'react';
import { getProfile, getExperience, getProjects, getAchievements, getEducation } from './api/client.js';

import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import EducationProfiles from './components/EducationProfiles.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getProfile(), getExperience(), getProjects(), getAchievements(), getEducation()])
      .then(([profile, experience, projects, achievements, education]) => {
        setData({ profile, experience, projects, achievements, education });
      })
      .catch(() => {
        setError('Could not reach the backend. Make sure the API server is running on port 5000.');
      });
  }, []);

  if (error) {
    return <div className="load-state load-error">{error}</div>;
  }

  if (!data) {
    return <div className="load-state">Loading portfolio…</div>;
  }

  return (
    <>
      <Nav logoText={data.profile.logoText} />
      <Hero profile={data.profile} />
      <About profile={data.profile} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Achievements achievements={data.achievements} />
      <EducationProfiles education={data.education} />
      <Footer contact={data.profile.contact} />
    </>
  );
}
