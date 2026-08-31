import React, { useState } from "react";

const PHONE = "+923296649407";
const DISPLAY_PHONE = "+92 329 6649407";
const EMAIL = "muhammadmudasir5223@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/muhammad-mudasir-785340415";

const services = [
  {
    icon: "⌕",
    title: "Real Estate Lead Generation",
    text: "Targeted prospect research and lead lists built around your market, property type and acquisition criteria.",
    price: "$15",
    unit: "100 leads"
  },
  {
    icon: "☎",
    title: "Cold Calling",
    text: "Professional outbound calls to qualify prospects, handle first-level objections and identify real opportunities.",
    price: "$30",
    unit: "100 calls"
  },
  {
    icon: "✓",
    title: "Appointment Setting",
    text: "Qualified conversations turned into booked appointments so you can focus on closing and building relationships.",
    price: "$100",
    unit: "3 appointments"
  }
];

const skills = [
  "Skip Tracing",
  "Motivated Seller Leads",
  "Buyer Leads",
  "Seller Leads",
  "Absentee Owners",
  "FSBO Leads",
  "Expired Listings",
  "Vacant Property Leads",
  "Mobile Home Parks",
  "RV Parks",
  "Fix & Flip",
  "Single-Family Homes",
  "Multi-Family Homes",
  "Self Storage",
  "Vacant Land",
  "Commercial Real Estate",
  "Cold Calling",
  "Lead Qualification",
  "Appointment Setting",
  "CRM & Google Sheets",
  "Market Research",
  "Follow-up"
];

function Icon({ children }) {
  return <span className="service-icon" aria-hidden="true">{children}</span>;
}

