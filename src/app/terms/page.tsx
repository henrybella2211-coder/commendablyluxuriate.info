import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: "Terms of use and website disclaimer for The Refined Vaper.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="px-6 py-20 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Terms & Disclaimer", item: `${SITE_URL}/terms` },
          ],
        }}
      />
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 text-center">Legal</p>
        <h1 className="font-display text-4xl sm:text-5xl text-fg text-center">
          Terms &amp; Disclaimer
        </h1>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-fg/40">
          Last updated 15 September 2026
        </p>
        <div className="prose-editorial mt-14 text-fg/80">
          <h2>Use of this website</h2>
          <p>
            The Refined Vaper is an independent editorial and information website
            for adults in the United Kingdom. By using this site you agree to use
            it lawfully and not to misuse or attempt to disrupt it.
          </p>
          <h2>Informational purpose only</h2>
          <p>
            Content on this site is for general information only. It is not
            medical advice, and nothing here should be treated as a
            recommendation to start vaping, particularly if you have never
            smoked. Vaping is not risk-free. Where we describe public health
            positioning, such as vaping being considered substantially less
            harmful than smoking, this reflects guidance from bodies such as the
            NHS and is attributed accordingly, not asserted as our own medical
            opinion. See our <Link href="/age-notice">Age Notice</Link>.
          </p>
          <h2>Product and brand information</h2>
          <p>
            Product names, specifications and brand names mentioned on this site
            belong to their respective owners. We are not affiliated with, and do
            not speak on behalf of, any vape manufacturer named on this site.
            Specifications are described as manufacturer-stated information
            unless otherwise noted, not as results of independent testing by us.
          </p>
          <h2>External links</h2>
          <p>
            We link to official UK sources and, occasionally, to manufacturer
            websites, where doing so is genuinely useful. We are not responsible
            for the content or availability of external websites, and a link does
            not imply endorsement of everything on that site.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Text and original imagery on this site belong to The Refined Vaper
            unless otherwise credited. Photographs are sourced under the Unsplash
            License. Please do not republish our articles wholesale without
            permission.
          </p>
          <h2>Liability</h2>
          <p>
            We take reasonable care to keep content accurate and up to date, but
            we make no guarantee that it is complete or error-free, and we accept
            no liability for decisions made on the basis of this site&rsquo;s
            content. Always check current regulatory information directly with
            official sources such as GOV.UK or the MHRA.
          </p>
        </div>
      </div>
    </div>
  );
}
