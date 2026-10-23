'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import NetworkGlobe from './NetworkGlobe';

const skills = [
  { label: 'Angular', position: 'globe-tag--angular' },
  { label: 'Flutter', position: 'globe-tag--flutter' },
  { label: 'NestJS', position: 'globe-tag--nestjs' },
  { label: 'React', position: 'globe-tag--react' },
  { label: 'PostgreSQL', position: 'globe-tag--postgres' },
  { label: 'Firebase', position: 'globe-tag--firebase' },
  { label: 'Dart', position: 'globe-tag--dart' },
  { label: 'REST APIs', position: 'globe-tag--api' },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : .7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-inner section-wrap">
        <div className="hero-copy">
          <motion.p className="hero-eyebrow" {...enter(.08)}><span className="hero-star">✦</span> HELLO, I’M</motion.p>
          <motion.h1 id="hero-title" {...enter(.16)}><span>Mohammed</span><em>Salih</em></motion.h1>
          <motion.p className="hero-lede" {...enter(.25)}>Software developer building useful things that <em>work well.</em></motion.p>
          <motion.p className="hero-detail" {...enter(.32)}>Websites, mobile experiences, and the systems connecting them.</motion.p>
          <motion.div className="hero-actions" {...enter(.4)}>
            <Link className="button-primary" href="#projects">See my projects <ArrowRight size={16} /></Link>
            <a className="button-quiet" href="mailto:mohammadsalih096@gmail.com">Say hi <ArrowUpRight size={15} /></a>
          </motion.div>
        </div>

        <motion.div className="globe-scene" role="img" aria-label="Animated globe representing Mohammed’s web and mobile toolkit: Angular, Flutter, NestJS, React, PostgreSQL, Firebase, Dart and REST APIs" {...enter(.35)}>
          <div className="globe-wrap">
            <NetworkGlobe />
            {skills.map((skill) => <span className={`globe-tag ${skill.position}`} key={skill.label}>{skill.label}</span>)}
          </div>
        </motion.div>
      </div>
      <div className="hero-bottomline">
        <span className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></span>
        <span className="hero-index">01 <i /> 06</span>
      </div>
    </section>
  );
}
