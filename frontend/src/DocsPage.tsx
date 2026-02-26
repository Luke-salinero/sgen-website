// src/DocsPage.tsx
import "./App.css";
import SgenDocs from "./components/SgenDocs";

export default function DocsPage() {
  return (
    <div className="page">
      <div className="bg-grid" />
      <div className="bg-glow" />

      <section className="docs" style={{ paddingTop: 20 }}>
        <div className="docs-inner">
          <SgenDocs />
        </div>
      </section>
    </div>
  );
}
