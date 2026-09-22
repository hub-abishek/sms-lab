'use react';
import React from 'react';

const TESTING_HUBS = [
  { city: 'Chennai', role: 'Central Laboratory & Global HQ', primary: true },
  { city: 'Bangalore', role: 'Food & Environmental Hub', primary: false },
  { city: 'Hyderabad', role: 'Pharma & Water Testing Hub', primary: false },
  { city: 'Mumbai', role: 'Western Regional Testing Desk', primary: false },
  { city: 'Ahmedabad', role: 'Agri & Industrial Testing', primary: false },
  { city: 'Visakhapatnam', role: 'Seafood & Port Inspection Hub', primary: false },
  { city: 'Pondicherry', role: 'Environmental & Microbiology', primary: false },
  { city: 'Coimbatore', role: 'Textile & Effluent Testing', primary: false },
  { city: 'Cochin', role: 'Marine Export & Quality Audits', primary: false },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          {/* Text Content */}
          <div className="about-text">
            <span className="section-tag">About SMS Labs</span>
            <h2 className="section-title" id="about-title">
              We&rsquo;ll Ensure You Always Get The Best Analytical Results
            </h2>

            <p className="about-lead">
              We at <strong>SMS Labs Private Limited (SMSLA)</strong> are passionate to meet and solve
              the most complex quality, analytical, and regulatory challenges faced by modern
              enterprises.
            </p>

            <p>
              In any operational context, we stand beside you as your dedicated quality partner. Our
              senior research scientists and certified inspectors assist you across every testing
              need &mdash;{' '}
              <em>
                if a validated testing protocol does not already exist for your novel formulation,
                our R&amp;D wing will develop and validate a custom analytical method to resolve your
                requirements.
              </em>
            </p>

            <div className="about-highlights">
              <div className="about-point">
                <span className="point-icon" aria-hidden="true">🎯</span>
                <div>
                  <h4>Holistic Quality Assurance</h4>
                  <p>
                    Unified laboratory testing, third-party pre-shipment inspections (PSI), factory
                    audits, technical training, and FSSAI/regulatory advisory.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <span className="point-icon" aria-hidden="true">🔬</span>
                <div>
                  <h4>Advanced Analytical Instrumentation</h4>
                  <p>
                    Equipped with high-resolution GC-MS/MS, LC-MS/MS, ICP-MS, HPLC, FTIR, and RT-PCR
                    for trace-level detection of pesticides, antibiotics, dioxins, and pathogens.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a
                href="https://smsla.global/about-sms-labs-food-testing"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About SMS Labs
              </a>
              <a
                href="#accreditation"
                className="btn btn-outline"
              >
                View Certificates &amp; Scope
              </a>
            </div>
          </div>

          {/* Right Hub Card */}
          <div className="about-image-card">
            <div className="lab-feature-box">
              <span className="feature-tag">Pan-India &amp; Global Reach</span>
              <h3>Strategic Testing &amp; Inspection Hubs</h3>

              <ul className="hub-list">
                {TESTING_HUBS.map((hub) => (
                  <li key={hub.city}>
                    <span className="pin" aria-hidden="true">📍</span>
                    <div>
                      <strong>{hub.city}</strong> &mdash;{' '}
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        {hub.role}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="global-expansion">
                <span>International Operations:</span>
                <span className="flag">🇴🇲 Sultanate of Oman</span>
                <span className="flag">🇬🇧 United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
