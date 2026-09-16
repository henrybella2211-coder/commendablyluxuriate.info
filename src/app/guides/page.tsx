import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Editorial guides on premium vape brands and product design from The Refined Vaper, covering build quality, brand comparisons and buying guidance.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndex() {
  return (
    <div className="px-6 py-20 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl text-center mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Guides</p>
        <h1 className="font-display text-4xl sm:text-5xl text-fg">
          Guides &amp; considered writing
        </h1>
        <p className="mt-6 text-base leading-relaxed text-fg/70">
          A short, deliberately unhurried collection of guides on premium vape
          brands and the devices they build. New pieces are added occasionally,
          not on a schedule.
        </p>
      </div>

      <ol className="mx-auto max-w-3xl">
        {articles.map((article, index) => (
          <li key={article.slug}>
            <Link
              href={`/guides/${article.slug}`}
              className="group grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-8 sm:gap-12 items-center py-14"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  sizes="(min-width: 640px) 35vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                  {article.category} &middot; {article.readTime}
                </p>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl leading-tight text-fg group-hover:text-gold transition-colors">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-fg/70">
                  {article.excerpt}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-fg/40">
                  {article.lastUpdatedDisplay}
                </p>
              </div>
            </Link>
            {index < articles.length - 1 && (
              <div className="h-px w-full bg-gold/25" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
