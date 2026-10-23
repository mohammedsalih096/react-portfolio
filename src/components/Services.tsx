import { ArrowUpRight, Braces, Smartphone, Workflow } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    number: '01',
    label: 'WEB EXPERIENCES',
    title: 'Websites &\ninterfaces.',
    description: 'Responsive business websites and clear frontend interfaces, built with attention to layout, usability and the small details.',
    stack: ['React', 'Next.js', 'Angular', 'TypeScript'],
    icon: Braces,
  },
  {
    number: '02',
    label: 'MOBILE PRODUCTS',
    title: 'Apps for\nreal use.',
    description: 'Mobile applications designed around everyday tasks, from survey collection to shopping and service workflows.',
    stack: ['Flutter', 'Dart', 'BLoC', 'GetX'],
    icon: Smartphone,
  },
  {
    number: '03',
    label: 'SOFTWARE & DATA',
    title: 'Systems that\nconnect.',
    description: 'Full-stack application work across APIs, data and interfaces, supported by practical software development experience.',
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'Firebase'],
    icon: Workflow,
  },
];

export default function Services() {
  return (
    <section className="services section-wrap section-pad" id="services" aria-labelledby="services-title">
      <div className="section-heading section-heading--split">
        <div><p className="section-kicker">03 / WHAT I DO</p><h2 id="services-title">A practical<br /><span>skill set.</span></h2></div>
        <p className="section-intro">From the first interface to the logic behind it, I work across the parts that make digital products useful.</p>
      </div>
      <div className="service-list">
        {services.map(({ number, label, title, description, stack, icon: Icon }, index) => (
          <Reveal className={`service-card service-card--${index + 1}`} delay={index * 0.08} key={number}>
            <span className="service-index">{number}</span>
            <div className="service-copy">
              <p className="service-label">{label}</p>
              <h3>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3>
              <p className="service-description">{description}</p>
              <ul className="service-tags">{stack.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <span className="service-icon" aria-hidden="true"><Icon size={31} strokeWidth={1.35} /></span>
            <span className="service-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
