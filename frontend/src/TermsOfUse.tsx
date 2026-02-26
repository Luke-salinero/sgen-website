export default function TermsOfUse() {
  return (
    <div className="page">
      <div className="bg-grid" />
      <div className="bg-glow" />

      <main className="hero" style={{ textAlign: "left" }}>
        <h1 className="title" style={{ fontSize: 44 }}>
          Terms <span>of Use</span>
        </h1>

        <div className="docs-prose">
          <p style={{ opacity: 0.8 }}>Last updated: Feb 26, 2026</p>

          <p>
            These Terms of Use (“Terms”) govern your access to and use of SGEN (“SGEN,” “we,” “us,” or “our”),
            including our website, documentation, APIs, SDKs, and related services (collectively, the “Service”).
            By accessing or using the Service, you agree to these Terms.
          </p>

          <h2>1. Eligibility and account responsibility</h2>
          <ul>
            <li>You must comply with applicable laws and regulations when using the Service.</li>
            <li>
              You are responsible for maintaining the confidentiality of your credentials (including API keys) and
              for all activity under your account.
            </li>
            <li>
              You agree to provide accurate information and keep your account information up to date where required.
            </li>
          </ul>

          <h2>2. Acceptable use</h2>
          <p>You agree not to misuse the Service. This includes, but is not limited to:</p>
          <ul>
            <li>Attempting to disrupt, degrade, or interfere with the Service or related systems.</li>
            <li>Accessing or probing non-public areas of the Service without authorization.</li>
            <li>Using the Service to violate laws or infringe the rights of others.</li>
            <li>Reverse engineering or attempting to extract source code from the Service except where permitted by law.</li>
            <li>Sharing, selling, or publishing API keys or credentials, or allowing unauthorized third parties to use them.</li>
          </ul>

          <h2>3. API keys and security</h2>
          <ul>
            <li>API keys are provided for your authorized use only.</li>
            <li>You must protect your API keys and treat them like passwords.</li>
            <li>
              If you suspect your API key or account has been compromised, you must notify us promptly and rotate or revoke
              the key where available.
            </li>
          </ul>

          <h2>4. Service changes and availability</h2>
          <p>
            The Service is provided on an “as is” and “as available” basis. We may change, suspend, or discontinue any part
            of the Service at any time, including features, endpoints, documentation, or availability, without liability to you.
          </p>

          <h2>5. Intellectual property</h2>
          <ul>
            <li>
              The Service, including its content, design, documentation, and software, is owned by SGEN or its licensors and is
              protected by applicable intellectual property laws.
            </li>
            <li>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable,
              revocable right to access and use the Service for its intended purpose.
            </li>
          </ul>

          <h2>6. Feedback</h2>
          <p>
            If you provide feedback, suggestions, or ideas about the Service, you grant us the right to use them without restriction
            or compensation, unless prohibited by law.
          </p>

          <h2>7. Termination</h2>
          <p>
            We may suspend or terminate your access to the Service if we believe you have violated these Terms or if necessary to
            protect the security, integrity, or availability of the Service. You may stop using the Service at any time.
          </p>

          <h2>8. Disclaimers</h2>
          <p>
            To the maximum extent permitted by law, SGEN disclaims all warranties, express or implied, including implied warranties
            of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be
            uninterrupted, error-free, or secure.
          </p>

          <h2>9. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, SGEN will not be liable for any indirect, incidental, special, consequential, or
            punitive damages, or for any loss of profits, revenues, data, or goodwill, arising out of or related to your use of (or
            inability to use) the Service.
          </p>

          <h2>10. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. If we make material changes, we may provide notice through the Service or
            by other means. Your continued use of the Service after changes become effective constitutes acceptance of the updated Terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a className="footer-link" href="mailto:support@bigsigma.tech">
              support@bigsigma.tech
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}