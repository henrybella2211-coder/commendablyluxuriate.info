import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About The Refined Vaper, an independent UK editorial website covering premium vape brands and product design.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="px-6 py-20 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
          ],
        }}
      />
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 text-center">About</p>
        <h1 className="font-display text-4xl sm:text-5xl text-fg text-center">
          About The Refined Vaper
        </h1>
        <div className="prose-editorial mt-14 text-fg/80">
          <p>
            The Refined Vaper is an independent UK editorial website. We write about
            premium and near-premium vape kit for adult vapers who would rather choose
            a device once and keep it, than replace something cheap every few months.
          </p>
          <p>
            This is an informational and editorial publication, not a shop. We do not
            sell vape devices or e-liquid, and we are not affiliated with any of the
            manufacturers we write about. We do not accept payment in exchange for
            favourable coverage of any product or brand, and we do not run reviews
            with star ratings or invented test scores.
          </p>
          <h2>What we cover</h2>
          <p>
            Our focus is on build quality, materials, charging technology and the coil
            ecosystems of well-known pod kit and mod manufacturers, written as editorial
            opinion drawn from publicly available specifications rather than claims of
            personal lab testing. You can read more about how we approach this in our{" "}
            <Link href="/editorial-policy">editorial policy</Link>.
          </p>
          <h2>Who writes this</h2>
          <p>
            Content is written and edited by our UK-based editorial team. We do not
            publish fabricated author biographies, credentials or awards, and we keep
            our{" "}
            <Link href="/editorial-policy">editorial policy</Link> and{" "}
            <Link href="/age-notice">age notice</Link> up to date as the site grows.
          </p>
          <h2>Get in touch</h2>
          <p>
            If you have a question about anything on this site, our{" "}
            <Link href="/contact">contact page</Link> has the details.
          </p>
        </div>
      </div>
    </div>
  );
}
