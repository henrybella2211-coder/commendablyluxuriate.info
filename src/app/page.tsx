import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata = {
  title: "Premium vape brand and product guides",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  const [featuredOne, featuredTwo] = articles;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[78vh] min-h-[520px] max-h-[820px]">
        <Image
          src="/images/hero-black-box-mod-wood.jpg"
          alt="A premium Vaporesso pod mod kit resting on a dark wood surface, softly lit"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-16 sm:pb-20">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl max-w-3xl leading-[1.1] text-fg">
            A considered look at premium vape kit
          </h1>
          <p className="mt-5 max-w-xl text-sm sm:text-base text-fg/80 tracking-wide">
            Editorial guides on the brands and devices built to be kept, not replaced.
          </p>
          <Link
            href={`/guides/${featuredOne.slug}`}
            className="mt-9 inline-block bg-gold text-bg text-xs uppercase tracking-[0.25em] font-medium px-8 py-4 hover:bg-fg transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Read the guide
          </Link>
        </div>
      </section>

      {/* Editorial intro */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl sm:text-3xl leading-snug text-fg/90">
            Most vape kit is bought quickly and replaced soon after. We write for
            the smaller number of vapers who would rather choose once, choose
            well, and understand what they are paying for.
          </p>
          <p className="mt-8 text-base leading-relaxed text-fg/70">
            The Refined Vaper covers the flagship and near-flagship devices from
            established manufacturers, with particular attention to build
            quality, materials, charging technology and the coil ecosystems that
            determine how a kit actually lives day to day. We do not run
            giveaways, publish star ratings, or claim to have tested devices in a
            lab. What follows is editorial judgement, drawn from publicly
            available specifications and a genuine interest in how these things
            are made.
          </p>
        </div>
      </section>

      {/* Featured guides, 2-up */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gold mb-14">
            Featured guides
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
            {[featuredOne, featuredTwo].map((article) => (
              <Link
                key={article.slug}
                href={`/guides/${article.slug}`}
                className="group block"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6 h-px w-10 bg-gold" aria-hidden="true" />
                <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-gold">
                  {article.category}
                </p>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl leading-tight text-fg group-hover:text-gold transition-colors">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-fg/70 max-w-md">
                  {article.excerpt}
                </p>
                <span className="link-underline mt-5 inline-block text-xs uppercase tracking-[0.2em] text-fg/80">
                  Read the guide
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach strip */}
      <section className="px-6 py-20 sm:py-24 border-t border-gold/25">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Our approach
          </p>
          <h2 className="font-display text-2xl sm:text-3xl leading-snug text-fg">
            Editorial judgement, not test-bench theatre
          </h2>
          <p className="mt-6 text-base leading-relaxed text-fg/70">
            We do not claim to have personally tested every device we write
            about, and we will not invent scores, star ratings or lab results to
            suggest otherwise. Our guides are built from publicly available
            specifications, manufacturer positioning and a working knowledge of
            how vape hardware is designed, then written up as honest editorial
            opinion. Where a claim is regulatory or factual, such as nicotine
            strength limits, we reference the relevant UK source rather than
            assert it ourselves. Read more in our{" "}
            <Link href="/editorial-policy" className="link-underline">
              editorial policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
