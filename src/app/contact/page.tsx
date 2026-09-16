import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Refined Vaper's editorial team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="px-6 py-20 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
          ],
        }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Contact</p>
        <h1 className="font-display text-4xl sm:text-5xl text-fg">Get in touch</h1>
        <p className="mt-8 text-base leading-relaxed text-fg/70">
          For editorial queries, corrections or general questions about anything
          published on The Refined Vaper, email us directly. We are a small
          independent site and read every message, though we cannot guarantee
          a reply to every enquiry.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-10 inline-block bg-gold text-bg text-xs uppercase tracking-[0.25em] font-medium px-8 py-4 hover:bg-fg transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-10 text-xs text-fg/40 max-w-md mx-auto leading-relaxed">
          This address is not yet monitored by a live support team; treat it as the
          intended point of contact ahead of launch. We do not offer a phone number
          or postal address, and we are not able to give personalised advice on
          quitting smoking. For that, the NHS Smokefree service is a better place
          to start.
        </p>
      </div>
    </div>
  );
}
