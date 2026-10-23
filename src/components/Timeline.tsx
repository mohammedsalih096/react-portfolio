import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import { timelineData } from '../data/timeline';

export default function Timeline() {
  return (
    <section className="experience section-wrap section-pad" id="experience" aria-labelledby="experience-title">
      <div className="section-heading section-heading--split">
        <div><p className="section-kicker">04 / THE JOURNEY</p><h2 id="experience-title">Where I’ve<br /><span>learned.</span></h2></div>
        <p className="section-intro">Experience across web, mobile and software development, alongside my computer science studies.</p>
      </div>
      <div className="timeline-list">
        {timelineData.map((item, index) => {
          const Icon = item.icon === 'work' ? BriefcaseBusiness : GraduationCap;
          return (
            <Reveal className={`timeline-item${item.icon === 'education' ? ' timeline-item--education' : ''}`} delay={index * 0.045} key={`${item.company}-${item.title}`}>
              <span className="timeline-icon" aria-hidden="true"><Icon size={17} strokeWidth={1.6} /></span>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-body">
                <div className="timeline-heading"><div><h3>{item.title}</h3><p>{item.company}{item.location ? <><span> · </span>{item.location}</> : null}</p></div>{item.type && <span className="timeline-type">{item.type}</span>}</div>
                <p className="timeline-description">{item.description}</p>
                {item.projects && item.projects.length > 0 && <div className="timeline-projects"><span>RELATED WORK</span>{item.projects.map((project) => <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer">{project.title}<ArrowUpRight size={12} /></a>)}</div>}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
