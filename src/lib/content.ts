export type PortfolioItem = {
  id: string;
  title: string;
  caption: string;
  category: "interior" | "exterior" | "commercial" | "wood";
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80";

export const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "Meticulous prep, crisp lines, and a crew that treated our Port Credit home like their own. We would hire Kingdom Coverings again without hesitation.",
    name: "Elena M.",
    location: "Port Credit, ON",
    source: "Houzz",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Our exterior looks brand new. Communication was excellent from quote to final walkthrough—rare in this industry.",
    name: "David & Priya K.",
    location: "Mississauga, ON",
    source: "HomeStars",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "They painted our retail space after hours so we did not lose trading days. Professional, fast, and spotless cleanup.",
    name: "Sarah T.",
    location: "Oakville, ON",
    source: "Google",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Beautiful staining on our heritage trim. You can tell they care about craftsmanship—not just speed.",
    name: "Michael R.",
    location: "GTA",
    source: "Facebook",
    rating: 5,
  },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "pc-living",
    title: "Port Credit living room refresh",
    caption: "Soft neutrals, full repaint including ceilings.",
    category: "interior",
    beforeSrc:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Living room before interior painting",
    afterAlt: "Living room after professional interior painting",
  },
  {
    id: "oakville-exterior",
    title: "Oakville coastal exterior",
    caption: "Full prep, cedar repairs, premium exterior system.",
    category: "exterior",
    beforeSrc:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "House exterior before repainting",
    afterAlt: "House exterior after professional painting",
  },
  {
    id: "mississauga-kitchen",
    title: "Mississauga kitchen & trim",
    caption: "Cabinet enamel, walls, and detailed brushwork.",
    category: "interior",
    beforeSrc:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Kitchen before cabinet painting",
    afterAlt: "Kitchen after cabinet refinishing",
  },
  {
    id: "commercial-bay",
    title: "Industrial bay repaint",
    caption: "High-durability coatings with phased access.",
    category: "commercial",
    beforeSrc:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Commercial space before painting",
    afterAlt: "Commercial space after industrial painting",
  },
  {
    id: "deck-stain",
    title: "Cedar deck restoration",
    caption: "Strip, brighten, sand, and marine-grade stain.",
    category: "wood",
    beforeSrc:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Weathered wood deck before staining",
    afterAlt: "Deck after staining and refinishing",
  },
  {
    id: "heritage-trim",
    title: "Heritage millwork",
    caption: "Hand-rubbed stain + lacquer on interior doors.",
    category: "wood",
    beforeSrc:
      "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=900&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Interior doors before refinishing",
    afterAlt: "Interior doors after wood staining",
  },
];
