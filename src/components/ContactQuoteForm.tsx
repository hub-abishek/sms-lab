'use client';

import React, { useState } from 'react';

interface FormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  sampleCount: string;
  urgency: string;
  message: string;
}

export default function ContactQuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    service: 'food',
    sampleCount: '1-5',
    urgency: 'standard',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    title: string;
    message: string;
    isError: boolean;
  }>({
    show: false,
    title: '',
    message: '',
    isError: false,
  });

  const showToast = (title: string, message: string, isError = false) => {
    setToast({ show: true, title, message, isError });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your contact person name.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid work email address.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid contact number.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share sample details (at least 10 characters).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast('Submission Incomplete', 'Please check the highlighted fields before sending.', true);
      return;
    }

    setLoading(true);

    // Simulate network submission to SMS Labs LIMS
    setTimeout(() => {
      setLoading(false);
      setFormData({
        fullName: '',
        organization: '',
        email: '',
        phone: '',
        service: 'food',
        sampleCount: '1-5',
        urgency: 'standard',
        message: '',
      });

      showToast(
        'Testing Inquiry Submitted Successfully!',
        'Thank you for contacting SMS Labs. Our senior technical coordinator will review your parameters and issue an official quote within 2 business hours.'
      );
    }, 1200);
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-wrapper">
          {/* Left: Contact Info & Hubs */}
          <div className="contact-info">
            <span className="section-tag">Direct Lab Engagement</span>
            <h2 className="section-title" id="contact-title">
              Request a Test Quote &amp; Schedule Sample Pickup
            </h2>
            <p className="section-subtitle">
              Connect directly with our senior analytical chemists and quality inspectors. We ensure
              regulatory compliance, rapid turnaround, and certified results.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon" aria-hidden="true">📞</div>
                <div>
                  <strong>Central Telephone Desk</strong>
                  <p>
                    <a href="tel:+914426811662">+91-44-26811662</a> /{' '}
                    <a href="tel:+914426811663">+91-44-26811663</a>
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon" aria-hidden="true">✉️</div>
                <div>
                  <strong>Official Laboratory Email</strong>
                  <p>
                    <a href="mailto:enquiry@smsla.in">enquiry@smsla.in</a> &bull;{' '}
                    <a href="mailto:support@smsla.global">support@smsla.global</a>
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon" aria-hidden="true">📍</div>
                <div>
                  <strong>Central Testing Laboratory &amp; HQ</strong>
                  <p>
                    Plot No. 39/B, SIDCO Industrial Estate, Thirumazhisai, Chennai &ndash; 600 124,
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon" aria-hidden="true">🌐</div>
                <div>
                  <strong>Regional Hubs &amp; International Offices</strong>
                  <p>
                    Bangalore &bull; Mumbai &bull; Ahmedabad &bull; Vizag &bull; Pondicherry &bull;{' '}
                    Hyderabad &bull; Coimbatore &bull; Cochin &bull; Oman &bull; UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Sample Inquiry Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Submit a Testing / Inspection Inquiry</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
                  <label htmlFor="fullName">
                    Contact Person Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Dr. / Mr. / Ms. John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Company / Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    placeholder="E.g. Marine Exporters Ltd."
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">
                    Work Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                  <label htmlFor="phone">
                    Phone / Mobile Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="service">Testing Category Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="food">Food Testing (Nutrition, FSSAI, Shelf-Life, Pesticides)</option>
                    <option value="water">Water Testing (Drinking, Borewell, ETP/STP Effluent)</option>
                    <option value="environmental">Environmental (Ambient Air, Stack, Noise, Soil)</option>
                    <option value="soil">Soil &amp; Sludge Heavy Metals Analysis</option>
                    <option value="seafood">Seafood &amp; Marine Export Testing (Antibiotics, Histamine)</option>
                    <option value="microbiology">Microbiology &amp; Foodborne Pathogen Isolation</option>
                    <option value="inspection">Third-Party Inspection (PSI, DUPRO, FRI, Loading)</option>
                    <option value="training">Training, R&amp;D &amp; Custom Method Development</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="urgency">Processing Urgency</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="standard">Standard (3-5 Days)</option>
                    <option value="priority">Priority Fast-Track (48h)</option>
                    <option value="express">Urgent Express (24h)</option>
                  </select>
                </div>
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message">
                  Sample Details / Requirements <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Mention sample count, matrix (e.g. drinking water, honey, spices, prawns), parameters needed, and preferred pickup location..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
                style={{ padding: '0.9rem' }}
              >
                {loading ? (
                  <>
                    <span className="spinner" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <span>Submit Testing Inquiry &rarr;</span>
                )}
              </button>

              <p className="form-footnote">
                🔒 All sample submissions, formulations, and analytical reports are protected under
                strict non-disclosure agreements (NDA).
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Global Toast Notification */}
      <div
        className={`toast-notification ${toast.show ? 'show' : ''} ${toast.isError ? 'error' : ''}`}
        role="alert"
        aria-live="assertive"
      >
        <div className="toast-icon">{toast.isError ? '!' : '✓'}</div>
        <div className="toast-body">
          <h4>{toast.title}</h4>
          <p>{toast.message}</p>
        </div>
        <button
          type="button"
          className="toast-close"
          onClick={() => setToast((prev) => ({ ...prev, show: false }))}
          aria-label="Dismiss message"
        >
          &times;
        </button>
      </div>
    </section>
  );
}
