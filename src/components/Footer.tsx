'use react';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        {/* Brand & Overview */}
        <div className="footer-brand">
          <a href="#home" className="logo footer-logo" aria-label="SMS Labs Home">
            <Image
              src="/logo.png"
              alt="SMS Labs Logo"
              width={56}
              height={56}
              className="brand-logo-img footer-logo-img"
            />
            <div className="logo-text-group">
              <span className="logo-text">
                SMS <span style={{ color: '#38bdf8' }}>LABS</span>
              </span>
              <span className="logo-subtext" style={{ color: '#94a3b8' }}>
                SMSLA &bull; NABL ACCREDITED
              </span>
            </div>
          </a>

          <p className="footer-desc">
            SMS Labs Private Limited is an ISO/IEC 17025 NABL accredited testing laboratory providing
            reliable, accurate, and timely analytical testing, third-party inspection, and quality
            certification services across food, water, environmental, and industrial sectors.
          </p>

          <div className="footer-contact-details">
            <p>
              <strong>Direct Tel:</strong> +91-44-26811662 / 44-26811663
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:enquiry@smsla.in">enquiry@smsla.in</a> &bull;{' '}
              <a href="mailto:support@smsla.global">support@smsla.global</a>
            </p>
          </div>
        </div>

        {/* Testing Services Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Testing Services</h4>
          <ul>
            <li>
              <a href="https://smsla.global/service/food-testing-laboratories/" target="_blank" rel="noopener noreferrer">
                Food Testing &amp; Nutrition
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/water-testing-laboratories/" target="_blank" rel="noopener noreferrer">
                Water &amp; Effluent Testing
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/environmental-testing-labs/" target="_blank" rel="noopener noreferrer">
                Environmental &amp; Air Quality
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/pesticide-residue-testing/" target="_blank" rel="noopener noreferrer">
                Pesticide Residue Analysis
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/seafood-testing/" target="_blank" rel="noopener noreferrer">
                Seafood &amp; Marine Exports
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/soil-testing/" target="_blank" rel="noopener noreferrer">
                Soil &amp; Solid Waste Testing
              </a>
            </li>
          </ul>
        </div>

        {/* Inspection & Audits Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Inspection &amp; Audits</h4>
          <ul>
            <li>
              <a href="https://smsla.global/service/inspection-services/" target="_blank" rel="noopener noreferrer">
                Pre-Shipment Inspection (PSI)
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/inspection-services/" target="_blank" rel="noopener noreferrer">
                During Production (DUPRO)
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/inspection-services/" target="_blank" rel="noopener noreferrer">
                Final Random Inspection (FRI)
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/inspection-services/" target="_blank" rel="noopener noreferrer">
                Container Loading Supervision
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/inspection-services/" target="_blank" rel="noopener noreferrer">
                GMP &amp; Food Hygiene Audits
              </a>
            </li>
            <li>
              <a href="https://smsla.global/service/training/" target="_blank" rel="noopener noreferrer">
                Industry Technical Training
              </a>
            </li>
          </ul>
        </div>

        {/* Locations & Quick Links */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Locations &amp; Portals</h4>
          <p className="footer-locations">
            <strong>India Testing Hubs:</strong> Chennai (HQ), Bangalore, Mumbai, Ahmedabad,
            Visakhapatnam, Pondicherry, Hyderabad, Coimbatore, Cochin.
            <br />
            <strong>Global Offices:</strong> Oman &bull; United Kingdom
          </p>

          <ul className="footer-quick-list">
            <li>
              <a href="https://smsla.global/about-sms-labs-food-testing" target="_blank" rel="noopener noreferrer">
                About SMS Labs
              </a>
            </li>
            <li>
              <a href="https://smsla.global/infrastructure/" target="_blank" rel="noopener noreferrer">
                Laboratory Infrastructure
              </a>
            </li>
            <li>
              <a href="https://smsla.global/recognition-accreditation" target="_blank" rel="noopener noreferrer">
                NABL Accreditation Scope
              </a>
            </li>
            <li>
              <a href="https://smsla.global/careers-at-sms-labs/" target="_blank" rel="noopener noreferrer">
                Careers at SMS Labs
              </a>
            </li>
            <li>
              <a href="https://smsla.global/food-testing-insights-blog/" target="_blank" rel="noopener noreferrer">
                Scientific Insights &amp; Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; 2026 SMS Labs Private Limited (SMSLA). All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="https://smsla.global/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="#contact">Contact Lab</a>
            <a href="https://smsla.global/" target="_blank" rel="noopener noreferrer">
              Official Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
