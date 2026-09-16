import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies The Refined Vaper actually uses, stated plainly.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
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
              name: "Cookie Policy",
              item: `${SITE_URL}/cookie-policy`,
            },
          ],
        }}
      />
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5 text-center">Legal</p>
        <h1 className="font-display text-4xl sm:text-5xl text-fg text-center">
          Cookie Policy
        </h1>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-fg/40">
          Last updated 15 September 2026
        </p>
        <div className="prose-editorial mt-14 text-fg/80">
          <p>
            This website does not currently use tracking, advertising or
            analytics cookies. We have not added a cookie consent banner because
            there is nothing beyond strictly necessary technical cookies, if any,
            required simply for pages to function correctly, currently in use.
          </p>
          <h2>What might change</h2>
          <p>
            If we later introduce analytics or any cookie that is not strictly
            necessary, we will update this page, add a proper consent mechanism
            where required by law, and revise the &ldquo;last updated&rdquo; date
            above.
          </p>
          <h2>Third-party content</h2>
          <p>
            Where an article links out to an external website, such as GOV.UK,
            the NHS, or a manufacturer&rsquo;s site, that external site may set its
            own cookies once you leave The Refined Vaper. We do not control those
            cookies; check the relevant site&rsquo;s own policy for detail.
          </p>
          <h2>Questions</h2>
          <p>
            If you have a question about this policy, see our{" "}
            <Link href="/contact">Contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
