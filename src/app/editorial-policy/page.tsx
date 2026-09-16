import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How The Refined Vaper researches, writes and maintains its guides.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
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
              name: "Editorial Policy",
              item: `${SITE_URL}/editorial-policy`,
            },
          ],
        }}
      />
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 text-center">Legal</p>
        <h1 className="font-display text-4xl sm:text-5xl text-fg text-center">
          Editorial Policy
        </h1>
        <div className="prose-editorial mt-14 text-fg/80">
          <h2>How we research</h2>
          <p>
            Guides on The Refined Vaper are written from publicly available
            manufacturer specifications, product documentation and general
            knowledge of vape hardware design. Where a claim is regulatory,
            legal or health-related, such as nicotine strength limits or the UK
            disposable vape ban, we reference official UK sources, including
            GOV.UK, the MHRA, and the NHS, rather than state it as our own
            authority.
          </p>
          <h2>What we do not do</h2>
          <ul>
            <li>We do not claim to have personally tested devices we write about.</li>
            <li>We do not publish star ratings, review scores, or invented lab results.</li>
            <li>We do not accept payment in exchange for favourable coverage.</li>
            <li>We do not publish fabricated testimonials, reviews or comments.</li>
          </ul>
          <h2>Corrections</h2>
          <p>
            If you spot something inaccurate or out of date, please tell us via
            our <Link href="/contact">Contact page</Link>. Where a correction is
            warranted, we update the article directly and refresh its
            &ldquo;last updated&rdquo; date; we do not quietly remove errors
            without acknowledging the change where it materially affects the
            guidance given.
          </p>
          <h2>Keeping content current</h2>
          <p>
            UK vaping regulation has changed meaningfully in recent years,
            including the ban on single-use disposable vapes from 1 June 2025.
            We review articles periodically and update them when rules or
            product categories change, rather than leaving outdated regulatory
            information live.
          </p>
          <h2>Independence</h2>
          <p>
            This is an independent publication. We are not owned by, or acting
            on behalf of, any vape manufacturer or retailer named on this site.
          </p>
        </div>
      </div>
    </div>
  );
}
