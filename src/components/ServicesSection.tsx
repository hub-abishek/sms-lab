'use client';

import React, { useState } from 'react';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  badge: string;
  colorClass: string;
  desc: string;
  parameters: string[];
  standards: string[];
  equipment: string[];
  url: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'food',
    category: 'food',
    title: 'Food Testing & Nutritional Analysis',
    badge: 'FSSAI Compliant',
    colorClass: 'bg-emerald',
    desc: 'Microbiology, adulteration screening, nutritional labeling, pesticide residues, heavy metals, allergens, shelf-life validation, and full FSSAI statutory compliance.',
    parameters: [
      'Nutritional profiling & label verification',
      'Pesticide residues (organophosphates, organochlorines)',
      'Aflatoxins & mycotoxins screening',
      'Heavy metals (Lead, Cadmium, Arsenic, Mercury)',
      'Accelerated shelf-life stability testing',
    ],
    standards: ['FSSAI Regulations', 'ISO/IEC 17025', 'AOAC Official Methods'],
    equipment: ['LC-MS/MS', 'GC-MS/MS', 'ICP-MS', 'HPLC'],
    url: 'https://smsla.global/service/food-testing/',
  },
  {
    id: 'water',
    category: 'water',
    title: 'Water & Industrial Effluent Testing',
    badge: 'IS 10500 Certified',
    colorClass: 'bg-blue',
    desc: 'Comprehensive drinking, borewell, packaged mineral, surface, and industrial effluent water testing covering physical, chemical, pesticide, and microbial parameters.',
    parameters: [
      'IS 10500:2012 Drinking water complete suite',
      'Packaged drinking water (IS 14543) & Natural mineral water (IS 13428)',
      'Heavy metals & pesticide residue detection',
      'ETP / STP treated effluent compliance',
      'Cooling tower & boiler water characterization',
    ],
    standards: ['IS 10500', 'IS 14543', 'CPCB General Discharge Standards'],
    equipment: ['ICP-OES', 'TOC Analyzer', 'Ion Chromatograph', 'UV-Vis Spectrophotometer'],
    url: 'https://smsla.global/service/water-testing/',
  },
  {
    id: 'environmental',
    category: 'environmental',
    title: 'Environmental & Stack Emission Monitoring',
    badge: 'CPCB / SPCB Approved',
    colorClass: 'bg-indigo',
    desc: 'Ambient air quality monitoring, stack emission analysis, noise level surveys, industrial hygiene assessments, and statutory environmental compliance audits.',
    parameters: [
      'PM2.5, PM10, SO2, NOx, CO, Ozone ambient air monitoring',
      'Stack emission monitoring (isokinetic sampling)',
      'Ambient noise & DG set acoustic testing',
      'Indoor air quality & workplace occupational hygiene',
      'Illumination & ventilation surveys',
    ],
    standards: ['CPCB National Ambient Air Quality Standards', 'MoEFCC Guidelines'],
    equipment: ['High Volume Samplers', 'Stack Monitoring Kit', 'Sound Level Meter Type 1'],
    url: 'https://smsla.global/service/environmental-testing/',
  },
  {
    id: 'soil',
    category: 'soil',
    title: 'Soil, Sludge & Solid Waste Testing',
    badge: 'Agri & Construction',
    colorClass: 'bg-amber',
    desc: 'Nutrient profiling (NPK), soil fertility analysis, organic carbon, heavy metals, hazardous waste screening, and sludge characterization for agriculture and construction.',
    parameters: [
      'Primary, secondary & micro-nutrient profiling (N, P, K, Ca, Mg, S, Zn, Fe, B)',
      'Electrical conductivity, pH, and organic carbon',
      'Heavy metals toxicity characterization (TCLP)',
      'Industrial sludge & hazardous waste classification',
      'Compost and bio-fertilizer quality testing',
    ],
    standards: ['Fertilizer Control Order (FCO)', 'Hazardous Waste Management Rules'],
    equipment: ['Flame Photometer', 'Atomic Absorption Spectrometer', 'Kjeldahl Unit'],
    url: 'https://smsla.global/service/soil-testing/',
  },
  {
    id: 'seafood',
    category: 'seafood',
    title: 'Seafood & Marine Export Testing',
    badge: 'EIC / MPEDA Standards',
    colorClass: 'bg-purple',
    desc: 'Rapid microbiological screening, heavy metals, banned antibiotic residues (chloramphenicol, nitrofuran metabolites), histamine, and export compliance testing.',
    parameters: [
      'Antibiotic residues (Chloramphenicol, Nitrofurans, Sulfonamides)',
      'Heavy metals (Cadmium, Lead, Mercury, Arsenic)',
      'Histamine & total volatile basic nitrogen (TVBN)',
      'Pathogens (Vibrio cholerae, Vibrio parahaemolyticus, Salmonella)',
      'Polycyclic Aromatic Hydrocarbons (PAHs)',
    ],
    standards: ['Export Inspection Council (EIC)', 'MPEDA Regulations', 'EU / USFDA Norms'],
    equipment: ['Triple Quadrupole LC-MS/MS', 'ICP-MS', 'Fluorescence HPLC'],
    url: 'https://smsla.global/service/seafood-testing/',
  },
  {
    id: 'microbiology',
    category: 'microbiology',
    title: 'Microbiology & Pathogen Detection',
    badge: 'Class 10,000 Cleanrooms',
    colorClass: 'bg-rose',
    desc: 'Rapid detection of foodborne pathogens, Total Plate Count (TPC), Coliforms, yeast & mould, environmental air monitoring, and cleanroom surface swabs.',
    parameters: [
      'Pathogen isolation (Salmonella, Listeria monocytogenes, E. coli O157:H7)',
      'Staphylococcus aureus & Bacillus cereus enterotoxins',
      'Total Viable Count (TVC) & Coliform counts',
      'Air settle plate & cleanroom bioburden monitoring',
      'Surface hygiene & hand swab monitoring',
    ],
    standards: ['ISO 11133', 'IS 5401 / 5402 / 5887', 'BAM / USFDA'],
    equipment: ['Biosafety Cabinets Class II', 'Automated Colony Counters', 'BOD Incubators'],
    url: 'https://smsla.global/service/microbiology-testing/',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All Services' },
  { key: 'food', label: 'Food & Nutrition' },
  { key: 'water', label: 'Water & Effluents' },
  { key: 'environmental', label: 'Environmental & Stack' },
  { key: 'soil', label: 'Soil & Waste' },
  { key: 'seafood', label: 'Seafood & Marine' },
  { key: 'microbiology', label: 'Microbiology' },
];

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Quick Turnaround Estimator State
  const [matrix, setMatrix] = useState('Drinking Water');
  const [tier, setTier] = useState('Standard (3-5 Days)');
  const [sampleCount, setSampleCount] = useState(1);

  const filteredServices = SERVICES.filter((s) => {
    const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.parameters.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section className="features-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-tag">Core Specializations</span>
          <h2 className="section-title" id="services-title">
            Explore Our Analytical Testing Services
          </h2>
          <p className="section-subtitle">
            Delivering precision analytical chemistry and biological testing services across every
            critical industry domain with ISO/IEC 17025 accredited methodology.
          </p>
        </div>

        {/* Filter Pills & Live Search */}
        <div className="services-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`filter-pill ${selectedCategory === cat.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ maxWidth: 460, margin: '0 auto 3rem auto', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search test parameters (e.g. Pesticides, IS 10500, Salmonella)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1.25rem 0.75rem 2.75rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              fontSize: '0.92rem',
              boxShadow: 'var(--shadow-sm)',
            }}
            aria-label="Filter testing services by keyword"
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
            }}
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                color: 'var(--text-muted)',
                fontSize: '1.1rem',
                cursor: 'pointer',
              }}
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>

        {/* Services Grid */}
        <div className="features-grid">
          {filteredServices.map((service) => (
            <div className="feature-card" key={service.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className={`feature-icon-wrapper ${service.colorClass}`}>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {service.id === 'food' && (
                      <>
                        <path d="M12 2a9 9 0 0 1 9 9v1a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-1a9 9 0 0 1 9-9z" />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </>
                    )}
                    {service.id === 'water' && (
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    )}
                    {service.id === 'environmental' && (
                      <path d="M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4 4 4 0 0 0-3-3.87 5 5 0 0 0-9.8-1.74A4 4 0 0 0 3 15z" />
                    )}
                    {service.id === 'soil' && (
                      <>
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </>
                    )}
                    {service.id === 'seafood' && (
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    )}
                    {service.id === 'microbiology' && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </>
                    )}
                  </svg>
                </div>
                <span className="badge-sm">{service.badge}</span>
              </div>

              <h3 className="feature-title">{service.title}</h3>
              <p className="feature-desc">{service.desc}</p>

              <div className="feature-list">
                {service.parameters.slice(0, 3).map((param) => (
                  <div key={param} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                    <span>{param}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  type="button"
                  className="service-card-link"
                  onClick={() => setActiveModalService(service)}
                  style={{ background: 'transparent' }}
                >
                  <span>View Scope &amp; Equipment</span> &rarr;
                </button>
                <a
                  href="#contact"
                  className="btn btn-outline btn-sm"
                  style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
                >
                  Book Test
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Turnaround & Quote Estimator Widget */}
        <div className="estimator-container">
          <div className="estimator-grid">
            <div className="estimator-controls">
              <span className="section-tag">Instant Calculation</span>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.25rem' }}>
                Turnaround &amp; Sample Estimator
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Get an instant estimated laboratory testing timeline for your batch and proceed
                directly to quote booking.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Sample Matrix
                  </label>
                  <select
                    value={matrix}
                    onChange={(e) => setMatrix(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                    }}
                  >
                    <option value="Drinking Water">Drinking Water (IS 10500)</option>
                    <option value="Packaged Food & Spices">Packaged Food &amp; Spices</option>
                    <option value="Industrial Effluent (ETP)">Industrial Effluent (ETP)</option>
                    <option value="Seafood Export Batch">Seafood Export Batch</option>
                    <option value="Soil & Sludge Waste">Soil &amp; Sludge Waste</option>
                    <option value="Microbiology Pathogen Screen">Microbiology Pathogen Screen</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Service Tier
                  </label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem',
                    }}
                  >
                    <option value="Standard (3-5 Days)">Standard (3-5 Days)</option>
                    <option value="Priority Fast-Track (48h)">Priority Fast-Track (48 Hours)</option>
                    <option value="Urgent Express (24h)">Urgent Express (24 Hours)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Number of Samples: <strong>{sampleCount}</strong>
                </label>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={sampleCount}
                  onChange={(e) => setSampleCount(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: 'var(--primary)' }}
                />
              </div>
            </div>

            <div className="estimator-result">
              <span className="badge-sm" style={{ marginBottom: '0.75rem' }}>ESTIMATED TIMELINE</span>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.1 }}>
                {tier.includes('24')
                  ? '24 - 36 Hours'
                  : tier.includes('48')
                  ? '48 - 72 Hours'
                  : '3 - 5 Business Days'}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0.65rem 0 1.25rem 0' }}>
                Batch Size: <strong>{sampleCount} sample(s)</strong> &bull; Matrix: <strong>{matrix}</strong>
                <br />
                Includes NABL-accredited digital Certificate of Analysis (CoA).
              </p>
              <a href="#contact" className="btn btn-primary btn-block">
                Lock in This Quote &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Modal for Service Details */}
        {activeModalService && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(8, 14, 24, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setActiveModalService(null)}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                maxWidth: 620,
                width: '100%',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-xl)',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'transparent',
                  color: 'var(--text-muted)',
                  fontSize: '1.5rem',
                  lineHeight: 1,
                  cursor: 'pointer',
                }}
                aria-label="Close details"
              >
                &times;
              </button>

              <span className="badge-sm" style={{ marginBottom: '0.75rem' }}>
                {activeModalService.badge}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                {activeModalService.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {activeModalService.desc}
              </p>

              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Tested Parameters</h4>
              <ul style={{ marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {activeModalService.parameters.map((p) => (
                  <li key={p} style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span> {p}
                  </li>
                ))}
              </ul>

              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Analytical Equipment</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {activeModalService.equipment.map((eq) => (
                  <span key={eq} className="cap-pill" style={{ fontSize: '0.78rem' }}>
                    🔬 {eq}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={activeModalService.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Visit Official Page
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setActiveModalService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
