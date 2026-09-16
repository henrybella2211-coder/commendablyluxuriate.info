import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const footerLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms", label: "Terms & Disclaimer" },
  { href: "/age-notice", label: "Age Notice" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 w-full px-6 pb-10">
      <div className="mx-auto max-w-5xl">
        <div className="h-px w-full bg-gold" aria-hidden="true" />
        <div className="flex flex-col items-center text-center pt-10 gap-6">
          <span className="font-display text-lg tracking-[0.2em] uppercase text-fg">
            {SITE_NAME}
          </span>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-fg/70">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="max-w-xl text-[11px] leading-relaxed text-fg/50 pt-6">
            This website and its content are intended for adults aged 18 and over who
            already smoke or vape, or who are seeking factual information about
            vaping products. Nothing on this site is intended to encourage anyone
            under 18, or anyone who does not already smoke or vape, to start.
          </p>
          <p className="text-[11px] text-fg/40">
            &copy; {year} {SITE_NAME}. Independent UK vaping information website.
          </p>
        </div>
      </div>
    </footer>
  );
}
