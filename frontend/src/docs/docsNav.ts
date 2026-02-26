export type DocItem = { title: string; path: string };

export const sgenNav: { section: string; items: DocItem[] }[] = [
  {
    section: "SGEN Python SDK",
    items: [
      { title: "Overview", path: "/docs/sgen" },
      { title: "Getting Started", path: "/docs/sgen/getting-started" },
    ],
  },
  {
    section: "Guides",
    items: [
      { title: "Generating a Config", path: "/docs/sgen/guides/config" },
      { title: "Submit a Job", path: "/docs/sgen/guides/submit" },
      { title: "Polling", path: "/docs/sgen/guides/polling" },
      { title: "Getting the Result", path: "/docs/sgen/guides/results" },
      { title: "Measure Latency", path: "/docs/sgen/guides/latency" },
 //     { title: "Troubleshooting", path: "/docs/sgen/guides/troubleshooting" },
    ],
  },
  {
    section: "Reference",
    items: [{ title: "API Reference", path: "/docs/sgen/api" }],
  },
];
