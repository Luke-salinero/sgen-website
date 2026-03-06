// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import DocsLayout from "./docs/DocsLayout";
import AppLayout from "./AppLayout";  
import ScrollToTop from "./ScrollToTop";

// MDX pages...
import Overview from "./docs/pages/sgen/overview.mdx";
import GettingStarted from "./docs/pages/sgen/getting-started.mdx";
import CoreConcepts from "./docs/pages/sgen/core-concepts.mdx";

import GuideConfig from "./docs/pages/sgen/guides/config.mdx";
import GuideSubmit from "./docs/pages/sgen/guides/submit.mdx";
import GuidePolling from "./docs/pages/sgen/guides/polling.mdx";
import GuideResults from "./docs/pages/sgen/guides/results.mdx";
import GuideLatency from "./docs/pages/sgen/guides/latency.mdx";

import ExamplesLayout from "./examples/ExamplesLayout"; 
import ExamplesOverview from "./examples/pages/sgen/overview.mdx";
import Example1 from "./examples/pages/sgen/getting-started.mdx";

import Api from "./docs/pages/sgen/api.mdx";

// Footer
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";
import Licensing from "./Licensing";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="docs" element={<DocsLayout />}>
            <Route index element={<Navigate to="/docs/sgen" replace />} />

            <Route path="sgen" element={<Overview />} />
            <Route path="sgen/getting-started" element={<GettingStarted />} />
            <Route path="sgen/core-concepts" element={<CoreConcepts />} />

            <Route path="sgen/guides/config" element={<GuideConfig />} />
            <Route path="sgen/guides/submit" element={<GuideSubmit />} />
            <Route path="sgen/guides/polling" element={<GuidePolling />} />
            <Route path="sgen/guides/results" element={<GuideResults />} />
            <Route path="sgen/guides/latency" element={<GuideLatency />} />

            <Route path="sgen/api" element={<Api />} />
          </Route>

          {/* Example pages*/}
          <Route path="examples" element={<ExamplesLayout />}>
            <Route index element={<Navigate to="/examples/sgen" replace />} />
            <Route path="sgen" element={<ExamplesOverview />} />
            <Route path="sgen/example1" element={<Example1 />} />
          </Route>

          {/* Footer pages */}
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfUse />} />
          <Route path="licensing" element={<Licensing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}