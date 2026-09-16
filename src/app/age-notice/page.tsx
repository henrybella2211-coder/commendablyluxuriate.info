import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Age Notice",
  description: "The Refined Vaper is intended for adults aged 18 and over.",
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <div className="px-6 py-20 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Age Notice", item: `${SITE_URL}/age-notice` },
          ],
        }}
      />
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 text-center">18+</p>
        <h1 className="font-display text-4xl sm:text-5xl text-fg text-center">
          Age Notice
        </h1>
        <div className="prose-editorial mt-14 text-fg/80">
          <p>
            The Refined Vaper is intended for adults aged 18 and over, in
            particular existing smokers and vapers seeking factual information
            about vape products, and it is not intended to encourage anyone
            under 18, or anyone who does not already smoke or vape, to start.
          </p>
          <p>
            It is illegal in the UK to sell vaping or tobacco products to
            anyone under 18. If you are under 18, please leave this site.
          </p>
          <h2>On the risks of vaping</h2>
          <p>
            Vaping is not risk-free. According to the NHS, vaping carries far
            fewer risks than smoking, and nicotine vapes can be a useful tool to
            help smokers quit, but the long-term effects of vaping are still
            being studied. We do not describe vaping as safe or harmless, and
            nothing on this site is medical advice. If you are trying to stop
            smoking, NHS Smokefree offers free, impartial support.
          </p>
          <h2>Responsible reading</h2>
          <p>
            Our guides describe how existing vape products and hardware work.
            They are written for people who already use, or are actively
            considering switching to, these products, not as an invitation for
            non-smokers to begin.
          </p>
          <p>
            For more on how we handle content generally, see our{" "}
            <Link href="/editorial-policy">Editorial Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
