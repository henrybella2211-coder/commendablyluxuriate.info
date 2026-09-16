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
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
