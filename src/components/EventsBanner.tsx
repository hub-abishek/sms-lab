'use react';
import React from 'react';

const EVENTS = [
  {
    icon: '🍫',
    title: 'World Chocolate Day',
    date: '13th September 2026',
    desc: 'Confectionery Quality, Heavy Metals & Microbial Safety',
  },
  {
    icon: '🪔',
    title: 'Ganesh Chaturthi',
    date: '14th September 2026',
    desc: 'Festive Food Hygiene, Sweet Adulteration & Potable Water',
  },
  {
    icon: '🌿',
    title: 'National Ayurveda Day',
    date: '23rd September 2026',
    desc: 'Botanical Authentication, Pesticides & Heavy Metal Screen',
  },
];

export default function EventsBanner() {
  return (
    <section className="events-section" aria-label="Upcoming Quality and Scientific Observances">
      <div className="container">
        <div className="events-card">
          <div className="events-heading">
            <span className="badge-pill">QUALITY CALENDAR</span>
            <h3>National &amp; International Scientific Observances</h3>
          </div>

          <div className="events-grid">
            {EVENTS.map((event) => (
              <div className="event-item" key={event.title}>
                <span className="event-icon" aria-hidden="true">{event.icon}</span>
                <div className="event-details">
                  <strong>{event.title}</strong>
                  <p>
                    {event.date} &bull; {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
