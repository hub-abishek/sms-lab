'use react';
import React from 'react';

const BLOG_POSTS = [
  {
    title: 'Environmental Testing Services | Water, Air, Soil & Sustainability Solutions',
    date: '5 Jul 2026',
    category: 'Environmental Testing',
    excerpt:
      'Protecting our planet and commercial compliance through modern analytical chemistry, stack emission isokinetic sampling, and sustainable laboratory practices.',
    author: 'SMS Labs Environmental Division',
    url: 'https://smsla.global/environmental-testing-protecting-our-planet-through-science-and-sustainable-solutions/',
  },
  {
    title: 'Energy Efficiency & Sustainability: How Businesses Can Reduce Costs and Improve Performance',
    date: '6 Jun 2026',
    category: 'Energy & Sustainability',
    excerpt:
      'Discover why modern energy auditing, thermal loss assessments, and efficiency benchmarking represent the smartest long-term investments for commercial facilities.',
    author: 'SMS Labs Engineering Advisory',
    url: 'https://smsla.global/energy-efficiency-the-smartest-investment-businesses-can-make-today/',
  },
  {
    title: 'Energy Crisis Solutions for Businesses | Energy & Sustainability Services by SMS Labs',
    date: '3 May 2026',
    category: 'Industry Solutions',
    excerpt:
      'Practical regulatory and testing frameworks to help commercial manufacturing plants navigate resource constraints, emission norms, and rising operational tariffs.',
    author: 'SMS Labs Technical Team',
    url: 'https://smsla.global/energy-crisis-solutions-sms-labs/',
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section" id="blog" aria-labelledby="blog-title">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-tag">Insights &amp; Research</span>
          <h2 className="section-title" id="blog-title">
            Latest Scientific News &amp; Technical Blogs
          </h2>
          <p className="section-subtitle">
            Stay informed with expert analysis, regulatory updates, testing methodologies, and
            scientific insights from SMS Labs specialists.
          </p>
        </div>

        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-category">{post.category}</span>
              </div>

              <h3 className="blog-title">
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h3>

              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-footer">
                <span className="blog-author">{post.author}</span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read Article &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
