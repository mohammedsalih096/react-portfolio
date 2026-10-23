'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'PROJECTS', href: '#projects' },
  { label: 'STACK', href: '#skills' },
  { label: 'PROOF', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    document.body.classList.toggle('menu-is-open', isOpen);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('menu-is-open');
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="reading-progress" aria-hidden="true"><motion.span style={reduceMotion ? undefined : { scaleX: progress }} /></div>
      <header className="site-nav">
        <a className="nav-brand" href="#home" aria-label="Mohammed Salih, home"><span>MS</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <button className="mobile-menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-nav" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <><span>CLOSE</span><X size={16} /></> : <><span>MENU</span><Menu size={16} /></>}
        </button>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" initial={reduceMotion ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
            {links.map((link, index) => <motion.a href={link.href} onClick={closeMenu} key={link.href} initial={reduceMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : index * 0.045 }}><span>0{index + 1}</span>{link.label}<ArrowUpRight size={16} /></motion.a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
