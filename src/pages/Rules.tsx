import React, { useEffect } from 'react';
import gsap from 'gsap';

const Rules: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.page-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.fromTo('.rule-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' });
  }, []);

  const ruleCategories = [
    {
      title: 'General Rules',
      rules: [
        { num: 'G1', title: 'Value of Life (NVL)', desc: 'You must value your life at all times. If you are cornered with no escape, you must surrender.' },
        { num: 'G2', title: 'Powergaming', desc: 'Performing unrealistic actions or forcing RP outcomes on others without giving them a chance to react.' },
        { num: 'G3', title: 'Metagaming', desc: 'Using OOC information (Discord, Stream) to influence IC actions.' }
      ]
    },
    {
      title: 'Combat & Interaction',
      rules: [
        { num: 'C1', title: 'RDM / VDM', desc: 'Killing or hitting players with vehicles without valid RP reason/initiation.' },
        { num: 'C2', title: 'Combat Logging', desc: 'Exiting the game during an active RP scenario or to avoid consequences.' },
        { num: 'C3', title: 'New Life Rule (NLR)', desc: 'Upon death, you forget the events leading to your demise and cannot return to the scene for 15 mins.' }
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <section className="hero mini-hero">
        <div className="hero-bg">
          <video
            src="/The Prime - GTA V Cinematic (NoPixel) - neutreN (1080p).mp4"
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h2 className="hero-subtitle">The Code</h2>
          <h1 className="hero-title">Server <span className="text-red">Rules</span></h1>
          <p className="hero-desc">Ignorance of the rules is not an excuse. Maintain the standard.</p>
        </div>
      </section>

      <section className="container" style={{ padding: '8rem 0' }}>
        {ruleCategories.map((cat, index) => (
          <div key={index} className="rule-category" style={{ marginBottom: '6rem' }}>
            <div className="section-header">
              <h2 className="hero-subtitle">Category {index + 1}</h2>
              <h1 className="section-title">{cat.title}</h1>
            </div>
            <div className="rules-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {cat.rules.map((rule) => (
                <div key={rule.num} className="rule-card glass-panel">
                  <span className="rule-num">{rule.num}</span>
                  <h3>{rule.title}</h3>
                  <p>{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="punishment-section glass-panel" style={{ marginTop: '10rem', padding: '4rem' }}>
          <div className="section-header text-center">
            <h2 className="hero-subtitle">Consequences</h2>
            <h1 className="section-title">Punishment <span className="text-red">Tiers</span></h1>
          </div>
          <div className="divine-grid">
            <div className="tier-box text-center">
              <h2 className="text-red">Tier 1</h2>
              <p>Warning / Kick</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Minor infractions, first offense.</span>
            </div>
            <div className="tier-box text-center">
              <h2 className="text-red">Tier 2</h2>
              <p>24h - 7d Ban</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Repeat offenses or disruptive behavior.</span>
            </div>
            <div className="tier-box text-center">
              <h2 className="text-red">Tier 3</h2>
              <p>Permanent Ban</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Severe rule breaks, cheating, or toxicity.</span>
            </div>
          </div>
        </div>

        <div className="faq-section" style={{ marginTop: '10rem' }}>
          <div className="section-header text-center">
            <h2 className="hero-subtitle">Clarifications</h2>
            <h1 className="section-title">Frequently Asked <span className="text-red">Questions</span></h1>
          </div>
          <div className="rules-list">
            {[
              { q: 'How do I report a rule breaker?', a: 'Use the /report command in-game or open a ticket on our Discord with video evidence.' },
              { q: 'Can I appeal a ban?', a: 'Yes, ban appeals can be submitted through our dedicated forum section after 48 hours.' },
              { q: 'Is streaming allowed?', a: 'Absolutely! We encourage streamers, but ensure you follow our stream-sniping protection rules.' }
            ].map((faq, i) => (
              <div key={i} className="faq-item glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--primary-red)', marginBottom: '0.5rem' }}>Q: {faq.q}</h3>
                <p>A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
