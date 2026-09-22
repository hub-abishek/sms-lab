import React from 'react';
import TopContactBar from '@/components/TopContactBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AccreditationBanner from '@/components/AccreditationBanner';
import StatsCounter from '@/components/StatsCounter';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import InspectionSection from '@/components/InspectionSection';
import EventsBanner from '@/components/EventsBanner';
import BlogSection from '@/components/BlogSection';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import ContactQuoteForm from '@/components/ContactQuoteForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Top Contact & Location Bar */}
      <TopContactBar />

      {/* Sticky Main Navigation */}
      <Header />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* Hero Section with Live LIMS Mockup */}
        <Hero />

        {/* Major Accreditations & Recognitions Banner */}
        <AccreditationBanner />

        {/* Live Animated Statistics (14+ yrs, 250+ experts, 5000+ clients) */}
        <StatsCounter />

        {/* About SMS Labs & Pan-India Hubs */}
        <AboutSection />

        {/* Core Testing Services with Filter & Turnaround Estimator */}
        <ServicesSection />

        {/* Inspection Services & Audits (PSI, DUPRO, FRI) */}
        <InspectionSection />

        {/* National & International Scientific Observances */}
        <EventsBanner />

        {/* Latest Research & Technical Blogs */}
        <BlogSection />

        {/* Verified Client Testimonials */}
        <Testimonials />

        {/* Interactive FAQ Accordion */}
        <FaqSection />

        {/* Sample Submission & Quote Inquiry Form */}
        <ContactQuoteForm />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
