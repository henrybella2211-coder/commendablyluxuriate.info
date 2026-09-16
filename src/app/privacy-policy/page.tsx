import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Refined Vaper handles personal data, in plain terms.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-6 py-20 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy Policy",
              item: `${SITE_URL}/privacy-policy`,
            },
          ],
        }}
      />
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 text-center">Legal</p>
        <h1 className="font-display text-4xl sm:text-5xl text-fg text-center">
          Privacy Policy
        </h1>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-fg/40">
          Last updated 15 September 2026
        </p>
        <div className="prose-editorial mt-14 text-fg/80">
          <p>
            This policy explains what happens to personal data when you visit The
            Refined Vaper (commendablyluxuriate.info). We keep the amount of data we
            collect deliberately small.
          </p>
          <h2>What we collect</h2>
          <p>
            This site does not currently run analytics, advertising, or tracking
            scripts of any kind. We do not use cookies to build a profile of visitors
            or to serve targeted advertising. See our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link> for the full detail on
            cookies.
          </p>
          <p>
            If you email us via the address on our{" "}
            <Link href="/contact">Contact page</Link>, we receive whatever
            information you choose to include in that message, such as your email
            address, name if given, and the content of your enquiry. We use this
            solely to respond to you.
          </p>
          <h2>Hosting and technical data</h2>
          <p>
            Like most websites, our hosting provider may record basic technical logs
            (such as IP address and request time) for security and reliability
            purposes. We do not use this data for marketing.
          </p>
          <h2>Your rights</h2>
          <p>
            Under UK data protection law (UK GDPR and the Data Protection Act 2018),
            you have the right to ask what personal data we hold about you, to ask
            for it to be corrected or deleted, and to object to how it is used.
            Because we hold very little personal data beyond email correspondence,
            most requests can be resolved quickly. To make a request, contact us
            using the details on our <Link href="/contact">Contact page</Link>.
          </p>
          <h2>Changes to this policy</h2>
          <p>
            If how we handle data changes, for example if we later add analytics or
            a mailing list, we will update this page and the &ldquo;last updated&rdquo;
            date above.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
