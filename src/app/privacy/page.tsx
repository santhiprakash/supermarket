import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FreshLane Supermarket collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="12 July 2026">
      <p>
        FreshLane Supermarket (&quot;FreshLane&quot;, &quot;we&quot;, &quot;us&quot;) operates the
        website at freshlane.in and our online ordering services. This Privacy Policy
        explains what information we collect, how we use it, and your rights under
        applicable Indian law, including the Digital Personal Data Protection Act, 2023
        (DPDPA) where applicable.
      </p>

      <LegalSection title="1. Information We Collect">
        <p>We may collect the following categories of personal data:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Account details:</strong> name, email address, phone number, and
            password (stored in encrypted form).
          </li>
          <li>
            <strong>Order &amp; delivery details:</strong> delivery address, billing
            information, order history, and delivery preferences (home delivery or click
            &amp; collect).
          </li>
          <li>
            <strong>Payment information:</strong> transaction references processed via
            our payment partners (we do not store full card numbers on our servers).
          </li>
          <li>
            <strong>Technical data:</strong> IP address, browser type, device
            information, and cookies used to keep you signed in and improve the site.
          </li>
          <li>
            <strong>Communications:</strong> messages you send via our contact form,
            email, or customer support channels.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>We use your personal data to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Process and fulfil online orders, including delivery and pickup.</li>
          <li>Manage your account and order history.</li>
          <li>Send order confirmations, delivery updates, and service notifications.</li>
          <li>Apply coupons and promotional offers you opt into.</li>
          <li>Improve our website, product range, and customer experience.</li>
          <li>Comply with legal obligations and resolve disputes.</li>
        </ul>
        <p>
          We do not sell your personal data to third parties. We share data only with
          service providers who help us operate (payment processors, delivery partners,
          hosting providers) under contractual confidentiality obligations.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies">
        <p>
          We use essential cookies to maintain your session and shopping cart. Analytics
          cookies may be used to understand how visitors use our site. You can control
          cookies through your browser settings; disabling essential cookies may affect
          checkout and account features.
        </p>
      </LegalSection>

      <LegalSection title="4. Data Retention">
        <p>
          We retain order and account records for as long as your account is active and
          for up to seven years thereafter where required for tax, accounting, or legal
          purposes. Marketing preferences are honoured until you unsubscribe or delete
          your account.
        </p>
      </LegalSection>

      <LegalSection title="5. Your Rights">
        <p>Depending on applicable law, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access and receive a copy of your personal data.</li>
          <li>Correct inaccurate or incomplete information.</li>
          <li>Request deletion of your data, subject to legal retention requirements.</li>
          <li>Withdraw consent for marketing communications at any time.</li>
          <li>Lodge a complaint with the relevant data protection authority.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@freshlane.in" className="text-terracotta hover:underline">
            privacy@freshlane.in
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Security">
        <p>
          We use HTTPS encryption, access controls, and industry-standard practices to
          protect your data. No method of transmission over the internet is 100% secure;
          we encourage you to use a strong, unique password for your account.
        </p>
      </LegalSection>

      <LegalSection title="7. Children">
        <p>
          Our services are not directed at children under 18. We do not knowingly collect
          personal data from minors. If you believe a child has provided us data, please
          contact us and we will delete it promptly.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Material changes will be
          posted on this page with an updated &quot;Last updated&quot; date. Continued use of
          our services after changes constitutes acceptance of the revised policy.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>
          FreshLane Supermarket
          <br />
          42 Market Street, Koramangala, Bengaluru 560034
          <br />
          Email:{" "}
          <a href="mailto:privacy@freshlane.in" className="text-terracotta hover:underline">
            privacy@freshlane.in
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+918012345678" className="text-terracotta hover:underline">
            +91 80 1234 5678
          </a>
        </p>
        <p className="text-sm text-forest/60">
          See also our{" "}
          <Link href="/terms" className="text-terracotta hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
