const STUDENT_IMG =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80";

const BARS = [34, 52, 28, 62, 42, 74, 38, 58, 30, 68, 46, 80];

function PriceCard() {
  return (
    <div className="price-card">
      <div className="price-row">
        <span className="old-price">$16.48</span>
        <span className="new-price">$6.48</span>
      </div>
      <button className="learn-link" type="button">
        Learn More <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}

function ToolIcon({ children, className = "", label }) {
  return (
    <div className={`tool-icon ${className}`} title={label} aria-label={label}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="page">
      {/* Abstract background shapes from the Figma frame */}
      <div className="bg-blob bg-blob-pink" aria-hidden="true" />
      <div className="bg-blob bg-blob-lilac" aria-hidden="true" />
      <div className="bg-blob bg-blob-blue" aria-hidden="true" />
      <div className="bg-blob bg-blob-navy" aria-hidden="true" />

      <div className="shell">
        {/* Two small pricing cards peeking above the pink card */}
        <div className="top-pricing">
          <PriceCard />
          <PriceCard />
        </div>

        <div className="stage">
          <section className="hero">
            <header className="topbar">
              <a className="brand" href="#">BrandName</a>
              <nav className="nav" aria-label="Primary">
                <a href="#" className="active">Home</a>
                <a href="#">Product</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
              </nav>
              <div className="top-actions">
                <a className="login" href="#">Login</a>
                <a className="join-top" href="#">
                  JOIN US <span aria-hidden="true">→</span>
                </a>
              </div>
            </header>

            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">Join Us</p>
                <h1>
                  25K+ STUDENTS
                  <br />
                  TRUST US
                </h1>
                <p className="hero-text">
                  Every day brings with it a fresh set of
                  <br />
                  learning possibilities.
                </p>
                <div className="hero-actions">
                  <a className="btn-primary" href="#">Join Us</a>
                  <a className="btn-outline" href="#">Learn More</a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="orange-blob" aria-hidden="true" />
                <div className="student-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={STUDENT_IMG} alt="Smiling student holding books" />
                  <div className="books" aria-hidden="true">
                    <span className="book book-dark" />
                    <span className="book book-orange" />
                  </div>
                </div>

                <div className="chart-card" aria-label="2020 chart">
                  <span className="chart-year">2020</span>
                  <div className="bars">
                    {BARS.map((h, i) => (
                      <span key={i} className="bar" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>

                <div className="download-badge" aria-hidden="true">↓</div>

                <div className="stat-card">
                  <p className="stat-title">Global Statistic</p>
                  <div className="donut-wrap">
                    <div className="donut" aria-hidden="true">
                      <span>23<br /><small>Wins</small></span>
                    </div>
                    <ul className="donut-legend">
                      <li><i className="dot dot-pink" /> 60%</li>
                      <li><i className="dot dot-orange" /> 25%</li>
                      <li><i className="dot dot-purple" /> 15%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vertical tools pill on the right edge — Figma / HTML / CSS / Bootstrap / JS */}
          <aside className="side-tools" aria-label="Tools">
            <ToolIcon label="Figma">
              <span className="figma-dots"><i /><i /><i /><i /><i /></span>
            </ToolIcon>
            <ToolIcon className="tool-html" label="HTML5">5</ToolIcon>
            <ToolIcon className="tool-css" label="CSS3">3</ToolIcon>
            <ToolIcon className="tool-boot" label="Bootstrap">B</ToolIcon>
            <ToolIcon className="tool-js" label="JavaScript">JS</ToolIcon>
          </aside>
        </div>

        {/* Wavy bottom edge of the pink card */}
        <svg className="wave" viewBox="0 0 1100 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,55 C240,10 430,105 690,70 C880,42 1000,18 1100,28 L1100,110 L0,110 Z" />
        </svg>

        <section className="courses-head">
          <p className="practice">Practice Advice</p>
          <h2>Most Popular Courses</h2>
        </section>

        <p className="slate-note">Slate helps you see how many more days you need to work to reach your financial goal.</p>
      </div>
    </main>
  );
}
