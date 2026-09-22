'use react';
import React from 'react';

export default function TopContactBar() {
  return (
    <div className="top-contact-bar" role="complementary" aria-label="Quick contact and presence">
      <div className="container top-contact-container">
        <div className="top-contact-left">
          <span className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="tel:+914426811662" title="Call Chennai Central Lab">+91-44-26811662</a>
            <span style={{ opacity: 0.4 }}>/</span>
            <a href="tel:+914426811663" title="Call Alternate Direct Line">44-26811663</a>
          </span>

          <span className="contact-divider" aria-hidden="true">|</span>

          <span className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:enquiry@smsla.in" title="Send Official Sample Inquiry">enquiry@smsla.in</a>
          </span>
        </div>

        <div className="top-contact-right">
          <span className="locations-label">Global Presence:</span>
          <span className="location-badge active" title="HQ & 9 Lab Hubs across India">🇮🇳 INDIA (HQ)</span>
          <span className="contact-divider" aria-hidden="true">|</span>
          <span className="location-badge" title="International Operations: Sultanate of Oman">🇴🇲 OMAN</span>
          <span className="contact-divider" aria-hidden="true">|</span>
          <span className="location-badge" title="International Operations: United Kingdom">🇬🇧 UK</span>
        </div>
      </div>
    </div>
  );
}
