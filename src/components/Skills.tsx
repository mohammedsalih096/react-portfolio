import Reveal from './Reveal';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section className="skills section-wrap section-pad" id="skills" aria-labelledby="skills-title">
      <div className="section-heading section-heading--split">
        <div><p className="section-kicker">05 / THE TOOLKIT</p><h2 id="skills-title">Tools for<br /><span>the work.</span></h2></div>
        <p className="section-intro">Technologies I’ve used across web, mobile and software projects, grouped by where they fit in the work.</p>
      </div>
      <div className="skill-grid">
        {skillsData.map((group, index) => (
          <Reveal className="skill-card" delay={index * 0.07} key={group.category}>
            <div className="skill-card-heading"><span>0{index + 1}</span><h3>{group.category}</h3></div>
            <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
