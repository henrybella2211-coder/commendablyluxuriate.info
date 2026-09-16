import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import type { Article } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type ArticleLayoutProps = {
  article: Article;
  children: ReactNode;
};

export default function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const url = `${SITE_URL}/guides/${article.slug}`;

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          image: `${SITE_URL}${article.image.src}`,
          datePublished: article.lastUpdatedISO,
          dateModified: article.lastUpdatedISO,
          author: { "@type": "Organization", name: `${SITE_NAME} Editorial Team` },
          publisher: { "@type": "Organization", name: SITE_NAME },
          mainEntityOfPage: url,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
            { "@type": "ListItem", position: 3, name: article.title, item: url },
          ],
        }}
      />

      <nav aria-label="Breadcrumb" className="px-6 pt-4">
        <ol className="mx-auto max-w-3xl flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-fg/40">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/guides" className="hover:text-gold transition-colors">
              Guides
            </Link>
          </li>
        </ol>
      </nav>

      <header className="px-6 pt-10 pb-10 sm:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {article.category}
          </p>
          <h1 className="mt-5 font-display text-3xl sm:text-5xl leading-tight text-fg">
            {article.title}
          </h1>
          <p className="mt-6 text-[11px] uppercase tracking-[0.15em] text-fg/40">
            {article.lastUpdatedDisplay} &middot; {article.readTime}
          </p>
        </div>
      </header>

      <div className="relative w-full h-[45vh] min-h-[320px] max-h-[560px]">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="px-6 py-16 sm:py-20">
        <div className="prose-editorial mx-auto max-w-2xl text-fg/85 text-[1.05rem]">
          {children}
        </div>
      </div>
    </article>
  );
}
