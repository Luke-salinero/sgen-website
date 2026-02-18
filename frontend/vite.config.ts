import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// MDX
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            // Keep it minimal; you can expand later (titles, copy buttons, etc.)
            theme: "github-dark",
          },
        ],
      ],
    }),
  ],
    server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
