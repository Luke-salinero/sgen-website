import "./App.css";
import SgenDocs from "./components/SgenDocs";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <h2 className="about-title">
        <span> About</span>
        </h2>

        <p className="about-text">
          SGEN is a xxx.
        </p>

        <div className="about-grid">
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page">
      <div className="bg-grid" />
      <div className="bg-glow" />

      <main className="hero">
        <h1 className="title">
          Welcome to <span className="glint">SGEN</span>
        </h1>

        <p className="subtitle">INPUT HERE LIKE A ONE SENTENCE ELEVATOR PITCH FOR SGEN</p>
      </main>

      {/* ✅ About section replaces BinaryBox */}
      <About />

      <section className="docs">
        <div className="docs-inner">
          <SgenDocs />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <span className="footer-sep">•</span>
          <Link to="/terms" className="footer-link">Terms of Use</Link>
          <span className="footer-sep">•</span>
          <Link to="/licensing" className="footer-link">Licensing</Link>
        </div>
      </footer>
    </div>
  );
}