'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import Reveal from './Reveal';

const proof = [
  { value: '09', label: 'PROJECTS IN THE PORTFOLIO', detail: 'From business sites to mobile apps', tone: 'lime' },
  { value: '04', label: 'INDUSTRY ROLES', detail: 'Across product and web teams', tone: 'coral' },
  { value: '02', label: 'PRODUCT LANES', detail: 'Web experiences and mobile apps', tone: 'teal' },
];

function CountUp({ value }: { value: string }) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(numberRef, { once: true, amount: .8 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : '0'.repeat(value.length));

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, Number(value), {
      duration: 1.15,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(String(Math.floor(latest)).padStart(value.length, '0')),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return <strong><span ref={numberRef}>{display}</span></strong>;
}

export default function About() {
  return (
    <section className="about section-wrap section-pad" id="about" aria-labelledby="about-title">
      <div className="section-heading section-heading--split about-heading">
          <div><p className="section-kicker">02 / BY THE NUMBERS</p><h2 id="about-title">A few things,<br /><span>well built.</span></h2></div>
        <p className="section-intro">A few numbers to show the range of work, and a little context about the developer behind it.</p>
      </div>

      <div className="proof-grid" aria-label="Portfolio highlights">
        {proof.map((item, index) => (
          <Reveal className={`proof-card proof-card--${item.tone}`} delay={index * 0.07} key={item.label}>
            <span className="proof-index">0{index + 1} / FIELD NOTE</span>
            <CountUp value={item.value} />
            <p>{item.label}</p>
            <small>{item.detail}</small>
          </Reveal>
        ))}
      </div>

      <div className="about-story">
        <Reveal className="about-statement">
          <p className="section-kicker">THE SHORT VERSION</p>
          <h3>Web, mobile,<br />the <em>whole</em> picture.</h3>
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <p>I’m Mohammed, a software developer who has worked across mobile apps, web applications and business websites. I like turning a rough need into a clear interface, then making sure the details behind it hold together.</p>
          <p>My experience includes Flutter, Angular, NestJS and modern web work. Each team and project has taught me to stay adaptable, communicate clearly and keep the person using the product in view.</p>
          <div className="about-pill-row"><span>FRONTEND</span><span>MOBILE</span><span>FULL-STACK</span><span>DELIVERY</span></div>
        </Reveal>
      </div>
    </section>
  );
}
