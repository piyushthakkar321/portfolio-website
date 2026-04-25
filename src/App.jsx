import "./App.css";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Piyush Digital</div>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="glow"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <div className="blink"></div> Available for new projects
          </div>
          <h2>We Build <span className="highlight">AI Systems</span> &<br />Websites That Grow Businesses</h2>
          <p>Helping brands automate work, generate leads, and build a strong online presence using cutting-edge AI technology.</p>
          <div className="buttons">
            <button className="btn-main" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Get Started →</button>
            <button className="btn-sec" onClick={() => document.getElementById('services').scrollIntoView({behavior:'smooth'})}>View Services</button>
          </div>
          <div className="tech-stack">
            <span className="tech-pill">🐍 Python</span>
            <span className="tech-pill">🌶️ Flask</span>
            <span className="tech-pill">📱 Twilio</span>
            <span className="tech-pill">🤖 Gemini</span>
            <span className="tech-pill">⚡ Groq</span>
            <span className="tech-pill">☁️ Google Cloud</span>
            <span className="tech-pill">🚀 Render</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats" id="stats">
        <div className="stat-box"><h3>5+</h3><p>Projects Built</p></div>
        <div className="stat-box"><h3>10x</h3><p>Faster Automation</p></div>
        <div className="stat-box"><h3>100%</h3><p>Client Focused</p></div>
        <div className="stat-box"><h3>3+</h3><p>AI Frameworks</p></div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-label">What we offer</div>
        <h2>Our Services</h2>
        <div className="section-sub">End-to-end AI solutions built fast and deployed reliably.</div>
        <div className="services-grid">
          <div className="service-card">
            <span className="s-icon">🤖</span>
            <h3>AI Chatbots</h3>
            <p>Custom AI-powered chatbots using Gemini, Groq, or Claude for your website or app.</p>
            <div className="s-price">From ₹8,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">📱</span>
            <h3>WhatsApp Automation</h3>
            <p>Automated WhatsApp bots for lead collection, FAQ handling, and customer support.</p>
            <div className="s-price">From ₹5,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">💻</span>
            <h3>Website Development</h3>
            <p>Clean, fast web apps and APIs built with Flask and React, deployed on cloud platforms.</p>
            <div className="s-price">From ₹6,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">📈</span>
            <h3>Lead Generation</h3>
            <p>Automated lead capture systems that collect and save leads directly to Google Sheets or CRM.</p>
            <div className="s-price">From ₹4,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">🧠</span>
            <h3>AI Agents</h3>
            <p>Intelligent autonomous agents using Google ADK, MCP, and modern LLM frameworks.</p>
            <div className="s-price">From ₹12,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">⚙️</span>
            <h3>Automation Tools</h3>
            <p>Python automation that saves hours of manual work — data processing, reporting, and more.</p>
            <div className="s-price">From ₹3,000</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-label">What I've built</div>
        <h2>Projects</h2>
        <div className="section-sub">Real projects shipped and deployed.</div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">WhatsApp Bot</div>
              <h3>WhatsApp AI Bot</h3>
              <p>Fully automated WhatsApp bot for lead collection, FAQ replies, and Google Sheets integration. Deployed on Render.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span>
              <span className="tag">Flask</span>
              <span className="tag">Twilio</span>
              <span className="tag">Google Sheets</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">AI Agent</div>
              <h3>Gemini ADK Agent</h3>
              <p>Serverless AI summarization agent built with Google ADK and deployed on Cloud Run.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span>
              <span className="tag">Gemini</span>
              <span className="tag">Cloud Run</span>
              <span className="tag">ADK</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">MCP Agent</div>
              <h3>MCP AI Agent</h3>
              <p>AI agent using Google ADK and Model Context Protocol to securely fetch and process external data.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span>
              <span className="tag">ADK</span>
              <span className="tag">MCP</span>
              <span className="tag">Gemini</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">Support Agent</div>
              <h3>Customer Support Agent</h3>
              <p>AI-powered customer support agent with fast responses using Groq AI inference.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span>
              <span className="tag">Groq</span>
              <span className="tag">Flask</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">Healthcare AI</div>
              <h3>Dentist AI Assistant</h3>
              <p>AI dental clinic assistant with appointment handling and patient Q&A built with Streamlit.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span>
              <span className="tag">Groq</span>
              <span className="tag">Streamlit</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="section-label">Why choose us</div>
        <h2>Why Businesses Choose Us</h2>
        <div className="section-sub">We combine technical expertise with a business-first mindset.</div>
        <div className="why-grid">
          <div className="why-card"><h3>⚡ Fast Delivery</h3><p>Most projects delivered within 3-7 days. No waiting, no delays.</p></div>
          <div className="why-card"><h3>🎯 Business Mindset</h3><p>We build solutions that actually make you money, not just look good.</p></div>
          <div className="why-card"><h3>💬 Clear Communication</h3><p>Daily updates, transparent pricing, and no hidden surprises.</p></div>
          <div className="why-card"><h3>🔒 Secure & Reliable</h3><p>Production-ready code deployed on reliable cloud infrastructure.</p></div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="section-label">Get in touch</div>
            <h2>Ready To Grow?</h2>
            <p>Have a project in mind? Send me a message and I'll get back to you within 24 hours.</p>
            <div className="contact-item">
              <div className="c-icon">📍</div>
              <div><div className="c-label">Location</div><div className="c-value">India 🇮🇳</div></div>
            </div>
            <div className="contact-item">
              <div className="c-icon">📧</div>
              <div><div className="c-label">Email</div><div className="c-value">yourmail@gmail.com</div></div>
            </div>
            <div className="contact-item">
              <div className="c-icon">💬</div>
              <div><div className="c-label">WhatsApp</div><div className="c-value">+91XXXXXXXXXX</div></div>
            </div>
            <div className="contact-item">
              <div className="c-icon">🐙</div>
              <div><div className="c-label">GitHub</div><div className="c-value">github.com/piyushthakkar321</div></div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-row">
              <div className="fg"><label>Name</label><input type="text" placeholder="Your name" /></div>
              <div className="fg"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
            </div>
            <div className="fg">
              <label>Service needed</label>
              <select>
                <option>WhatsApp Bot</option>
                <option>AI Chatbot</option>
                <option>Website Development</option>
                <option>Lead Generation</option>
                <option>AI Agent</option>
                <option>Automation Tool</option>
              </select>
            </div>
            <div className="fg"><label>Budget</label><input type="text" placeholder="e.g. ₹5,000 - ₹10,000" /></div>
            <div className="fg"><label>Message</label><textarea placeholder="Tell me about your project..."></textarea></div>
            <button className="submit">Send Message →</button>
          </div>
        </div>
      </div>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/91XXXXXXXXXX" className="whatsapp-btn" target="_blank" rel="noreferrer">💬</a>

      {/* FOOTER */}
      <footer>© 2026 <span>Piyush Digital</span>. All rights reserved.</footer>

    </div>
  );
}

export default App;
