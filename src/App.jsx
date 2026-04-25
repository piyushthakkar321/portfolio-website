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
          <h2>Get More Leads, Save Time &<br /><span className="highlight">Grow Faster</span> With AI Systems + Modern Websites</h2>
          <p>We help businesses automate customer support, capture leads, and build websites that turn visitors into paying clients.</p>
          <div className="buttons">
            <button className="btn-main" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Book Free Consultation →</button>
            <button className="btn-sec" onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}>See Our Work</button>
          </div>
          <div className="trust-line">
            Fast Delivery • Affordable Pricing • WhatsApp Support • Business-Focused Solutions
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
        <div className="stat-box"><h3>5+</h3><p>Projects Delivered</p></div>
        <div className="stat-box"><h3>10x</h3><p>Faster Processes Through Automation</p></div>
        <div className="stat-box"><h3>100%</h3><p>Client-Focused Approach</p></div>
        <div className="stat-box"><h3>3+</h3><p>AI Frameworks Mastered</p></div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-label">What we offer</div>
        <h2>Services That Grow Your Business</h2>
        <div className="section-sub">Practical solutions built for revenue, speed, and growth.</div>
        <div className="services-grid">
          <div className="service-card">
            <span className="s-icon">🤖</span>
            <h3>AI Chatbots</h3>
            <p>Automated support bots for websites, FAQs, bookings, and customer service.</p>
            <div className="s-price">From ₹8,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">📱</span>
            <h3>WhatsApp Automation</h3>
            <p>Capture leads, answer customers, send reminders, and automate WhatsApp conversations.</p>
            <div className="s-price">From ₹5,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">💻</span>
            <h3>Website Development</h3>
            <p>Fast, premium websites built to impress visitors and convert them into clients.</p>
            <div className="s-price">From ₹6,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">📈</span>
            <h3>Lead Generation Systems</h3>
            <p>Automated systems that collect leads directly into Google Sheets or CRM.</p>
            <div className="s-price">From ₹4,000</div>
          </div>
          <div className="service-card">
            <span className="s-icon">🧠</span>
            <h3>AI Agents</h3>
            <p>Custom AI systems using Gemini, MCP, ADK and modern tools.</p>
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
        <h2>Real Projects. Real Execution.</h2>
        <div className="section-sub">Built, tested and deployed solutions for modern businesses.</div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">WhatsApp Bot</div>
              <h3>WhatsApp AI Bot</h3>
              <p>Fully automated WhatsApp bot for lead collection, FAQ replies, and Google Sheets integration. Deployed on Render.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span><span className="tag">Flask</span>
              <span className="tag">Twilio</span><span className="tag">Google Sheets</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">AI Agent</div>
              <h3>Gemini ADK Agent</h3>
              <p>Serverless AI summarization agent built with Google ADK and deployed on Cloud Run.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span><span className="tag">Gemini</span>
              <span className="tag">Cloud Run</span><span className="tag">ADK</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">MCP Agent</div>
              <h3>MCP AI Agent</h3>
              <p>AI agent using Google ADK and Model Context Protocol to securely fetch and process external data.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span><span className="tag">ADK</span>
              <span className="tag">MCP</span><span className="tag">Gemini</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">Support Agent</div>
              <h3>Customer Support Agent</h3>
              <p>AI-powered customer support agent with fast responses using Groq AI inference.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span><span className="tag">Groq</span><span className="tag">Flask</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-top">
              <div className="p-badge">Healthcare AI</div>
              <h3>Dentist AI Assistant</h3>
              <p>AI dental clinic assistant with appointment handling and patient Q&A built with Streamlit.</p>
            </div>
            <div className="project-footer">
              <span className="tag">Python</span><span className="tag">Groq</span><span className="tag">Streamlit</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="section-label">Why choose us</div>
        <h2>Why Clients Choose Piyush Digital</h2>
        <div className="section-sub">We combine technical expertise with a business-first mindset.</div>
        <div className="why-grid">
          <div className="why-card"><h3>⚡ Fast Delivery</h3><p>Most projects completed quickly without delays.</p></div>
          <div className="why-card"><h3>🎯 Business Mindset</h3><p>We focus on revenue, not just design.</p></div>
          <div className="why-card"><h3>💬 Clear Communication</h3><p>Simple updates, honest timelines, no confusion.</p></div>
          <div className="why-card"><h3>🔒 Reliable Systems</h3><p>Production-ready tools deployed professionally.</p></div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="section-label">Get in touch</div>
            <h2>Ready To Get More Customers?</h2>
            <p>Tell us your goal and we'll recommend the best solution for your business.</p>
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
            <div className="fg"><label>Message</label><textarea placeholder="Tell me about your goal..."></textarea></div>
            <button className="submit">Send Message →</button>
          </div>
        </div>
      </div>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/91XXXXXXXXXX" className="whatsapp-btn" target="_blank" rel="noreferrer">💬</a>

      {/* FOOTER */}
      <footer>
        <p>Helping businesses grow with AI, websites & automation.</p>
        <p style={{marginTop: '8px'}}>© 2026 <span>Piyush Digital</span>. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
