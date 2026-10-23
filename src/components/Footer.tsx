import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="footer-brand" href="#home"><span className="footer-monogram">MS</span><span>MOHAMMED SALIH S A<br /><small>SOFTWARE DEVELOPER</small></span></a>
      <p>MADE WITH CARE · © {new Date().getFullYear()} MOHAMMED SALIH</p>
      <div className="footer-links"><a href="mailto:mohammadsalih096@gmail.com">EMAIL <ArrowUpRight size={13} /></a><a href="#home">BACK TO TOP <ArrowUp size={13} /></a></div>
    </footer>
  );
}
