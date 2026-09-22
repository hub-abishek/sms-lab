'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Quality Assurance Director',
    company: 'Marine Food Exports Ltd.',
    initials: 'RK',
    quote:
      'SMS Labs has been our trusted analytical partner for export-grade seafood pesticide and banned antibiotic residue testing. Their turnaround time is impeccable, and their NABL accredited reports are accepted seamlessly across European and US ports.',
    rating: 5,
  },
  {
    name: 'Ananya Narayanan',
    role: 'Environmental Health & Safety Manager',
    company: 'FMCG Manufacturing South India',
    initials: 'AN',
    quote:
      'We rely on SMSLA for monthly drinking water, stack emissions, and effluent monitoring across all our manufacturing units in Tamil Nadu and Karnataka. The analytical accuracy and dedicated technical advisory support are second to none.',
    rating: 5,
  },
  {
    name: 'Vikas Sharma',
    role: 'VP Operations',
    company: 'Natural Foods & Beverages Ltd.',
    initials: 'VS',
    quote:
      'When we needed rapid nutritional labeling and accelerated shelf-life stability testing for our new packaged food launch, SMS Labs guided us through every step of FSSAI compliance with true technical mastery and prompt service.',
    rating: 5,
  },
  {
    name: 'Dr. Meera Chandrasekaran',
    role: 'Head of Regulatory Affairs',
    company: 'Agri-Biotech Innovations',
    initials: 'MC',
    quote:
      'The multi-residue pesticide screening and soil fertility characterization provided by SMS Labs enabled our farmers’ cooperative to secure organic export certification with complete confidence.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (idx: number) => {
    let nextIdx = idx;
    if (nextIdx < 0) nextIdx = TESTIMONIALS.length - 1;
    if (nextIdx >= TESTIMONIALS.length) nextIdx = 0;
    setCurrentIndex(nextIdx);
  };

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-tag">Client Testimonials</span>
          <h2 className="section-title" id="testimonials-title">
            Trusted By Food Producers, Exporters &amp; Global Industries
          </h2>
          <p className="section-subtitle">
            Real feedback from quality heads, compliance officers, and plant directors who rely on
            SMS Labs for mission-critical analytical decisions.
          </p>
        </div>

        <div
          className="testimonials-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div className="testimonial-slide" key={item.name}>
                  <div className="testimonial-card">
                    <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                      {'★'.repeat(item.rating)}
                    </div>
                    <blockquote className="testimonial-quote">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <div className="testimonial-author">
                      <div className="author-avatar" aria-hidden="true">
                        {item.initials}
                      </div>
                      <div className="author-info">
                        <h4>{item.name}</h4>
                        <p>
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls & Indicators */}
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn prev"
              onClick={() => goToSlide(currentIndex - 1)}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="carousel-indicators">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-btn next"
              onClick={() => goToSlide(currentIndex + 1)}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
