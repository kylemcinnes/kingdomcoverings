export const COMPANY = {
  legalName: "Kingdom Coverings Painting Inc.",
  shortName: "Kingdom Coverings",
  owner: "Justin Roberts",
  ownerTitle: "Owner & Founder",
  ministry: "Church of Second Chances (COSC)",
  ministryTagline:
    "A ministry for the marginalized—meeting practical needs with dignity and hope.",
  phoneDisplay: "647-625-6373",
  phoneE164: "+16476256373",
  email: "kingdomcoveringspainting@gmail.com",
  facebookUrl: "https://www.facebook.com/kingdomcoveringspaintinginc/",
  areas: [
    "Port Credit",
    "Mississauga",
    "Oakville",
    "Greater Toronto Area (GTA)",
  ],
  addressLocality: "Mississauga",
  addressRegion: "ON",
  addressCountry: "CA",
  postalCode: "L5G 1C7",
  streetAddress: "Serving Port Credit & Mississauga",
  geo: {
    latitude: 43.553_112,
    longitude: -79.586_234,
  },
  differentiator:
    "Professional painting company that uses profits to fund ministry work and help the less fortunate.",
  services: [
    "Interior & exterior residential painting",
    "Commercial & industrial painting",
    "Wood staining & finishing",
  ],
  serviceCategories: [
    {
      id: "interior",
      title: "Interior Painting",
      summary:
        "Flawless finishes for living spaces, trim, ceilings, and cabinetry.",
    },
    {
      id: "exterior",
      title: "Exterior Painting",
      summary:
        "Weather-smart prep and coatings that protect curb appeal year-round.",
    },
    {
      id: "commercial",
      title: "Commercial & Industrial",
      summary:
        "Minimal disruption scheduling for offices, retail, and industrial sites.",
    },
    {
      id: "wood",
      title: "Wood Staining & Restoration",
      summary:
        "Decks, doors, millwork, and heritage wood brought back to life.",
    },
  ] as const,
  trustPlatforms: [
    "Houzz",
    "HomeStars",
    "Google",
    "Facebook",
    "Jiffy",
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/our-impact", label: "Our Impact" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const PRIMARY_KEYWORDS = [
  "Port Credit painter",
  "Mississauga painting company",
  "GTA professional painter",
  "Christian painting company Ontario",
] as const;
