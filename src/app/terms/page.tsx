import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using FreshLane Supermarket online ordering services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="12 July 2026">
      <p>
        Welcome to FreshLane Supermarket. By accessing our website, creating an account,
        or placing an order, you agree to these Terms of Service (&quot;Terms&quot;). Please
        read them carefully. If you do not agree, please do not use our services.
      </p>

      <LegalSection title="1. About FreshLane">
        <p>
          FreshLane Supermarket is a neighbourhood retail store located at 42 Market
          Street, Koramangala, Bengaluru 560034. Our online platform allows you to
          browse products, place orders for home delivery or click &amp; collect, and
          manage your account.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <p>
          You must be at least 18 years old and capable of entering into a binding
          contract under Indian law to use our online ordering services. By placing an
          order, you confirm that the information you provide is accurate and complete.
        </p>
      </LegalSection>

      <LegalSection title="3. Products &amp; Pricing">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Product images are for illustration; actual items may vary slightly in
            appearance, weight, or packaging.
          </li>
          <li>
            We strive to display accurate prices and availability. In the event of an
            error, we reserve the right to cancel or amend an order and will notify you
            promptly.
          </li>
          <li>
            Prices are in Indian Rupees (INR) and include applicable taxes unless stated
            otherwise. Delivery fees and minimum order values may apply.
          </li>
          <li>
            Promotional offers and coupon codes are subject to their specific terms and
            cannot be combined unless explicitly stated.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Orders &amp; Payment">
        <p>
          An order is confirmed only after you receive an order confirmation (email or
          SMS). We reserve the right to refuse or cancel orders at our discretion,
          including for suspected fraud, stock unavailability, or delivery area
          restrictions.
        </p>
        <p>
          Payment is processed through authorised payment partners. By submitting payment
          details, you authorise us to charge the order total including applicable
          delivery fees and discounts.
        </p>
      </LegalSection>

      <LegalSection title="5. Delivery &amp; Click &amp; Collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Home delivery:</strong> We aim to deliver within the estimated
            timeframe shown at checkout. Delays due to weather, traffic, or unforeseen
            circumstances are not grounds for compensation beyond our quality guarantee.
          </li>
          <li>
            <strong>Click &amp; collect:</strong> Orders are prepared for pickup at our
            store. Uncollected orders may be cancelled after 24 hours; perishable items
            cannot be held indefinitely.
          </li>
          <li>
            You are responsible for providing a correct delivery address and being
            available to receive the order or authorise a representative.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Returns &amp; Refunds">
        <p>
          Fresh produce, dairy, and other perishable goods cannot be returned once
          delivered unless they are damaged, spoiled, or not as described. Report issues
          within 24 hours of delivery with photos where applicable.
        </p>
        <p>
          Non-perishable, sealed products in original condition may be eligible for
          exchange or refund at our discretion within 7 days of purchase. Refunds are
          processed to the original payment method within 7–10 business days.
        </p>
        <p>
          Contact{" "}
          <a href="mailto:hello@freshlane.in" className="text-terracotta hover:underline">
            hello@freshlane.in
          </a>{" "}
          or call +91 80 1234 5678 to initiate a return or refund request.
        </p>
      </LegalSection>

      <LegalSection title="7. Account Responsibilities">
        <p>
          You are responsible for maintaining the confidentiality of your account
          credentials and for all activity under your account. Notify us immediately
          of any unauthorised use. We may suspend or terminate accounts that violate
          these Terms.
        </p>
      </LegalSection>

      <LegalSection title="8. Intellectual Property">
        <p>
          All content on this website — including logos, text, images, and design — is
          owned by FreshLane or its licensors and protected by copyright and trademark
          law. You may not reproduce, distribute, or exploit our content without written
          permission.
        </p>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, FreshLane is not liable for indirect,
          incidental, or consequential damages arising from use of our website or
          services. Our total liability for any claim related to an order is limited to
          the amount you paid for that order.
        </p>
        <p>
          Nothing in these Terms excludes liability that cannot be excluded under the
          Consumer Protection Act, 2019 or other applicable Indian law.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law &amp; Disputes">
        <p>
          These Terms are governed by the laws of India. Any disputes shall be subject to
          the exclusive jurisdiction of the courts in Bengaluru, Karnataka. We
          encourage you to contact us first to resolve concerns amicably.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to These Terms">
        <p>
          We may revise these Terms at any time. Updated Terms will be posted on this
          page. Material changes affecting existing orders will be communicated where
          reasonably practicable.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          FreshLane Supermarket
          <br />
          42 Market Street, Koramangala, Bengaluru 560034
          <br />
          Email:{" "}
          <a href="mailto:hello@freshlane.in" className="text-terracotta hover:underline">
            hello@freshlane.in
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+918012345678" className="text-terracotta hover:underline">
            +91 80 1234 5678
          </a>
        </p>
        <p className="text-sm text-forest/60">
          See also our{" "}
          <Link href="/privacy" className="text-terracotta hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
