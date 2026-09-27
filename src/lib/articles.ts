export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  lastUpdatedISO: string;
  lastUpdatedDisplay: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const articles: Article[] = [
  {
    slug: "what-makes-a-vape-kit-feel-premium",
    title: "What makes a vape kit feel 'premium'? Build quality explained",
    excerpt:
      "Chassis materials, screens, charging technology and coil ecosystems: an editorial look at what actually separates a considered device from a disposable-feeling one.",
    category: "Build quality",
    readTime: "8 min read",
    lastUpdatedISO: "2026-09-10",
    lastUpdatedDisplay: "Last updated 10 September 2026",
    image: {
      src: "/images/device-chassis-close-up.jpg",
      alt: "Close-up of a red and black box mod kit's zinc-alloy chassis and screen resting against dark volcanic rock",
      width: 1600,
      height: 1067,
    },
  },
  {
    slug: "vaporesso-voopoo-geekvape-flagship-pod-kits",
    title: "Vaporesso, Voopoo and GeekVape: how their flagship pod kits differ in approach",
    excerpt:
      "A brand-level editorial comparison of how three well-known manufacturers tend to position their higher-end pod systems, based on publicly available specifications.",
    category: "Brand comparison",
    readTime: "9 min read",
    lastUpdatedISO: "2026-09-13",
    lastUpdatedDisplay: "Last updated 13 September 2026",
    image: {
      src: "/images/group-devices-table.jpg",
      alt: "A row of Vaporesso pod mod kits and e-liquid bottles displayed on a retail counter",
      width: 1600,
      height: 1067,
    },
  },
  {
    slug: "is-a-more-expensive-vape-kit-worth-it",
    title: "Is a more expensive vape kit actually worth it?",
    excerpt:
      "Weighing the genuine reasons to spend more against the reasons a cheaper kit is perfectly adequate for many people, with practical guidance rather than a hard sell.",
    category: "Buying guidance",
    readTime: "8 min read",
    lastUpdatedISO: "2026-09-15",
    lastUpdatedDisplay: "Last updated 15 September 2026",
    image: {
      src: "/images/two-devices-comparison.jpg",
      alt: "Two pod mod kits in different colour finishes standing side by side on a reflective bar counter",
      width: 1600,
      height: 1250,
    },
  },
  {
    slug: "uwell-aspire-quieter-craftsmanship",
    title: "Uwell and Aspire: a quieter kind of craftsmanship",
    excerpt:
      "An editorial look at how Uwell and Aspire tend to build their higher-end pod kits around restraint and coil consistency rather than spectacle, set against the flagship theatrics covered elsewhere on this site.",
    category: "Brand comparison",
    readTime: "8 min read",
    lastUpdatedISO: "2026-09-16",
    lastUpdatedDisplay: "Last updated 16 September 2026",
    image: {
      src: "/images/pod-device-matte-grey-smoke.jpg",
      alt: "A single matte grey pod vape device photographed close up against a softly lit smoke backdrop",
      width: 2400,
      height: 3600,
    },
  },
  {
    slug: "owning-more-than-one-vape-kit",
    title: "The case for owning more than one vape kit",
    excerpt:
      "A genuinely weighed look at why some vapers keep more than one device, from a spare while a coil beds in to separate kits for home and out and about, set fairly against the case for owning just one.",
    category: "Buying guidance",
    readTime: "8 min read",
    lastUpdatedISO: "2026-09-17",
    lastUpdatedDisplay: "Last updated 17 September 2026",
    image: {
      src: "/images/pair-of-pod-kits-side-by-side.jpg",
      alt: "Two different pod vape kits placed side by side on a table, photographed close up",
      width: 2400,
      height: 1875,
    },
  },
  {
    slug: "al-fakher-hypermax-prime-50k-finish-and-build",
    title: "Al Fakher's HyperMax Prime 50K: an editorial look at its finish and build",
    excerpt:
      "A considered look at the rechargeable HyperMax Prime 50K's finish, its snap-pod mechanism and how its mainstream design brief compares in philosophy to the flagship pod kits covered elsewhere on this site.",
    category: "Device spotlight",
    readTime: "9 min read",
    lastUpdatedISO: "2026-09-19",
    lastUpdatedDisplay: "Last updated 19 September 2026",
    image: {
      src: "/images/device-black-red-backdrop.jpg",
      alt: "A matte black rechargeable pod vape device standing upright against a deep red and black studio backdrop",
      width: 2000,
      height: 2496,
    },
  },
  {
    slug: "why-experienced-vapers-choose-lower-nicotine-strengths",
    title: "Why more experienced vapers are choosing lower nicotine strengths",
    excerpt:
      "An editorial look at why some long-term vapers move down in strength rather than up, from shifting consumption patterns to larger devices used more often, not a recommendation that it suits everyone.",
    category: "Nicotine strength",
    readTime: "8 min read",
    lastUpdatedISO: "2026-09-27",
    lastUpdatedDisplay: "Last updated 27 September 2026",
    image: {
      src: "/images/eliquid-bottle-and-pod-device.jpg",
      alt: "A 10ml nic salt e-liquid bottle showing its nicotine strength on the label, standing next to a pod vape device",
      width: 2400,
      height: 3027,
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
