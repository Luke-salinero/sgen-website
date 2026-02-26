// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import DocsLayout from "./docs/DocsLayout";
import AppLayout from "./AppLayout";

// MDX pages...
import Overview from "./docs/pages/sgen/overview.mdx";
import GettingStarted from "./docs/pages/sgen/getting-started.mdx";
import CoreConcepts from "./docs/pages/sgen/core-concepts.mdx";

import GuideConfig from "./docs/pages/sgen/guides/config.mdx";
import GuideSubmit from "./docs/pages/sgen/guides/submit.mdx";
import GuidePolling from "./docs/pages/sgen/guides/polling.mdx";
import GuideResults from "./docs/pages/sgen/guides/results.mdx";
import GuideLatency from "./docs/pages/sgen/guides/latency.mdx";
import GuideTroubleshooting from "./docs/pages/sgen/guides/troubleshooting.mdx";

import Api from "./docs/pages/sgen/api.mdx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ NEW: everything lives under AppLayout so topbar is always visible */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Navigate to="/docs/sgen" replace />} />

            <Route path="sgen" element={<Overview />} />
            <Route path="sgen/getting-started" element={<GettingStarted />} />
            <Route path="sgen/core-concepts" element={<CoreConcepts />} />

            <Route path="sgen/guides/config" element={<GuideConfig />} />
            <Route path="sgen/guides/submit" element={<GuideSubmit />} />
            <Route path="sgen/guides/polling" element={<GuidePolling />} />
            <Route path="sgen/guides/results" element={<GuideResults />} />
            <Route path="sgen/guides/latency" element={<GuideLatency />} />
            <Route path="sgen/guides/troubleshooting" element={<GuideTroubleshooting />} />

            <Route path="sgen/api" element={<Api />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}