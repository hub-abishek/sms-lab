'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  desc: string;
  decimal?: boolean;
}

const STATS_DATA: StatItem[] = [
  {
    target: 14,
    suffix: '+',
    label: 'Years of Experience',
    desc: 'Established in 2012 with a mission of holistic quality in Testing, Inspection, and Training.',
  },
  {
    target: 250,
    suffix: '+',
    label: 'Scientific Professionals',
    desc: 'Operating across Chennai, Bangalore, Mumbai, Ahmedabad, Vizag, Pondy, Hyderabad, Coimbatore & Cochin.',
  },
  {
    target: 5000,
    suffix: '+',
    label: 'Trusted Clientele',
    desc: 'Providing analytical testing for leading food processors, export units, and public corporations.',
  },
  {
    target: 100,
    suffix: '%',
    label: 'Compliance & Accuracy',
    desc: 'Certified OHSAS 18001:2007 & ISO/IEC 17025 provision for food, water, environment & container testing.',
  },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate each number smoothly
            const duration = 1800; // ms
            const startTime = performance.now();

            const updateNumbers = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Cubic ease-out
              const easeOut = 1 - Math.pow(1 - progress, 3);

              setCounts(
                STATS_DATA.map((item) => {
                  const currentVal = easeOut * item.target;
                  return item.decimal
                    ? parseFloat(currentVal.toFixed(1))
                    : Math.floor(currentVal);
                })
              );

              if (progress < 1) {
                requestAnimationFrame(updateNumbers);
              } else {
                setCounts(STATS_DATA.map((item) => item.target));
              }
            };

            requestAnimationFrame(updateNumbers);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats-section" ref={sectionRef} aria-label="Key Achievements and Statistics">
      <div className="container stats-grid">
        {STATS_DATA.map((stat, idx) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-number">
              {counts[idx]}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
            <p className="stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
