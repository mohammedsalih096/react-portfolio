import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ProjectPreview from './ProjectPreview';
import { GitHubMark } from './SocialIcons';
import { earlierProjects, featuredProjects } from '../data/projects';

export default function Projects() {
  return (
    <section className="work section-wrap section-pad" id="projects" aria-labelledby="projects-title">
      <div className="section-heading section-heading--split">
        <div><p className="section-kicker">03 / SELECTED WORK</p><h2 id="projects-title">Built for<br /><span>real use.</span></h2></div>
        <p className="section-intro">Recent client websites alongside selected web and mobile projects from earlier in my career.</p>
      </div>

      <div className="featured-grid">
        {featuredProjects.map((project, index) => (
          <Reveal className={`featured-project featured-project--${project.id}`} delay={index * 0.08} key={project.id}>
            <a className="featured-project-link" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website (opens in a new tab)`}>
              <div className="featured-project-topline"><span>0{index + 1}</span><span>{project.context}</span></div>
              <div className="featured-project-copy">
                <p className="featured-project-type">{project.id === 'food-palace' ? 'RESTAURANT WEBSITE' : project.id === 'rehaz-resort' ? 'HOSPITALITY WEBSITE' : 'DEVELOPMENT CONTRIBUTION'}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="featured-project-foot">
                <span>VIEW LIVE PROJECT</span>
                <span className="project-action" aria-hidden="true"><ArrowUpRight size={19} /></span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="archive-heading">
        <div><p className="section-kicker">THE PROJECT ARCHIVE</p><h3>More work, more range<span>.</span></h3></div>
        <p>Product interfaces, mobile applications and experiments from earlier projects.</p>
      </div>
      <div className="archive-grid">
        {earlierProjects.map((project, index) => (
          <Reveal className="archive-card" delay={(index % 3) * 0.06} key={project.id}>
            <a className="archive-image" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} project link (opens in a new tab)`}>
              {project.image ? <Image src={project.image} alt={project.imageAlt ?? `${project.title} project preview`} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 32vw" unoptimized /> : <ProjectPreview project={project} />}
              <span className="archive-image-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
            </a>
            <div className="archive-content">
              <p className="archive-context">{project.context}</p>
              <div className="archive-title-row"><h4>{project.title}</h4><a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={16} /></a></div>
              <p className="archive-description">{project.description}</p>
              <ul className="archive-tech" aria-label={`${project.title} technologies`}>{project.tech.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <div className="archive-links"><a href={project.live} target="_blank" rel="noopener noreferrer">View project <ArrowUpRight size={13} /></a>{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><GitHubMark size={13} /> Source</a>}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
