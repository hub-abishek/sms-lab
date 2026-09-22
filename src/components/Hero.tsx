'use react';
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="container hero-container">
        {/* Left Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            <span>NABL Accredited Testing Laboratory &bull; LED BY PASSIONATE EXPERTS</span>
          </div>

          <h1 className="hero-title" id="hero-title">
            SMSLA &mdash; Your Ultimate{' '}
            <span className="gradient-text">Quality Testing &amp; Inspection</span> Partner in India
          </h1>

          <p className="hero-subtitle">
            Delivering gold-standard certified testing for{' '}
            <strong>Food, Water, Environment, Soil, Seafood, and Materials</strong> with
            state-of-the-art analytical facilities, high-precision instrumentation, and trusted
            regulatory compliance.
          </p>

          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary btn-lg">
              <span>Book Sample Testing / Quote</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="#services" className="btn btn-secondary btn-lg">
              Explore Services
            </a>
          </div>

          {/* Hero Highlights Badges */}
          <div className="hero-pillars">
            <div className="pillar-item">
              <span className="pillar-check" aria-hidden="true">✓</span>
              <div>
                <strong>Certified Food Testing</strong>
                <p>Microbiology, Nutritional Profiling, Pesticides &amp; Shelf-Life Studies</p>
              </div>
            </div>

            <div className="pillar-item">
              <span className="pillar-check" aria-hidden="true">✓</span>
              <div>
                <strong>Water Quality You Can Trust</strong>
                <p>Drinking (IS 10500), Borewell, RO &amp; Industrial Effluent Monitoring</p>
              </div>
            </div>

            <div className="pillar-item">
              <span className="pillar-check" aria-hidden="true">✓</span>
              <div>
                <strong>Air, Soil &amp; Emission Monitoring</strong>
                <p>Ambient Air, Stack Emission, Sludge &amp; Regulatory Environmental Audits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hero Laboratory Visual Mockup */}
        <div className="hero-visual">
          <div className="preview-card">
            <div className="preview-header">
              <div className="window-controls" aria-hidden="true">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="preview-title">SMSLA Lab Information System &bull; LIMS Live</span>
              <span className="preview-status">
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: 'var(--success)',
                    display: 'inline-block',
                  }}
                />
                Accredited
              </span>
            </div>

            <div className="preview-body">
              <div className="lab-card-banner">
                <div className="lab-banner-content">
                  <Image
                    src="/logo.png"
                    alt="SMSLA Certified Laboratory Badge"
                    width={64}
                    height={64}
                    className="lab-banner-logo"
                  />
                  <div className="lab-badge-large">
                    <span className="nabl-tag">NABL &bull; OHSAS 18001</span>
                    <h3>SMS Labs Private Limited</h3>
                    <p>Certified Laboratory Services &bull; Est. 2012</p>
                  </div>
                </div>
              </div>

              <div className="metric-row">
                <div className="metric-card">
                  <span className="metric-label">Precision Rating</span>
                  <span className="metric-val">99.98%</span>
                  <span className="metric-sub text-success">Compliant to ISO/IEC 17025</span>
                </div>

                <div className="metric-card">
                  <span className="metric-label">Sample Turnaround</span>
                  <span className="metric-val">Fast &amp; Reliable</span>
                  <span className="metric-sub text-muted">Digital Certificates Issued</span>
                </div>
              </div>

              {/* Lab Capabilities List */}
              <div className="lab-capabilities">
                <div className="cap-pill">🥗 FSSAI Compliance</div>
                <div className="cap-pill">💧 IS 10500 Water</div>
                <div className="cap-pill">🌱 CPCB Environmental</div>
                <div className="cap-pill">🐟 Seafood Export</div>
                <div className="cap-pill">🔬 GC-MS/MS &amp; ICP-MS</div>
              </div>

              {/* Floating Accent Badges */}
              <div className="floating-badge top-right">
                <div className="pulse-icon" aria-hidden="true">🔬</div>
                <div>
                  <strong>NABL Accredited</strong>
                  <p>National &amp; Global Validity</p>
                </div>
              </div>

              <div className="floating-badge bottom-left">
                <div className="pulse-icon" aria-hidden="true">📍</div>
                <div>
                  <strong>Pan-India Reach</strong>
                  <p>9+ Testing Hubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
