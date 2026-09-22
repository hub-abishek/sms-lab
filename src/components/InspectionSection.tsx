'use react';
import React from 'react';

const INSPECTION_STEPS = [
  {
    code: 'PSI',
    title: 'Pre-Shipment Inspection (PSI)',
    desc: 'Thorough verification of finished goods before container loading to ensure physical specifications, quantities, labelling, and packaging integrity.',
  },
  {
    code: 'DUP',
    title: 'During Production Inspection (DUPRO)',
    desc: 'In-line factory assessment during early manufacturing (10%-30% complete) to catch and rectify quality deviations before bulk finishing.',
  },
  {
    code: 'FRI',
    title: 'Final Random Inspection & Loading Supervision',
    desc: 'Statistically sound AQL sampling audits and full container stuffing/loading supervision to guarantee tamper-free global dispatch.',
  },
  {
    code: 'TRN',
    title: 'Industry Training & Technical Advisory',
    desc: 'Custom corporate training programs in food hygiene, laboratory analytical techniques, ISO 17025 implementation, and quality management systems.',
  },
];

const CHECKLIST_ITEMS = [
  'Food Safety & Hygiene Inspections (GMP / GHP Audits)',
  'Packaging Material Testing (Seafood, Dairy & Confectionery)',
  'Environmental Analysis & Workplace Social Compliance',
  'R&D, Method Development & Custom Validation',
  'Shelf-Life Simulation & Nutritional Profiling',
  'Persistent Organic Pollutants (POPs, PAHs, PCBs)',
];

export default function InspectionSection() {
  return (
    <section className="services-section" id="inspection" aria-labelledby="inspection-title">
      <div className="container">
        <div className="services-banner">
          {/* Left Info & Steps */}
          <div className="services-info">
            <span className="section-tag">Quality Assurance</span>
            <h2 className="section-title" id="inspection-title">
              Inspection Services &amp; Regulatory Audits
            </h2>
            <p className="section-subtitle">
              SMSLA provides independent third-party inspection and auditing services that safeguard
              your brand integrity, supply chain reliability, and global export acceptance.
            </p>

            <div className="step-items">
              {INSPECTION_STEPS.map((step) => (
                <div className="step-item" key={step.code}>
                  <div className="step-number">{step.code}</div>
                  <div className="step-details">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlight Card */}
          <div className="services-highlight">
            <div className="lab-inspection-card">
              <div className="inspection-header">
                <h3>SMSLA Quality Inspection Suite</h3>
                <span className="badge-sm">ISO / IEC Standards</span>
              </div>

              <ul className="inspection-checklist">
                {CHECKLIST_ITEMS.map((item) => (
                  <li key={item}>
                    <span className="check-circle" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="inspection-cta">
                <a href="#contact" className="btn btn-primary btn-block">
                  Schedule an Inspection / Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
