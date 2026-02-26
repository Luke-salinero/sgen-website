// src/Licensing.tsx
export default function Licensing() {
  return (
    <div className="page">
      <div className="bg-grid" />
      <div className="bg-glow" />

      <main className="hero" style={{ textAlign: "left" }}>
        <h1 className="title" style={{ fontSize: 44 }}>
          <span>MIT</span> License
        </h1>

        <div className="docs-prose">
          <p style={{ opacity: 0.8 }}>Last updated: Feb 26, 2026</p>

          <pre style={{ whiteSpace: "pre-wrap" }}>
{`MIT License

Copyright (c) 2026 BigSigma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </pre>
        </div>
      </main>
    </div>
  );
}