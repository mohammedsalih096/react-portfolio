import { ArrowUpRight, Mail } from 'lucide-react';
import Reveal from './Reveal';
import { GitHubMark, LinkedInMark } from './SocialIcons';

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-main section-wrap">
        <Reveal className="contact-content">
          <p className="section-kicker">06 / START A CONVERSATION</p>
          <h2 id="contact-title">Have a good<br /><span>project?</span></h2>
          <p className="contact-intro">For a role, a collaboration or an idea you’re working through, send me a note. I’d be glad to talk.</p>
          <a className="contact-email" href="mailto:mohammadsalih096@gmail.com"><Mail size={16} /> MOHAMMADSALIH096@GMAIL.COM <ArrowUpRight size={15} /></a>
          <div className="contact-socials">
            <a href="https://github.com/mohammedsalih096" target="_blank" rel="noopener noreferrer"><GitHubMark /> GITHUB <ArrowUpRight size={12} /></a>
            <a href="https://www.linkedin.com/in/mohammadsalih/" target="_blank" rel="noopener noreferrer"><LinkedInMark /> LINKEDIN <ArrowUpRight size={12} /></a>
          </div>
        </Reveal>
        <div className="contact-stamp" aria-hidden="true"><span>MS</span><small>WEB · MOBILE<br />SOFTWARE</small></div>
      </div>
    </section>
  );
}
