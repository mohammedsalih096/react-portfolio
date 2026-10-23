'use client';

import { useReducedMotion, motion } from 'motion/react';
import Reveal from './Reveal';

const steps = [
  { number: '01', title: 'Understand', copy: 'Get clear on the goal, the people using it and what needs to work.' },
  { number: '02', title: 'Build', copy: 'Shape the interface and implementation around the needs of the project.' },
  { number: '03', title: 'Deliver', copy: 'Check the details, make it responsive and get the work ready to use.' },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="process section-wrap section-pad" id="process" aria-labelledby="process-title">
      <div className="section-heading section-heading--split">
        <div><p className="section-kicker">06 / HOW I WORK</p><h2 id="process-title">Clear steps.<br /><span>Good work.</span></h2></div>
        <p className="section-intro">A straightforward path from understanding the need to handing over a finished experience.</p>
      </div>
      <div className="process-track" aria-hidden="true">
        <svg viewBox="0 0 1000 130" preserveAspectRatio="none">
          <path className="process-path-base" d="M10 70 H245 V35 H500 V95 H755 V58 H990" />
          <motion.path
            className="process-path-progress"
            d="M10 70 H245 V35 H500 V95 H755 V58 H990"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduceMotion ? 0 : 1.5, ease: 'easeInOut' }}
          />
        </svg>
        <span className="process-node process-node--one" /><span className="process-node process-node--two" /><span className="process-node process-node--three" />
      </div>
      <div className="process-steps">
        {steps.map((step, index) => (
          <Reveal className="process-step" delay={index * 0.08} key={step.number}>
            <span>{step.number} / STEP</span><h3>{step.title}<i>.</i></h3><p>{step.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
