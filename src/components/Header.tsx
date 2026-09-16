import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="w-full pt-8 pb-6 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center">
        <Link
          href="/"
          className="font-display text-2xl sm:text-3xl tracking-[0.2em] uppercase text-fg text-center"
        >
          {SITE_NAME}
        </Link>
        <div className="mt-4 h-px w-16 bg-gold" aria-hidden="true" />
        <nav aria-label="Primary" className="mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.25em] text-fg/80">
            {navLinks.map((link) => (
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
      </div>
    </header>
  );
}
