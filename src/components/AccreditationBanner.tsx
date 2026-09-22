'use react';
import React from 'react';

const ACCREDITATIONS = [
  {
    title: 'NABL ACCREDITED',
    subtitle: 'ISO/IEC 17025:2017 Certified',
    code: 'TC-5481',
    icon: '🏅',
  },
  {
    title: 'ISO/IEC 17025',
    subtitle: 'Chemical & Biological Scope',
    code: 'National Validity',
    icon: '📜',
  },
  {
    title: 'OHSAS 18001:2007',
    subtitle: 'Health & Safety Management',
    code: 'Certified Ops',
    icon: '🛡️',
  },
  {
    title: 'FSSAI RECOGNIZED',
    subtitle: 'Food Safety & Standards Authority',
    code: 'Referral & Testing',
    icon: '🥗',
  },
  {
    title: 'CPCB / SPCB APPROVED',
    subtitle: 'Central & State Pollution Boards',
    code: 'Air, Water & Stack',
    icon: '🌱',
  },
  {
    title: 'EIC / MPEDA RECOGNIZED',
    subtitle: 'Marine Export Residue Testing',
    code: 'EU / US Standards',
    icon: '🐟',
  },
];

export default function AccreditationBanner() {
  return (
    <section className="partners-section" id="accreditation" aria-label="Accreditations and Certifications">
      <div className="container">
        <p className="partners-tagline">
          MAJOR NATIONAL &amp; INTERNATIONAL ACCREDITATIONS, APPROVALS &amp; RECOGNITIONS
        </p>

        <div className="partners-grid">
          {ACCREDITATIONS.map((item) => (
            <div key={item.title} className="partner-pill" title={`${item.title} - ${item.subtitle}`}>
              <span className="partner-icon" aria-hidden="true">{item.icon}</span>
              <div>
                <div>{item.title}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