function App() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("");

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send.");

      setStatus("Thanks! Your message has been sent. I'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      setStatus("The form could not send right now. Please use WhatsApp or email below.");
    }
  };

  return (
    <div className="site">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Real Estate Virtual Assistant</span>
          <span>Available for remote projects</span>
        </div>
      </div>

      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
            <span className="brand-mark">M</span>
            <span>Mudasir<span className="brand-dot">.</span></span>
          </a>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href={`https://wa.me/${PHONE.replace("+","")}`} target="_blank" rel="noreferrer">Let's Talk ↗</a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="pulse"></span> Helping real estate professionals find & qualify opportunities</div>
              <h1>More leads.<br /><span>Better conversations.</span><br />More appointments.</h1>
              <p className="hero-text">
                I’m <strong>Muhammad Mudasir</strong>, a Real Estate Virtual Assistant with <strong>2+ years of experience</strong> helping investors, agents, brokers, wholesalers and real estate businesses with buyer and seller lead generation, cold calling and appointment setting.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#pricing">View Services & Pricing <span>→</span></a>
                <a className="btn btn-secondary" href={`https://wa.me/${PHONE.replace("+","")}`} target="_blank" rel="noreferrer">WhatsApp Me <span>↗</span></a>
              </div>
              <div className="trust-row">
                <div><strong>2+</strong><span>Years Experience</span></div>
                <div><strong>3</strong><span>Core Services</span></div>
                <div><strong>24/7</strong><span>Remote Support</span></div>
              </div>
            </div>

            <div className="hero-card-wrap">
              <div className="hero-card">
                <div className="card-top">
                  <span className="mini-label">REAL ESTATE VA</span>
                  <span className="available"><i></i> Available</span>
                </div>
                <div className="city-art">
                  <div className="sun"></div>
                  <div className="building b1"></div>
                  <div className="building b2"></div>
                  <div className="building b3"></div>
                  <div className="building b4"></div>
                  <div className="house">
                    <div className="roof"></div>
                    <div className="home-body"><span></span><span></span></div>
                  </div>
                  <div className="road"></div>
                </div>
                <div className="card-bottom">
                  <div>
                    <span className="small">FOCUS</span>
                    <strong>Leads → Calls → Appointments</strong>
                  </div>
                  <div className="round-arrow">↗</div>
                </div>
              </div>
              <div className="float-chip chip-one">✓ Qualified Leads</div>
              <div className="float-chip chip-two">☎ Cold Calling</div>
              <div className="float-chip chip-three">★ Appointment Setting</div>
            </div>
          </div>
        </section>

        <section className="ticker">
          <div className="ticker-track">
            <span>LEAD GENERATION</span><b>✦</b><span>COLD CALLING</span><b>✦</b><span>APPOINTMENT SETTING</span><b>✦</b>
            <span>REAL ESTATE VA</span><b>✦</b><span>LEAD QUALIFICATION</span><b>✦</b>
            <span>LEAD GENERATION</span><b>✦</b><span>COLD CALLING</span><b>✦</b>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container two-col">
            <div>
              <p className="section-kicker">01 — ABOUT ME</p>
              <h2>Your extra pair of hands in the real estate business.</h2>
            </div>
            <div className="about-text">
              <p>
                I help real estate investors, agents and small teams keep their pipeline moving. From finding prospects to making the first call and setting qualified appointments, I handle the repetitive work with a clear, organized process.
              </p>
              <p>
                My goal is simple: give you clean data, professional outreach and conversations worth following up on.
              </p>
              <a className="text-link" href={`mailto:${EMAIL}`}>Work with me <span>→</span></a>
            </div>
          </div>
          <div className="container audience-strip">
            <div>
              <p className="section-kicker">WHO I WORK WITH</p>
              <h3>Support for the people behind the deal.</h3>
            </div>
            <div className="audience-tags">
              <span>Real Estate Investors</span>
              <span>Real Estate Agents</span>
              <span>Brokers</span>
              <span>Wholesalers</span>
              <span>Business Owners</span>
              <span>Real Estate Companies</span>
              <span>Property Buyers</span>
              <span>Property Sellers</span>
            </div>
          </div>
        </section>

        <section className="section niches">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">PROPERTY TYPES</p>
                <h2>Lead campaigns across multiple real estate niches.</h2>
              </div>
              <p className="section-intro">Tell me your target market and property criteria. I can organize campaigns around the niche that matters to your business.</p>
            </div>
            <div className="niche-grid">
              {[
                ["01", "Mobile Homes & Parks", "Mobile home owners, parks and related investment opportunities."],
                ["02", "RV Parks", "RV park owners, buyers, sellers and investment prospects."],
                ["03", "Fix & Flip", "Properties and owners aligned with your acquisition strategy."],
                ["04", "Single & Multi-Family", "Single-family, duplex, triplex, fourplex and larger multifamily opportunities."],
                ["05", "Self Storage", "Self-storage owners, properties and acquisition prospects."],
                ["06", "Vacant Land", "Landowners and vacant parcels matched to your criteria."],
                ["07", "Commercial", "Commercial property owners and business-related real estate prospects."],
                ["08", "Buyer & Seller Leads", "Both sides of the market, depending on your campaign goal."]
              ].map(([num, title, text]) => (
                <article className="niche-card" key={title}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">02 — SERVICES</p>
                <h2>Built around your pipeline.</h2>
              </div>
              <p className="section-intro">Choose one service or combine them into a simple lead-to-appointment workflow.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className={`service-card card-${index + 1}`} key={service.title}>
                  <Icon>{service.icon}</Icon>
                  <div className="service-number">0{index + 1}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-price">
                    <strong>{service.price}</strong>
                    <span>/ {service.unit}</span>
                  </div>
                  <a href="#contact" onClick={() => setForm({ ...form, service: service.title })}>Get started <span>→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">03 — PROCESS</p>
                <h2>A straightforward system.</h2>
              </div>
            </div>
            <div className="process-grid">
              {[
                ["01", "Understand", "You share your market, ideal lead and campaign goals."],
                ["02", "Research", "I build and organize a targeted prospect list based on your criteria."],
                ["03", "Reach Out", "I contact prospects professionally and record useful call outcomes."],
                ["04", "Qualify & Book", "Interested prospects are qualified and appointments are scheduled."],
              ].map(([num, title, text]) => (
                <div className="process-item" key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills">
          <div className="container">
            <p className="section-kicker">04 — SKILLS & SPECIALTIES</p>
            <h2>Flexible support for real estate teams.</h2>
            <div className="skill-cloud">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <div className="container">
            <div className="pricing-heading">
              <div>
                <p className="section-kicker">05 — SIMPLE PRICING</p>
                <h2>Start small. Scale when it works.</h2>
              </div>
              <p>Clear packages with no confusing pricing. Need a custom campaign? Contact me for a tailored quote.</p>
            </div>
            <div className="pricing-grid">
              <article className="price-card">
                <span className="price-label">LEAD GENERATION</span>
                <div className="price">$15</div>
                <p>100 targeted leads</p>
                <ul><li>Targeted prospect research</li><li>Organized lead list</li><li>Campaign-specific criteria</li></ul>
                <a href="#contact">Order / Ask a Question →</a>
              </article>
              <article className="price-card featured">
                <span className="popular">MOST REQUESTED</span>
                <span className="price-label">COLD CALLING</span>
                <div className="price">$30</div>
                <p>100 outbound calls</p>
                <ul><li>Professional call outreach</li><li>Lead qualification</li><li>Call outcome tracking</li></ul>
                <a href="#contact">Order / Ask a Question →</a>
              </article>
              <article className="price-card">
                <span className="price-label">APPOINTMENT SETTING</span>
                <div className="price">$100</div>
                <p>3 qualified appointments</p>
                <ul><li>Prospect follow-up</li><li>Qualification conversations</li><li>Calendar-ready appointments</li></ul>
                <a href="#contact">Order / Ask a Question →</a>
              </article>
            </div>
            <div className="custom-banner">
              <div><strong>Need a bigger campaign?</strong><span>Tell me your market, lead type and monthly target.</span></div>
              <a href={`mailto:${EMAIL}?subject=Custom%20Real%20Estate%20VA%20Campaign`}>Request custom quote →</a>
            </div>
          </div>
        </section>

        <section className="section why">
          <div className="container two-col why-grid">
            <div>
              <p className="section-kicker">06 — WHY MUDASIR</p>
              <h2>Professional work without the agency overhead.</h2>
            </div>
            <div className="why-list">
              <div><span>01</span><div><h3>Clear communication</h3><p>Fast updates, organized information and a process you can follow.</p></div></div>
              <div><span>02</span><div><h3>Focused on your criteria</h3><p>Your market, your lead type and your campaign rules come first.</p></div></div>
              <div><span>03</span><div><h3>Action-oriented support</h3><p>The goal is not just a list of names — it is moving prospects toward conversations.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section review-note">
          <div className="container">
            <div className="review-heading">
              <div>
                <p className="section-kicker">CLIENT FEEDBACK</p>
                <h2>Built for long-term client relationships.</h2>
              </div>
              <p>Verified testimonials are the strongest proof. Add your real client reviews here as you collect permission to publish them.</p>
            </div>
            <div className="review-grid">
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>“[Muhammad did a great job with our lead generation campaign. The leads were well organized, relevant to our criteria, and delivered on time. His communication was excellent throughout the project. I would definitely work with him again.]”</p>
                <strong>Verified Client</strong>
                <span>Real Estate Investor</span>
              </article>
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>“[I hired  for skip tracing and cold calling, and he delivered exactly what I needed. He followed our requirements carefully and kept everything organized in Google Sheets. Very professional and easy to work with]”</p>
                <strong>Verified Client</strong>
                <span>Real Estate Professional</span>
              </article>
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>“[He was reliable, responsive, and professional from start to finish. He helped us find potential buyer and seller leads and also handled follow-ups. His attention to detail made the whole process much easier for us]”</p>
                <strong>Verified Client</strong>
                <span>Property Buyer / Seller</span>
              </article>
            </div>
            <div className="review-note-small">Tip: replace these placeholders with genuine reviews and real client names/roles only after receiving permission to publish them.</div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="section-kicker">07 — LET'S WORK</p>
              <h2>Have leads in mind? Let's talk.</h2>
              <p>Tell me what you're looking for and I'll help you choose the right service.</p>
              <div className="contact-links">
                <a href={`https://wa.me/${PHONE.replace("+","")}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{DISPLAY_PHONE}</strong> ↗</a>
                <a href={`mailto:${EMAIL}`}><span>Email</span><strong>{EMAIL}</strong> ↗</a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Muhammad Mudasir</strong> ↗</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Full Name<input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required /></label>
                <label>Email<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></label>
              </div>
              <div className="form-row">
                <label>Phone / WhatsApp<input name="phone" value={form.phone} onChange={handleChange} placeholder="+1..." /></label>
                <label>Service<select name="service" value={form.service} onChange={handleChange} required><option value="">Select a service</option><option>Lead Generation</option><option>Cold Calling</option><option>Appointment Setting</option><option>Custom Campaign</option></select></label>
              </div>
              <label>Message<textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me your target market, lead type, quantity and timeline..." rows="5" required></textarea></label>
              <button className="btn btn-primary submit-btn" type="submit">Send Inquiry <span>→</span></button>
              {status && <p className="form-status">{status}</p>}
              <p className="form-small">Your message is sent to the email address configured in the project's server environment.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div><a className="brand" href="#home"><span className="brand-mark">M</span><span>Mudasir<span className="brand-dot">.</span></span></a><p>Real Estate Virtual Assistant</p></div>
          <div className="footer-right"><span>© {new Date().getFullYear()} Muhammad Mudasir</span><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;