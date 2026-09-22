'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'What comprehensive testing and inspection services does SMS Labs provide?',
    answer:
      'SMS Labs offers end-to-end testing, inspection, and training services. Our primary testing capabilities cover food testing (microbiology, nutritional profiling, pesticide residues, heavy metals, shelf-life studies), drinking and industrial water analysis (IS 10500 / ETP), environmental monitoring (ambient air, stack emissions, noise surveys), soil and sludge testing, and seafood export testing. Additionally, we provide third-party factory inspections (PSI, DUPRO, FRI) and container loading supervision.',
  },
  {
    question: 'Where are SMS Labs testing laboratories and hubs located?',
    answer:
      'Our state-of-the-art central laboratory and global headquarters are in Chennai. We maintain operational testing hubs and sample collection offices in Bangalore, Mumbai, Ahmedabad, Visakhapatnam, Pondicherry, Hyderabad, Coimbatore, and Cochin. Internationally, SMSLA operates dedicated regional offices in the Sultanate of Oman and the United Kingdom.',
  },
  {
    question: 'What national and international accreditations does SMS Labs hold?',
    answer:
      'SMS Labs is an ISO/IEC 17025 accredited laboratory by NABL (National Accreditation Board for Testing and Calibration Laboratories). We hold OHSAS 18001:2007 certification for food, metals, environmental aspects, and containers. We are recognized by statutory bodies including FSSAI (Food Safety and Standards Authority of India), CPCB, State Pollution Control Boards, and the Export Inspection Council (EIC).',
  },
  {
    question: 'How do I submit samples or schedule on-site collection logistics?',
    answer:
      'You can submit samples by filling out our online quote inquiry form below, calling our central coordinator at +91-44-26811662, or visiting any of our regional hubs. We provide temperature-controlled cold-chain sample pickup for perishable foods, seafood, and biological specimens across major industrial corridors.',
  },
  {
    question: 'What is the typical turnaround time (TAT) for test reports?',
    answer:
      'Standard analytical testing turnaround ranges between 3 to 5 business days depending on parameters (e.g. microbiological incubations vs. instrumental pesticide screening). For urgent export shipments or factory audits, we provide 24-hour and 48-hour priority fast-track processing upon request.',
  },
  {
    question: 'What differentiates SMS Labs from other commercial laboratories?',
    answer:
      'With over 14 years of dedicated service, 250+ passionate scientific professionals, and high-resolution instrumentation (LC-MS/MS, GC-MS/MS, ICP-MS), we offer customized solutions. If a standard testing method does not exist for your formulation, our specialized R&D wing develops, validates, and standardizes custom protocols for your exact compliance needs.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-container">
        <div className="section-heading text-center">
          <span className="section-tag">Frequently Asked Questions</span>
          <h2 className="section-title" id="faq-title">
            Got Questions About Testing &amp; Inspection?
          </h2>
          <p className="section-subtitle">
            Find answers to common questions regarding our lab operations, accreditation scopes,
            sample logistics, and regulatory compliance certificates.
          </p>
        </div>

        <div className="accordion">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={`accordion-item ${isOpen ? 'active' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="accordion-header"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span>{item.question}</span>
                  <span className="accordion-icon" aria-hidden="true" />
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className="accordion-content"
                  style={{
                    maxHeight: isOpen ? '360px' : '0',
                    transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
