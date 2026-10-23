import type { ProjectItem } from '../types';

interface ProjectPreviewProps {
  project: ProjectItem;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  const number = project.id === 'food-palace' ? '01' : project.id === 'rehaz-resort' ? '02' : '03';

  return (
    <div className={`project-art project-art--${project.preview}`} aria-hidden="true">
      <div className="project-art-topline"><span>MS / SELECTED WORK</span><span>{number}</span></div>
      {project.preview === 'food' ? (
        <div className="project-art-content"><span className="project-art-kicker">RESTAURANT WEBSITE</span><strong>Food<br /><em>Palace</em></strong><span className="project-art-caption">MSH ALQURAISH · LIVE PROJECT</span></div>
      ) : project.preview === 'resort' ? (
        <div className="project-art-content"><span className="resort-sun" /><span className="resort-land resort-land--back" /><span className="resort-land resort-land--front" /><span className="project-art-kicker">RESORT WEBSITE</span><strong>Rehaz<br />Resort</strong><span className="project-art-caption">MSH ALQURAISH · LIVE PROJECT</span></div>
      ) : project.preview === 'medera' ? (
        <div className="project-art-content"><span className="medera-spark">＋</span><strong className="medera-word">medera<span>.</span></strong><span className="project-art-caption">DEVELOPMENT CONTRIBUTION · ONEPAGE</span></div>
      ) : (
        <div className="project-art-content"><span className="project-art-kicker">{project.context}</span><strong>{project.title}</strong></div>
      )}
      <span className="project-art-note">PORTFOLIO ARTWORK · NOT A SITE SCREENSHOT</span>
    </div>
  );
}
