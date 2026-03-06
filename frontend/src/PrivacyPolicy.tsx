export default function PrivacyPolicy() {
  return (
    <div className="page">
      <div className="bg-grid" />
      <div className="bg-glow" />

      <main className="hero" style={{ textAlign: "left" }}>
        <h1 className="title" style={{ fontSize: 44 }}>
          Privacy <span>Policy</span>
        </h1>

        <div className="docs-prose">
          <p style={{ opacity: 0.8 }}>Last updated: Feb 26, 2026</p>

          <p>
            This Privacy Policy explains how SGEN collects, uses, and shares information
            when you use our website and SDKs.
          </p>

          <h2>1. Information we collect</h2>
          <p>
            We collect personal information <strong>only</strong> as needed for <strong>billing</strong> and{" "}
            <strong>verification</strong>, and we do not collect personal information for advertising or behavioral
            tracking.
          </p>
          <ul>
            <li>
              <strong>Billing information</strong>: billing name, billing address, payment status, invoice details, and
              other information necessary to process payments and manage billing.
            </li>
            <li>
              <strong>Verification information</strong>: information needed to verify your identity or confirm account
              ownership (for example, to prevent fraud and secure accounts).
            </li>
            <li>
              <strong>Account information</strong>: information such as email address that may be used for billing,
              verification, and account communications related to those purposes.
            </li>
          </ul>

          <h2>2. Payment processing</h2>
          <p>
            Payments may be processed by third-party payment processors. We do not store full payment card numbers on our
            systems. Payment processors may provide us with limited information such as a payment token, card brand, and
            last four digits.
          </p>

          <h2>3. How we use information</h2>
          <p>We use the information we collect only to:</p>
          <ul>
            <li>Process payments, manage subscriptions, invoices, refunds, and billing support.</li>
            <li>Verify identity, prevent fraud, and secure accounts.</li>
            <li>Communicate with you about billing and verification matters (e.g., receipts, billing notices, account verification).</li>
            <li>Comply with legal, tax, and accounting obligations.</li>
          </ul>

          <h2>4. How we share information</h2>
          <p>We share personal information only as necessary for billing and verification, including with:</p>
          <ul>
            <li>
              <strong>Payment processors</strong> to complete transactions and help prevent fraud.
            </li>
            <li>
              <strong>Verification providers</strong> (if used) to verify identity or account ownership.
            </li>
            <li>
              <strong>Service providers</strong> who support billing and verification operations (under confidentiality obligations).
            </li>
            <li>
              <strong>Legal authorities</strong> if required to comply with applicable law, regulation, or legal process.
            </li>
          </ul>
          <p>
            We do not sell your personal information, and we do not share it with third parties for targeted advertising.
          </p>

          <h2>5. Data retention</h2>
          <p>
            We retain personal information only as long as necessary to provide billing and verification services and to
            meet legal, tax, accounting, and compliance requirements. When no longer needed, we delete or anonymize the
            information consistent with applicable laws.
          </p>

          <h2>6. Security</h2>
          <p>
            We implement reasonable administrative, technical, and organizational safeguards designed to protect your
            information. However, no system is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Your choices and rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, or delete your personal information, or
            to object to or restrict certain processing. To make a request, contact us at the email below. We may need
            to verify your identity before fulfilling certain requests.
          </p>

          <h2>8. Children’s privacy</h2>
          <p>
            The Service is not intended for children under 13 (or the minimum age required by local law). We do not
            knowingly collect personal information from children.
          </p>

          <h2>9. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will update the “Last updated” date when changes are
            made. If changes are material, we may provide additional notice through the Service.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact{" "}
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